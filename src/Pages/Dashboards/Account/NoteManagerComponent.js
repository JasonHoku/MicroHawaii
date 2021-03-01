import React, { Component, Fragment, useState, useEffect, useRef } from "react";

import {
  Row,
  Col,
  Button,
  ListGroupItem,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
  CardHeader,
  CardTitle,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import firebase from "firebase/app";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import { indexOf, reverse, toInteger } from "lodash";

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

function NoteManagerComponent() {
  const [editedDescription, seteditedDescription] = useState("");
  const [loadedTotalIDs, setloadedTotalIDs] = useState("1");

  const isInitialMount = useRef(true);

  const [file, setFile] = useState(null);

  const [loadedDescription, setloadedDescription] = useState("");
  const [loadedEzID, setloadedEzID] = useState("1");
  const [loadStage, setloadStage] = useState("1");

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  useEffect(() => {
    if (isInitialMount.current === true) {
      console.log("Updating, Stage: " + loadStage);
      if (loadStage === "1") {
        console.log(getDocID());
        setloadStage("2");
      }
      if (loadStage === "2") {
        setloadStage("3");
      }
    }
  });

  const dummy = useRef();
  const messagesRef = firestore.collection("Notes");
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

  function getDocID() {
    try {
      return messages[parseInt(loadedEzID) - 1].id;
    } catch (error) {}
  }
  function runSendData() {
    console.log(String(loadedEzID));
    firebase
      .firestore()
      .collection("Notes")
      .doc(getDocID())
      .set({ body: String(editedDescription) });
  }

  function runDeleteData() {
    var answer = window.confirm(
      "Are you sure you want to delete " + loadedEzID
    );
    console.log(getDocID());
    if (answer) {
      console.log(String(loadedEzID));
      firebase
        .firestore()
        .collection("Notes")
        .doc(getDocID())
        .delete()
        .then(setloadStage("2") & setloadedTotalIDs(loadedTotalIDs - 1));
    } else {
    }
  }
  return (
    <>
      <main>
        {" "}
        <h4 style={{ width: "100%", textAlign: "left" }}>
          <b>&nbsp;Notes</b>
        </h4>{" "}
        ID #: &nbsp;
        <input
          onChange={(e) => setloadedEzID(e.target.value) & setloadStage("1")}
          value={loadedEzID}
          name="loadedEzID"
          style={{ width: "45px" }}
        ></input>
        &nbsp; &nbsp;
        <Button
          style={{ marginBottom: "5px" }}
          style={{ marginBottom: "5px" }}
          color="primary"
          onClick={() =>
            setloadedEzID(toInteger(loadedEzID) - 1) & setloadStage("1")
          }
        >
          ←
        </Button>{" "}
        &nbsp;
        <Button
          style={{ marginBottom: "5px" }}
          color="primary"
          onClick={() =>
            setloadedEzID(toInteger(loadedEzID) + 1) & setloadStage("1")
          }
        >
          →
        </Button>{" "}
        &nbsp;
        <Button
          style={{ marginBottom: "5px" }}
          color="success"
          onClick={() => runSendData() & setloadStage("1")}
        >
          Save
        </Button>{" "}
        &nbsp;
        <Button
          style={{ marginBottom: "5px" }}
          color="secondary"
          onClick={() =>
            setloadedEzID(toInteger(loadedTotalIDs) + 1) &
            setloadStage("2") &
            seteditedDescription("") &
            setloadedDescription("")
          }
        >
          New
        </Button>{" "}
        &nbsp;
        <Button
          style={{ marginBottom: "5px" }}
          color="danger"
          onClick={() => runDeleteData() & setloadStage("2")}
        >
          Delete
        </Button>
        <br />
        {messages &&
          messages.map((msg, index) => (
            <NoteData index={index} key={msg.id} message={msg} />
          ))}
        <span ref={dummy}></span>
      </main>

      <span
        style={{ width: "100%", textAlign: "center", borderRadius: "25px" }}
      >
        <form className="formchat" onSubmit={sendMessage}>
          <Input
            style={{
              textAlign: "center",
              borderRadius: "25px",
              whiteSpace:"normal"
            }}
            className="inputchat"
            value={formValue}
            type="textarea"
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="Add a note"
          />
          <Button
            color="primary"
            style={{ height: "100%", minWidth: "75px" }}
            className="buttonchat"
            type="submit"
            disabled={!formValue}
          >
            Send
          </Button>
        </form>
        <br />
        <br />
      </span>
    </>
  );
}
function NoteData(props) {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const { text, uid, photoURL, id } = props.message;
  const dex = props.index;

  const messageClass = uid === auth.currentUser.uid ? "sent" : "sent";

  return (
    <>
      <div className={`message ${messageClass}`}>
        {parseInt(dex) + 1}
        {}
        <img className="imgchat" src={photoURL || "/logo.png"} />
        <p className="pchat">{text}</p>
      </div>
    </>
  );
}
export default NoteManagerComponent;
