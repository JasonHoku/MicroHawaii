const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();
exports.readFirestore = functions.https.onRequest(async (req, res) => {
  const writeResult = admin.firestore().collection("events").doc("X1");
  const doc = await writeResult.get();
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    res.json(
      JSON.stringify(doc.data())
    );
  }
});
