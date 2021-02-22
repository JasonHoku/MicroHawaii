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

import { reverse, toInteger } from "lodash";

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
  const [url, setURL] = useState("");
  const [noteVar, setnoteVar] = useState("");
  const [textVar2, settextVar2] = useState("Select an Instance To Begin");
  const [textVar, settextVar] = useState("Select an Instance To Begin");
  const [statusVar, setstatusVar] = useState("Loading..");
  const [onlineButton, setonlineButton] = useState("Go Online");
  const [purgeButton, setpurgeButton] = useState("Clear Old Instances");
  const [selectByIDVar, setselectByIDVar] = useState("0");
  const [loadedImgURL, setloadedImgURL] = useState("");
  const [loadedDescription, setloadedDescription] = useState("");
  const [editedDescription, seteditedDescription] = useState("");
  const [loadedLocationData, setloadedLocationData] = useState("");
  const [getDataEZID, setgetDataEZID] = useState("");
  const [ChangeImageURLVar, setChangeImageURLVar] = useState("");
  const [loadedCreatorData, setloadedCreatorData] = useState("");
  const [loadedGMapCoords, setloadedGMapCoords] = useState("");
  const [loadedCategory, setloadedCategory] = useState("");
  const [loadedPublic, setloadedPublic] = useState("");
  const [loadedIDData, setloadedIDData] = useState("");
  const [loadStage, setloadStage] = useState("1");
  const [loadedTitleData, setloadedTitleData] = useState("");
  const [sendReadyCreator, setsendReadyCreator] = useState("");
  const [sendReadyCategory, setsendReadyCategory] = useState("");
  const [sendReadyDescription, setsendReadyDescription] = useState("");
  const [sendReadyGMapCoords, setsendReadyGMapCoords] = useState("");
  const [sendReadyLocation, setsendReadyLocation] = useState("");
  const [sendReadyID, setsendReadyID] = useState("");
  const [sendReadyPublic, setsendReadyPublic] = useState("");
  const [sendReadyTitle, setsendReadyTitle] = useState("");
  const [loadedEzID, setloadedEzID] = useState("1");
  const [loadedTotalIDs, setloadedTotalIDs] = useState("1");
  const [loadedAnswerData, setloadedAnswerData] = useState("");
  const [loadedQuestionData, setloadedQuestionData] = useState("");
  const [loadedFlowData, setloadedFlowData] = useState("");

  const [isLoadedOnce, setisLoadedOnce] = useState("1");
  const [hasReceivedImgURL, sethasReceivedImgURL] = useState(false);
  const [loadedSnapshotData, setloadedSnapshotData] = useState("");
  const [loadedSnapshotDataIDs, setloadedSnapshotDataIDs] = useState("");

  const isInitialMount = useRef(true);

  const [file, setFile] = useState(null);

  const [gotDownloadURL, setgotDownloadURL] = useState("Upload An Image");

  useEffect(() => {
    let concData = [];
    let concData2 = [];
    let concData3 = [];

    console.log(isInitialMount);
    console.log("Load X: " + loadStage);
    console.log("Updating, Stage: " + loadStage);
    if (loadStage === "1") {
      setloadStage("2") & setisLoadedOnce("1");
    }
    if (loadStage === "2") {
      if (isLoadedOnce === "1") {
        const loadsnapshot = async () => {
          let concData = [];
          let concData2 = [];
          const snapshot = await firebase.firestore().collection("Notes").get();

          snapshot.forEach(async function (doc) {
            concData = concData.concat(doc.data());
          });
          setloadedSnapshotData(concData);
        };
        loadsnapshot().then(async () => {
          setisLoadedOnce("2");
        });
      }
      setloadStage("3");
    }
    if (loadStage === "3") {
      if (loadedSnapshotData != "") {
        if (isLoadedOnce === "1") {
          console.log(loadedSnapshotData) & setisLoadedOnce("2");
        }
      }
    }
  });

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
          <h4 style={{ width: "100%", textAlign: "left" }}>
            <b>&nbsp;Notes</b>
          </h4>{" "}
          ID #: &nbsp;
          <input
            onChange={(e) =>
              setloadedEzID(e.target.value) & setloadStage("1") & formResetter()
            }
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
            onClick={() =>
              runDeleteData() & setloadedEzID(1) & setloadStage("2")
            }
          >
            Delete
          </Button>
          <br />
          <br />
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
            placeholder="Add a note"
          />
          <button
            className="buttonchat"
            type="submit"
            disabled={!formValue}
          >
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
          src={photoURL || "./images/smallsquare3.png"}
        />
        <p className="pchat">{text}</p>
      </div>
    </>
  );
}
export default NoteManagerComponent;
