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

import { unregister } from "../../serviceWorker";
import { toast } from "react-toastify";

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

function showNotification() {
  function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }
  if (!iOS) {
    navigator.serviceWorker.register("sw2.js");
    Notification.requestPermission(function (result) {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          var options = {
            body:
              "A new version of this website is available, please reload after saving any work to load new website content.",
            icon: "logo.png",
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 1,
            },
          };
          registration.showNotification("Site Update", options);
        });
      }
    });
  }
}
function showNotification2(e) {
  toast(
    "A new version of this website is available, please reload after saving any work to load new website content.",
    {
      position: "top-right",
      autoClose: false,
      containerId: 1,
      hideProgressBar: false,
      closeOnClick: true,
      onClose: () => unregister,
      pauseOnHover: true,
      draggable: true,
    }
  );
}
function Burrito() {
  const burritoRef = useFirestore().collection("version").doc("0");

  const { status, data } = useFirestoreDocData(burritoRef);

  if (status === "loading") {
  } else {
    console.log(data.version);
    let concData = data.version;
    if (!localStorage.getItem("appVersion")) {
      localStorage.setItem("appVersion", concData);
    } else if (localStorage.getItem("appVersion") != concData) {
      showNotification();
      showNotification2();
      var caches = false;
      if (caches) {
        caches.keys().then(function (names) {
          for (let name of names) caches.delete(name);
        });
        localStorage.setItem("appVersion", concData);
      }
    }
  }
  return null;
}

function CheckVersions() {
  return (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Burrito />
    </FirebaseAppProvider>
  );
}

export default CheckVersions;
