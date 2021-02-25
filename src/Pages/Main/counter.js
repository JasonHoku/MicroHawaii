import React, { Component } from "react";
import { render } from "react-dom";

import "firebase/firestore";
import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
} from "reactfire";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

function CounterComponent() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "microhawaii-5f97b.firebaseapp.com",
    databaseURL: "https://microhawaii-5f97b-default-rtdb.firebaseio.com",
    projectId: "microhawaii-5f97b",
    storageBucket: "microhawaii-5f97b.appspot.com",
    messagingSenderId: "775965301611",
    appId: "1:775965301611:web:5858ed50ba444371e74a2e",
    measurementId: "G-H00S7BSD3H",
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  var sfDocRef = firebase.firestore().collection("totalHits").doc("value");

  // Uncomment to initialize the doc.
  // sfDocRef.set({ population: 0 });

  return firebase
    .firestore()
    .runTransaction((transaction) => {
      // This code may get re-run multiple times if there are conflicts.
      return transaction.get(sfDocRef).then((sfDoc) => {
        if (!sfDoc.exists) {
          throw "Document does not exist!";
        }

        // Add one person to the city population.
        // Note: this could be done without a transaction
        //       by updating the population using FieldValue.increment()
        var newPopulation = sfDoc.data().population + 1;
        transaction.update(sfDocRef, { population: newPopulation });
      });
    })
    .then(() => {
      console.log("Transaction successfully committed!");
    })
    .catch((error) => {
      console.log("Transaction failed: ", error);
    });
}

export default CounterComponent;
