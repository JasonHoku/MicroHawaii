const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
var dbData = {};
let userID = {};

console.log("Initiating MicroHawaii Backend");

exports.getMicroHawaiiData = functions.https.onRequest((req, res) => {
  res.status(200);
  const cors = require("cors")({ origin: true });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  try {
    let runOnce = 0;
    //Declare CORs Rules
    const cors = require("cors")({ origin: true });
    res.status(200);
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    cors(req, res, () => {
      const cors = require("cors")({ origin: true });
      res.status(200);
      res.set("Access-Control-Allow-Origin", "*");
      res.set("Access-Control-Allow-Headers", "Content-Type");
      const gotUID = JSON.parse(req.headers["headertokens"]).uid;
      userID = JSON.parse(req.headers["headertokens"]).uid;
      const gotHeaders = JSON.stringify(req.headers["headertokens"]);
      async function getDBData() {
        var db = admin.firestore();
        db.collection("totalClicks")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              var key = doc.id;
              var data = doc.data();
              data["key"] = key;
              dbData[key] = data;
              //Development block for localhost emulator
              //Begin Auth Comparison
              if (dbData.value) {
                //Successful Admin UID

                res.send(JSON.stringify(dbData.value.population));
                res.status(200).send();
              } else {
                //Not Admin UID
                res.send(JSON.stringify("Error Retrieving Data"));
                res.status(200).send();
              }
            });
          });
      }
      getDBData();
    });
  } catch (error) {
    console.log(error);
  }
});

exports.processSendEmail = functions.https.onRequest((req, res) => {
  // const userID = JSON.parse(req.headers["headertokens"]).UUID;
  const reqBody = req.body;

  res.status(200);
  try {
    const cors = require("cors")({ origin: true });
    res.status(200);
    cors(req, res, () => {
      res.status(200);

      async function getDBData() {
        var db = admin.firestore();

        var gotEmailAPIKey = "";
        var gotDailyStats = {};

        var dbData = {};
        var LiveMapDataDB = {};
        var ListingsToApproveDB = {};
        var EcoQuestionsDB = {};
        var UsersDB = {};
        var totalHitsDB = {};
        var dbData2 = {};
        var totalCategories = [];

        db.collection("Secrets")
          .get()
          .then((snapshot) => {
            snapshot.forEach((doc) => {
              var key = doc.id;
              var data = doc.data();
              data["key"] = key;
              dbData[key] = data;
            });
            // Continue Then
            // Get Another Doc
            //
            db.collection("totalClicks")
              .get()
              .then((userData) => {
                userData.forEach((doc) => {
                  var key2 = doc.id;
                  var data2 = doc.data();
                  data2["key"] = key2;
                  dbData2[key2] = data2;
                });

                /////////////////////////////////////

                /////////////////////////////////////

                const nodemailer = require("nodemailer");

                //
                let mailTransporter = nodemailer.createTransport({
                  service: "gmail",
                  auth: {
                    user: dbData.Emailer.EmailID,
                    pass: dbData.Emailer.EmailKey,
                  },
                });

                Object.entries(dbData.ModEmails.EmailList).forEach((el, index) => {
                  //
                  let mailDetails = {
                    from: "donotreply@microhawaii.com",
                    to: el,
                    subject: `DoNotReply MicroHawaii Notification ${new Date(
                      Date.now()
                    ).toString()}`,
                    html: `<b>Date: ${new Date(Date.now()).toString()}</b>
<br />
<br />  Name: ${reqBody.name}
<br />
<br />  Contact: ${reqBody.contact}
<br />
<br />  Message: ${reqBody.message}
<br />
<br />
<br />
`,
                  };

                  mailTransporter.sendMail(mailDetails, function (err, data) {
                    if (err) {
                      console.log("Error Occurs");
                      res.send(JSON.stringify({ res: "error" }));
                      res.status(200).send();
                    } else {
                      console.log("Email sent successfully");
                      res.send(JSON.stringify({ res: "success" }));
                      res.status(200).send();
                      return false;
                    }
                  });
                });
                /////////////////////////////////////
                return false;
              });
          });
      }
      getDBData();

      //  End Daily Crontab
      return null;
    });
  } catch (error) {
    console.log(error);
  }
});

exports.oneHourInterval = functions.pubsub.schedule("every 60 minutes").onRun((context) => {
  function buildGeneratedData() {
    let listArray = [];
  }
  buildGeneratedData();
});

exports.processPaidMDD = functions.https.onRequest((req, res) => {
  console.log("Confirming Payment");
  const htmlParams = req.query;
  // const paymentId = req.query.paymentId;
  const userParam = req.query.user;
  const token = req.query.token;
  const ba_token = req.query.ba_token;
  const PayerID = req.query.PayerID;
  console.log("Params: ", htmlParams);

  var dbData = {};
  var db = admin.firestore();
  db.collection("Secrets")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        var key = doc.id;
        var data = doc.data();
        data["key"] = key;
        dbData[key] = data;
      });

      var paypal = require("paypal-rest-sdk");
      paypal.configure({
        mode: "live", //sandbox or live
        client_id: dbData.PayPal.ID,
        client_secret: dbData.PayPal.Secret,
      });

      paypal.billingAgreement.execute(token, {}, function (error, billingAgreement) {
        if (error) {
          console.log(error);
          throw error;
        } else {
          console.log("Approved");
          console.log(JSON.stringify(token));

          db.collection("UserDocs")
            .doc(userParam)
            .set(
              {
                meta: 1,
                [token]: {
                  SinglePage: htmlParams.SinglePage,
                  InsideFrontCover: htmlParams.InsideFrontCover,
                  SingleMonth: htmlParams.SingleMonth,
                  AdvancedPayment: htmlParams.AdvancedPayment,
                  BackCover: htmlParams.BackCover,
                  BusinessDescription: htmlParams.BusinessDescription,
                  AdDescription: htmlParams.AdDescription,
                },
              },
              { merge: true }
            );

          //PaymentApproved
          db.collection("PaymentApproved")
            .doc()
            .set(
              {
                Time: admin.firestore.FieldValue.serverTimestamp(),
                paymentId: ba_token,
                paymentData: token,
                UID: userParam,
                payment: htmlParams.payment,
                interval: htmlParams.interval,
                SinglePage: htmlParams.SinglePage,
                InsideFrontCover: htmlParams.InsideFrontCover,
                SingleMonth: htmlParams.SingleMonth,
                AdvancedPayment: htmlParams.AdvancedPayment,
                BackCover: htmlParams.BackCover,
                BusinessDescription: htmlParams.BusinessDescription,
                AdDescription: htmlParams.AdDescription,
              },
              { merge: true }
            )
            .then(() => {
              res.redirect("https://mauidiscountdollar.web.app/account");
            });
          console.log("Billing Agreement Execute Response");
          console.log(JSON.stringify(billingAgreement));
        }
      });
    });
});

exports.createPaymentMDD = functions.https.onRequest((req, res) => {
  console.log("Processing Payment");

  const paymentParameter = req.query.payment;
  const intervalParam = req.query.interval;
  const params = req.query;
  console.log(params);
  res.status(200);
  const cors = require("cors")({ origin: true });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  //Declare CORs Rules
  cors(req, res, () => {
    res.status(200);
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    const userID = JSON.parse(req.headers["headertokens"]).uid;
    const gotHeaders = req.headers["headertokens"];
    console.log("Got Headers, Creating Promise");
    new Promise((resolve, reject) => {
      var dbData = {};
      var db = admin.firestore();
      db.collection("Secrets")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            var key = doc.id;
            var data = doc.data();
            data["key"] = key;
            dbData[key] = data;
          });

          console.log("Got Backend");
          try {
            var paypal = require("paypal-rest-sdk");
            paypal.configure({
              mode: "live", //sandbox or live
              client_id: dbData.PayPal.ID,
              client_secret: dbData.PayPal.Secret,
            });

            var isoDate = new Date(Date.now());
            isoDate.setSeconds(isoDate.getSeconds() + 15);
            isoDate.toISOString().slice(0, 19) + "Z";

            var tempString = "";
            Object.entries(params).forEach((el) => {
              tempString += String(el).replace(",", "=") + "&";
            });

            var billingPlanAttributes = {
              description: "MDD Ad Plan",
              merchant_preferences: {
                auto_bill_amount: "yes",
                cancel_url: "https://mauidiscountdollar.web.app/dashboards/account",
                initial_fail_amount_action: "continue",
                max_fail_attempts: "2",
                return_url:
                  "https://us-central1-microhawaii-5f97b.cloudfunctions.net/processPaidMDD?user=" +
                  String(userID) +
                  "&" +
                  tempString,
                setup_fee: {
                  currency: "USD",
                  value: "0",
                },
              },
              name: "MDD-Ad-Plan",
              payment_definitions: [
                {
                  amount: {
                    currency: "USD",
                    value: String(paymentParameter),
                  },
                  cycles: "1",
                  frequency: "MONTH",
                  frequency_interval: intervalParam === 1 ? "1" : "2",
                  name: "Regular 1",
                  type: "REGULAR",
                },
              ],
              type: "FIXED",
            };

            var billingPlanUpdateAttributes = [
              {
                op: "replace",
                path: "/",
                value: {
                  state: "ACTIVE",
                },
              },
            ];

            var billingAgreementAttributes = {
              name: "Maui Discount Dollars",
              description: "Advertising Payment Plan 2021",
              start_date: isoDate,
              plan: {
                id: "Ad-01",
              },
              payer: {
                payment_method: "paypal",
              },
            };

            console.log("Creating Billing");
            // Create the billing plan
            paypal.billingPlan.create(billingPlanAttributes, function (error, billingPlan) {
              if (error) {
                console.log(error);
                throw error;
              } else {
                console.log("Create Billing Plan Response");
                console.log(billingPlan);

                // Activate the plan by changing status to Active
                paypal.billingPlan.update(
                  billingPlan.id,
                  billingPlanUpdateAttributes,
                  function (error, response) {
                    if (error) {
                      console.log(error);
                      throw error;
                    } else {
                      console.log(response);
                      console.log("Billing Plan state changed to " + billingPlan.state);
                      billingAgreementAttributes.plan.id = billingPlan.id;

                      // Use activated billing plan to create agreement
                      paypal.billingAgreement.create(
                        billingAgreementAttributes,
                        function (error, billingAgreement) {
                          if (error) {
                            console.log(error);
                            throw error;
                          } else {
                            console.log("Create Billing Agreement Response");
                            //console.log(billingAgreement);
                            for (var index = 0; index < billingAgreement.links.length; index++) {
                              if (billingAgreement.links[index].rel === "approval_url") {
                                var approval_url = billingAgreement.links[index].href;
                                console.log(
                                  "For approving subscription via Paypal, first redirect user to"
                                );
                                console.log(approval_url);

                                console.log("Payment token is");
                                // See billing_agreements/execute.js to see example for executing agreement
                                // after you have payment token

                                res.send(JSON.stringify(approval_url));
                                res.status(200).send();
                                console.log(JSON.parse(gotHeaders).uid);
                              }
                            }
                          }
                        }
                      );
                    }
                  }
                );
              }
            });
          } catch (err) {
            console.log("Err", err);
            return resolve(err);
          }
        })
        .catch((reason) => {
          console.log('db.collection("colors").get gets err, reason: ' + reason);
          reject(reason);
        });
    });
  });
});

exports.processPaid = functions.https.onRequest((req, res) => {
  console.log("Confirming Payment");
  const htmlParams = req.query;
  // const paymentId = req.query.paymentId;
  const userParam = req.query.user;
  const token = req.query.token;
  const ba_token = req.query.ba_token;
  const PayerID = req.query.PayerID;
  console.log("Params: ", htmlParams);

  var dbData = {};
  var db = admin.firestore();
  db.collection("Secrets")
    .get()
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        var key = doc.id;
        var data = doc.data();
        data["key"] = key;
        dbData[key] = data;
      });

      var paypal = require("paypal-rest-sdk");
      paypal.configure({
        mode: "live", //sandbox or live
        client_id: dbData.PayPal.ID,
        client_secret: dbData.PayPal.Secret,
      });

      paypal.billingAgreement.execute(token, {}, function (error, billingAgreement) {
        if (error) {
          console.log(error);
          throw error;
        } else {
          console.log("Approved");
          console.log(JSON.stringify(token));

          db.collection("UserDocs").doc(userParam).set(
            {
              meta: 1,
            },
            { merge: true }
          );

          //PaymentApproved
          db.collection("PaymentApproved")
            .doc()
            .set(
              {
                Time: admin.firestore.FieldValue.serverTimestamp(),
                paymentId: ba_token,
                paymentData: token,
                UID: userParam,
              },
              { merge: true }
            )
            .then(() => {
              res.redirect("mauidiscountdollar.web.app/dashboards/account");
            });
          console.log("Billing Agreement Execute Response");
          console.log(JSON.stringify(billingAgreement));
        }
      });
    });
});

exports.createPayment = functions.https.onRequest((req, res) => {
  console.log("Processing Payment");

  const paymentParameter = req.query.payment;

  res.status(200);
  const cors = require("cors")({ origin: true });
  res.set("Access-Control-Allow-Origin", "*");
  res.set("Access-Control-Allow-Headers", "Content-Type");
  //Declare CORs Rules
  cors(req, res, () => {
    res.status(200);
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Access-Control-Allow-Headers", "Content-Type");
    const userID = JSON.parse(req.headers["headertokens"]).uid;
    const gotHeaders = req.headers["headertokens"];
    console.log("Got Headers, Creating Promise");
    new Promise((resolve, reject) => {
      var dbData = {};
      var db = admin.firestore();
      db.collection("Secrets")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            var key = doc.id;
            var data = doc.data();
            data["key"] = key;
            dbData[key] = data;
          });

          console.log("Got Backend");
          try {
            var paypal = require("paypal-rest-sdk");
            paypal.configure({
              mode: "live", //sandbox or live
              client_id: dbData.PayPal.ID,
              client_secret: dbData.PayPal.Secret,
            });

            var isoDate = new Date(Date.now());
            isoDate.setSeconds(isoDate.getSeconds() + 15);
            isoDate.toISOString().slice(0, 19) + "Z";

            var billingPlanAttributes = {
              description: "MicroHawaii Hosting 125 Plan",
              merchant_preferences: {
                auto_bill_amount: "yes",
                cancel_url: "https://www.microhawaii.com/dashboards/account",
                initial_fail_amount_action: "continue",
                max_fail_attempts: "2",
                return_url:
                  "https://us-central1-microhawaii-5f97b.cloudfunctions.net/processPaid?user=" +
                  String(userID),
                setup_fee: {
                  currency: "USD",
                  value: "0",
                },
              },
              name: "MicroHawaii-Hosting",
              payment_definitions: [
                {
                  amount: {
                    currency: "USD",
                    value: String(paymentParameter),
                  },
                  cycles: "0",
                  frequency: "MONTH",
                  frequency_interval: "6",
                  name: "Regular 1",
                  type: "REGULAR",
                },
              ],
              type: "INFINITE",
            };

            var billingPlanUpdateAttributes = [
              {
                op: "replace",
                path: "/",
                value: {
                  state: "ACTIVE",
                },
              },
            ];

            var billingAgreementAttributes = {
              name: "MicroHawaii $125 Hosting",
              description: "MicroHawaii $125 Hosting",
              start_date: isoDate,
              plan: {
                id: "Hosting-01",
              },
              payer: {
                payment_method: "paypal",
              },
            };

            console.log("Creating Billing");
            // Create the billing plan
            paypal.billingPlan.create(billingPlanAttributes, function (error, billingPlan) {
              if (error) {
                console.log(error);
                throw error;
              } else {
                console.log("Create Billing Plan Response");
                console.log(billingPlan);

                // Activate the plan by changing status to Active
                paypal.billingPlan.update(
                  billingPlan.id,
                  billingPlanUpdateAttributes,
                  function (error, response) {
                    if (error) {
                      console.log(error);
                      throw error;
                    } else {
                      console.log(response);
                      console.log("Billing Plan state changed to " + billingPlan.state);
                      billingAgreementAttributes.plan.id = billingPlan.id;

                      // Use activated billing plan to create agreement
                      paypal.billingAgreement.create(
                        billingAgreementAttributes,
                        function (error, billingAgreement) {
                          if (error) {
                            console.log(error);
                            throw error;
                          } else {
                            console.log("Create Billing Agreement Response");
                            //console.log(billingAgreement);
                            for (var index = 0; index < billingAgreement.links.length; index++) {
                              if (billingAgreement.links[index].rel === "approval_url") {
                                var approval_url = billingAgreement.links[index].href;
                                console.log(
                                  "For approving subscription via Paypal, first redirect user to"
                                );
                                console.log(approval_url);

                                console.log("Payment token is");
                                // See billing_agreements/execute.js to see example for executing agreement
                                // after you have payment token

                                res.send(JSON.stringify(approval_url));
                                res.status(200).send();
                                console.log(JSON.parse(gotHeaders).uid);
                              }
                            }
                          }
                        }
                      );
                    }
                  }
                );
              }
            });
          } catch (err) {
            console.log("Err", err);
            return resolve(err);
          }
        })
        .catch((reason) => {
          console.log('db.collection("colors").get gets err, reason: ' + reason);
          reject(reason);
        });
    });
  });
});
