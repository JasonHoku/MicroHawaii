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

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import "./chat.css";

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

function Burrito() {
  // easily access the Firestore library
  const burritoRef = useFirestore().collection("1").doc("0");

  // subscribe to a document for realtime updates. just one line!
  const { status, data } = useFirestoreDocData(burritoRef);

  // easily check the loading status
  if (status === "loading") {
    return <p>Fetching burrito flavor...</p>;
  }

  return <p>The database says: {data.A ? "true" : "false"}!</p>;
}

function RatingComponent() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Burrito />
    </FirebaseAppProvider>
  );
}

export default RatingComponent;
