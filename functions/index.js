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

exports.oneHourInterval = functions.pubsub.schedule("every 60 minutes").onRun((context) => {
  function buildGeneratedData() {
    let listArray = [];
  }
  buildGeneratedData();
});




exports.processPaid = functions.https.onRequest((req, res) => {
  console.log("Confirming Payment")
  const htmlParams = req.query;
  // const paymentId = req.query.paymentId;
  const userParam = req.query.user;
  const token = req.query.token;
  const ba_token = req.query.ba_token;
  const PayerID = req.query.PayerID;
  console.log("Params: ", htmlParams);

  var dbData = {};
  var db = admin.firestore();
  db
    .collection("Secrets")
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
          db
            .collection("PaymentApproved")
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
              res.redirect("https://microhawaii.com/dashboards/account");
            });
          console.log("Billing Agreement Execute Response");
          console.log(JSON.stringify(billingAgreement));
        }
      });




    });
});

exports.createPayment = functions.https.onRequest((req, res) => {
  console.log("Processing Payment")
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
      db
        .collection("Secrets")
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
            isoDate.toISOString().slice(0, 19) + 'Z';

            var billingPlanAttributes = {
              "description": "MicroHawaii Hosting 125 Plan",
              "merchant_preferences": {
                "auto_bill_amount": "yes",
                "cancel_url": "https://www.microhawaii.com/dashboards/account",
                "initial_fail_amount_action": "continue",
                "max_fail_attempts": "2",
                "return_url":
                  "https://us-central1-microhawaii-5f97b.cloudfunctions.net/processPaid?user=" +
                  String(userID),
                "setup_fee": {
                  "currency": "USD",
                  "value": "0"
                }
              },
              "name": "MicroHawaii-Hosting",
              "payment_definitions": [
                {
                  "amount": {
                    "currency": "USD",
                    "value": "1"
                  },
                  "cycles": "0",
                  "frequency": "MONTH",
                  "frequency_interval": "6",
                  "name": "Regular 1",
                  "type": "REGULAR"
                },
              ],
              "type": "INFINITE"
            };

            var billingPlanUpdateAttributes = [
              {
                "op": "replace",
                "path": "/",
                "value": {
                  "state": "ACTIVE"
                }
              }
            ];

            var billingAgreementAttributes = {
              "name": "MicroHawaii $125 Hosting",
              "description": "MicroHawaii $125 Hosting",
              "start_date": isoDate,
              "plan": {
                "id": "Hosting-01"
              },
              "payer": {
                "payment_method": "paypal"
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
                paypal.billingPlan.update(billingPlan.id, billingPlanUpdateAttributes, function (error, response) {
                  if (error) {
                    console.log(error);
                    throw error;
                  } else {
                    console.log(response)
                    console.log("Billing Plan state changed to " + billingPlan.state);
                    billingAgreementAttributes.plan.id = billingPlan.id;

                    // Use activated billing plan to create agreement
                    paypal.billingAgreement.create(billingAgreementAttributes, function (error, billingAgreement) {
                      if (error) {
                        console.log(error);
                        throw error;
                      } else {
                        console.log("Create Billing Agreement Response");
                        //console.log(billingAgreement);
                        for (var index = 0; index < billingAgreement.links.length; index++) {
                          if (billingAgreement.links[index].rel === 'approval_url') {
                            var approval_url = billingAgreement.links[index].href;
                            console.log("For approving subscription via Paypal, first redirect user to");
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
                    });
                  }
                });
              }
            });

























            // var create_payment_json = {
            //   intent: "order",
            //   payer: {
            //     payment_method: "paypal",
            //   },
            //   redirect_urls: {
            //     return_url:
            //       "http://localhost:5111/microhawaii-5f97b/us-central1/processPaid?user=" +
            //       String(userID),
            //     cancel_url: "https://microhawaii.com/account",
            //   },
            //   transactions: [
            //     {
            //       item_list: {
            //         items: [
            //           {
            //             name: "Test",
            //             sku: "0000",
            //             price: "125.00",
            //             currency: "USD",
            //             quantity: 1,
            //             frequency: "MONTH",
            //             frequency_interval: "6",
            //             type: "INFINITE",
            //           },
            //         ],
            //       },
            //       amount: {
            //         currency: "USD",
            //         total: "125.00",
            //       },
            //       description: "This is the payment description.",
            //     },
            //   ],
            // };

            // var billingPlanAttributes = {
            // 	description: "Create Plan for Regular",
            // 	merchant_preferences: {
            // 		auto_bill_amount: "yes",
            // 		return_url: "https://raymauiyoga.com/account",
            // 		cancel_url: "https://raymauiyoga.com/account",
            // 		initial_fail_amount_action: "continue",
            // 		max_fail_attempts: "1",
            // 		setup_fee: {
            // 			currency: "USD",
            // 			value: "2",
            // 		},
            // 	},
            // 	name: "Testing1-Regular1",
            // 	payment_definitions: [
            // 		{
            // 			amount: {
            // 				currency: "USD",
            // 				value: "3",
            // 			},
            // 			charge_models: [
            // 				{
            // 					amount: {
            // 						currency: "USD",
            // 						value: "2.60",
            // 					},
            // 					type: "SHIPPING",
            // 				},
            // 				{
            // 					amount: {
            // 						currency: "USD",
            // 						value: "1",
            // 					},
            // 					type: "TAX",
            // 				},
            // 			],
            // 			cycles: "0",
            // 			frequency: "MONTH",
            // 			frequency_interval: "1",
            // 			name: "Regular 1",
            // 			type: "REGULAR",
            // 		},
            // 		{
            // 			amount: {
            // 				currency: "USD",
            // 				value: "1",
            // 			},
            // 			charge_models: [
            // 				{
            // 					amount: {
            // 						currency: "USD",
            // 						value: "1.60",
            // 					},
            // 					type: "SHIPPING",
            // 				},
            // 				{
            // 					amount: {
            // 						currency: "USD",
            // 						value: "1",
            // 					},
            // 					type: "TAX",
            // 				},
            // 			],
            // 			cycles: "12",
            // 			frequency: "MONTH",
            // 			frequency_interval: "1",
            // 			name: "Trial 1",
            // 	type: "INFINITE",
            // 		},
            // 	],
            // 	type: "INFINITE",
            // };

            // paypal.payment.create(create_payment_json, function (error, payment) {
            //   if (error) {
            //     throw error;
            //   } else {
            //     console.log("Create Payment Response");
            //     console.log(payment);

            //     //
            //     // Execute Upon Approval
            //     // 						var execute_payment_json = {
            //     // 							"payer_id": "FM3Y6GFJLAFWJ",
            //     // 							"transactions": [{
            //     // 											"amount": {
            //     // 															"currency": "USD",
            //     // 															"total": "1.00"
            //     // 											}
            //     // 							}]
            //     // 			};
            //     // 						paypal.payment.execute(el.Payment.id, execute_payment_json, function (error, payment) {
            //     // 							if (error) {
            //     // 								throw error;
            //     // 							} else {
            //     // 								console.log("Approved");
            //     // 								console.log(JSON.stringify(payment));
            //     // 							}
            //     // 						});
            //     // 					});
            //     // 			};
            //     //








            //     db
            //       .collection("PaymentProcessing")
            //       .doc()
            //       .set(
            //         {
            //           Time: admin.firestore.FieldValue.serverTimestamp(),
            //           Payment: payment,
            //           uid: JSON.parse(gotHeaders).uid,
            //           email: JSON.parse(gotHeaders).email,
            //           name: JSON.parse(gotHeaders).name,
            //           hostname: JSON.parse(gotHeaders).hostname,
            //         },

            //         { merge: true }
            //       );
            //     resolve(payment);

            //     res.send(JSON.stringify(payment));
            //     res.status(200).send();
            //     console.log(JSON.parse(gotHeaders).uid);
            //   }
            // });


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
