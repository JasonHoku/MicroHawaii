import React, { Component, Fragment, useState, useEffect, useRef } from "react";

import ReactDOM from "react-dom";
import {
  Row,
  ListGroupItem,
  Card,
  CardBody,
  Container,
  Input,
  FormText,
} from "reactstrap";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import "./chat.css";

import { toast } from "react-toastify";

import RatingComponent from "./RatingComponent";

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

function SiteChatManagerComponent() {
  const [loadStage, setloadStage] = useState("1");

  function showNotification() {
    navigator.serviceWorker.register("sw.js");
    Notification.requestPermission(function (result) {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          var options = {
            body: "Here is a notification body!",
            icon: "logo.png",
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 1,
            },
          };
          registration.showNotification("Success!", options);
        });
      }
    });
    event.preventDefault();
  }

  function showNotification2() {
    if (loadStage === "1") {
      toast("Awaiting Close Notification", {
        position: "top-right",
        autoClose: false,
        containerId: 1,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        onClose: () => setloadStage("1"),
        draggable: true,
      }) & setloadStage("2");
    }
  }

  return (
    <Fragment>
      <Card>
        <CardBody
          style={{
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
            marginLeft: "-10px",
            marginRight: "-10px",
          }}
        >
          <button onClick={() => showNotification()}>Desktop Notify Me!</button>{" "}
          &nbsp;
          <button onClick={() => showNotification2()}>Screen Notify Me!</button>
          <br /> {<RatingComponent />} <br />
          <h4 style={{ width: "100%", textAlign: "left" }}>
            <b>&nbsp;SiteChat</b>
          </h4>
          <section>{<ChatRoom />}</section>
        </CardBody>
      </Card>
      <br />
    </Fragment>
  );
}

const auth = firebase.auth();
const firestore = firebase.firestore();

function handleInputChangeEvent(event) {
  setState({
    [event.target.name]: event.target.value,
  });
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt").limit(25);

  const [messages] = useCollectionData(query, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });

    setFormValue("");
    dummy.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <main>
        {messages &&
          messages.map((msg) => <ChatMessage key={msg.id} message={msg} />)}

        <span ref={dummy}></span>
      </main>
      <span style={{ width: "100%", textAlign: "center" }}>
        <form className="formchat" onSubmit={sendMessage}>
          <Input
            style={{
              textAlign: "center",
            }}
            className="inputchat"
            value={formValue}
            type="textarea"
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Send Message"
          />
          <button className="buttonchat" type="submit" disabled={!formValue}>
            🕊️
          </button>
        </form>
      </span>
    </>
  );
}
function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "received";

  return (
    <>
      <div className={`message ${messageClass}`}>
        <img
          className="imgchat"
          src={photoURL || "/images/smallsquare3.png"}
        />
        <p style={{ fontSize: "22px" }} className="pchat">
          {text}
        </p>
      </div>
    </>
  );
}
export default SiteChatManagerComponent;
