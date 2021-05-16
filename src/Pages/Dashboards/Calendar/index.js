import React, { Component, Fragment, useState, useEffect, useRef } from "react";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
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

import "../Account/chat.css";

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
  const messagesRef2 = firestore.collection("eventRequests");

  const query = messagesRef.orderBy("EventDate").limitToLast(5);
  const query2 = messagesRef.orderBy("EventDate").limitToLast(100);

  const [messages] = useCollectionData(query, { idField: "id" });
  const [messages2] = useCollectionData(query2, { idField: "id" });

  const [formValue, setFormValue] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid } = auth.currentUser;

    await messagesRef2.add({
      EventTitle: formValue,
      EventDate: setDate,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setFormValue("");
    alert("Event Request Sent!");
  };

  function EventDataSelectedDate(props) {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const { EventDate, EventTitle, id } = props.message;
    const dex = props.index;

    const messageClass = "sent";

    for (var i = 0; i < loadedEvents.length; i++) {
      let gotDate = new Date(EventDate);
      let are24hFrom0 = new Date(new Date(setDate));
      are24hFrom0.setDate(are24hFrom0.getDate(setDate) - 1);
      var are24hFrom1 = new Date(setDate);
      are24hFrom1.setDate(are24hFrom1.getDate(setDate) + 1);
      if (gotDate >= are24hFrom0) {
        if (gotDate <= are24hFrom1) {
          return (
            <>
              <div className={` message ${messageClass}`}>
                <br />
                <p className="pchat ">
                  {EventTitle}
                  <br />
                  <b style={{ textAlign: "right" }}>{EventDate}</b>
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
  function handleInputChange(e) {
    seteventsFormDescription(e.target.value);
  }
  const isInitialMount = useRef(true);

  useEffect(() => {
    let concData = [];
    let concData2 = [];
    let concData3 = [];

    if (isInitialMount.current === true) {
      if (loadStage === "1") {
        const loadsnapshot = async () => {
          const snapshot = await firebase
            .firestore()
            .collection("events")
            .get();
          snapshot.forEach((doc) => {
            concData = concData.concat({
              [doc.id]: [doc.data()],
            });

            concData2 = concData2.concat(doc.id);
          });

          setloadedEvents(concData);
          setloadedEventIDs(concData2);
        };

        console.log(
          loadsnapshot().then(async () => {
            setloadStage("2");
          })
        );
      }
      if (loadStage === "2") {
        if (loadedEvents.length < 2) {
          console.log(loadedEvents);
          for (var i = 0; i < loadedEvents.length; i++) {
            localStorage.setItem("eventCounter", loadedEvents.length);
            let gotDate = new Date(
              loadedEvents[i][loadedEventIDs[i]][0].EventDate
            );
            let are24hFrom0 = new Date(new Date(setDate));
            are24hFrom0.setDate(are24hFrom0.getDate(setDate) - 1);
            var are24hFrom1 = new Date(setDate);
            are24hFrom1.setDate(are24hFrom1.getDate(setDate) + 1);
            if (gotDate >= are24hFrom0) {
              if (gotDate <= are24hFrom1) {
                concData3 = concData3.concat(
                  "\n" + loadedEvents[i][loadedEventIDs[i]][0].EventTitle
                );
                settextVar(
                  String(concData3)
                    .split("\n")
                    .map((str, index) => <h5 key={index}>{str}</h5>)
                );
                setloadStage("3");
              }
            }
          }
        } else {
          return setloadStage("3");
        }
      }
    }
  });

  return (
    <Fragment>
      <CSSTransitionGroup
        component="div"
        transitionName="MainAnimation"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionEnter={true}
        transitionLeave={false}
      >
        <Card style={{ width: "100%" }}>
          <CardHeader style={{ textAlign: "center" }}>
            <h3 style={{ textAlign: "center" }}>View &amp; Schedule Events</h3>
          </CardHeader>
          <CardBody
            style={{
              width: "100%",
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
              width: "auto",
              fontSize: "16px",
            }}
          >
            {" "}
            <h5>
              <b>Viewing Events on Selected Day:</b>
            </h5>
            <br />
            <Row>
              <Col style={{ height: "auto" }}>
                <CSSTransitionGroup
                  component="div"
                  transitionName="MainAnimation5"
                  transitionAppear={true}
                  transitionAppearTimeout={1000}
                  transitionEnterTimeout={1000}
                  transitionEnter={true}
                  transitionLeave={false}
                >
                  <div
                    style={{ minHeight: "200px", alignItems: "center" }}
                    className="loadContentTransition"
                  >
                    {(messages2 &&
                      messages2.map((msg, index) => (
                        <EventDataSelectedDate
                          index={index}
                          key={msg.id}
                          message={msg}
                        />
                      ))) || (
                      <center>
                        <div className={` message sent`}>
                          <br />
                          <p className="pchat FadeIn">
                            Loading...
                            <br />
                          </p>
                        </div>
                      </center>
                    )}
                  </div>
                </CSSTransitionGroup>
              </Col>
              <Col>
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
              </Col>
            </Row>
            <br />
            <div style={{ textAlign: "left" }}>
              <div>
                <b>Selected Date:</b>
              </div>{" "}
              <br />
              <input
                style={{ width: "50%", maxWidth: "165px" }}
                id="eventsFormDate"
                onChange={(e) => setsetDate(e.target.value)}
                value={setDate}
              ></input>{" "}
              <br />
              <br />
              <div>
                <b>Quickly Request a Meeting with MicroHawaii:</b>
                <br />
                <br />
                <form className="formchat" onSubmit={sendMessage}>
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
                    placeholder="Be Sure To Include Contact Info"
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
          </CardBody>
        </Card>
      </CSSTransitionGroup>
    </Fragment>
  );
}

export default EventManagerComponent;
