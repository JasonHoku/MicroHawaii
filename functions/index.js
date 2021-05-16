const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
var dbData = {};
let userID = {};

console.log("Initiating a-a Roots Backend");

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
