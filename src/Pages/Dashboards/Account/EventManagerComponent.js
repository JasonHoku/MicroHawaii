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
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import axios from "axios";
import Calendar from "react-calendar";
import "../../../assets/components/Calendar.css";
import { useCollectionData } from "react-firebase-hooks/firestore";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

function EventManagerComponent() {
  const [loadStage, setloadStage] = useState("1");
  const [loadElements, setloadElements] = useState(null);
  const [loadedEvents, setloadedEvents] = useState([]);
  const [loadedEventIDs, setloadedEventIDs] = useState([]);

  const [textVar, settextVar] = useState("");
  const [setDate, setsetDate] = useState(
    String(
      new Date().toLocaleTimeString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  );
  const [eventsFormDescription, seteventsFormDescription] = useState("");
  const [editedDescription, seteditedDescription] = useState("");
  const [loadedTotalIDs, setloadedTotalIDs] = useState("1");
  const [file, setFile] = useState(null);
  const [loadedDescription, setloadedDescription] = useState("");
  const [loadedEzID, setloadedEzID] = useState("1");

  const auth = firebase.auth();
  const firestore = firebase.firestore();

  const dummy = useRef();
  const messagesRef = firestore.collection("events");

  const query = messagesRef.orderBy("EventDate").limitToLast(5);
  const query2 = messagesRef.orderBy("EventDate").limitToLast(100);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [messages2] = useCollectionData(query2, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await messagesRef.add({
      EventTitle: formValue,
      EventDate: setDate,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });

    setFormValue("");
  };

  function EventDataLast5(props) {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const { EventDate, EventTitle, id } = props.message;
    const dex = props.index;

    const messageClass = "sent";

    return (
      <>
        <div className={`message ${messageClass}`}>
          &nbsp; ID: {parseInt(dex) + 1}
          <p className="pchat">
            {EventTitle}
            <br />
            <div style={{ textAlign: "right" }}>{EventDate}</div>
          </p>
        </div>
      </>
    );
  }
  function EventDataSelectedDate(props) {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const { EventDate, EventTitle, id } = props.message;
    const dex = props.index;

    const messageClass = "sent";

    for (var i = 0; i < messages2.length; i++) {
      let gotDate = new Date(EventDate);
      let are24hFrom0 = new Date(new Date(setDate));
      are24hFrom0.setDate(are24hFrom0.getDate(setDate) - 1);
      var are24hFrom1 = new Date(setDate);
      are24hFrom1.setDate(are24hFrom1.getDate(setDate) + 1);
      if (gotDate >= are24hFrom0) {
        if (gotDate <= are24hFrom1) {
          return (
            <>
              <div className={`message ${messageClass}`}>
                &nbsp; ID: {parseInt(dex) + 1}
                <br />
                <p className="pchat">
                  {EventTitle}
                  <br />
                  <div style={{ textAlign: "right" }}><b>{EventDate}</b></div>
                </p>
              </div>
            </>
          );
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    return null;
  }
  function getDocID() {
    try {
      return messages2[parseInt(loadedEzID) - 1].id;
    } catch (error) {}
  }
  function getDocDate() {
    try {
      setsetDate(messages2[parseInt(loadedEzID) - 1].EventDate);
    } catch (error) {}
  }
  function getDocTitle() {
    try {
      setFormValue(messages2[parseInt(loadedEzID) - 1].EventTitle);
    } catch (error) {}
  }
  function runSendData() {
    const { uid } = auth.currentUser;
    console.log(String(loadedEzID));
    firebase.firestore().collection("events").doc(getDocID()).set({
      EventTitle: formValue,
      EventDate: setDate,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
    });
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
        .collection("events")
        .doc(getDocID())
        .delete()
        .then(setloadStage("2") & setloadedTotalIDs(loadedTotalIDs - 1));
    } else {
    }
  }
  function handleInputChange(e) {
    seteventsFormDescription(e.target.value);
  }
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current === true) {
      console.log("Updating, Stage: " + loadStage);
      if (loadStage === "1") {
        console.log(getDocID());
        getDocDate();
        getDocTitle();

        setloadStage("2");
      }
      if (loadStage === "2") {
        setloadStage("3");
      }
    }
  });

  return (
    <Fragment>
      <Card style={{ width: "100%" }}>
        <CardHeader style={{ textAlign: "center" }}>
          <h3 style={{ textAlign: "center" }}>Event Manager</h3>
        </CardHeader>
        <CardBody
          style={{
            width: "100%",
            boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            width: "auto",
            fontSize: "16px",
          }}
        >
          <h5 style={{ textAlign: "left" }}>
            Events always flow to HomePage and Schedule with a Title and
            optionally generate their own page with additional data.
          </h5>
          <center>
            <b>Hawaiian Time Zone</b>
            <Calendar
              className="calendarVar"
              onChange={(e) =>
                setsetDate(
                  new Date(e).toLocaleTimeString([], {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                ) & setloadStage("2")
              }
            />
          </center>{" "}
          <br />
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
              setloadedEzID(parseInt(loadedEzID) - 1) & setloadStage("1")
            }
          >
            ←
          </Button>{" "}
          &nbsp;
          <Button
            style={{ marginBottom: "5px" }}
            color="primary"
            onClick={() =>
              setloadedEzID(parseInt(loadedEzID) + 1) & setloadStage("1")
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
              setloadedEzID(parseInt(loadedTotalIDs) + 1) &
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
          <div style={{ textAlign: "left" }}>
            <div>
              <b>Selected Date:</b>
            </div>{" "}
            <br />
            <input
              style={{ width: "50%" }}
              id="eventsFormDate"
              onChange={(e) => setsetDate(e.target.value)}
              value={setDate}
            ></input>{" "}
            <br />
            <br />
            <div>
              {" "}
              <b>Event Description:</b> <br />
              &nbsp;{" "}
              <form className="formchat" onSubmit={sendMessage}>
                {" "}
                &nbsp;
                <Input
                  value={eventsFormDescription}
                  onChange={(e) => handleInputChange(e)}
                  style={{
                    textAlign: "center",
                    borderRadius: "25px",
                    whiteSpace: "normal",
                  }}
                  className="inputchat"
                  value={formValue}
                  type="textarea"
                  onChange={(e) => setFormValue(e.target.value)}
                  placeholder="Add Event To Date"
                />
                &nbsp;
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
            </div>
            &nbsp;
          </div>
          <br />
          <h5>
            <b>Events Within 24h of Selected Day:</b>
          </h5>
          <br />
          {messages2 &&
            messages2.map((msg, index) => (
              <EventDataSelectedDate index={index} key={msg.id} message={msg} />
            ))}
          <br />
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default EventManagerComponent;
