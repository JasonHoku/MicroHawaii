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

  function handleInputChange(e) {
    seteventsFormDescription(e.target.value);
  }
  const isInitialMount = useRef(true);

  useEffect(() => {
    let concData = [];
    let concData2 = [];
    let concData3 = [];

    if (isInitialMount.current === true) {
      console.log(loadStage);
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
        for (var i = 0; i < loadedEvents.length; i++) {
          console.log(loadedEvents[i][loadedEventIDs[i]][0]);

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
      }
      if (loadStage === "3") {
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
          </center>
          <div style={{ textAlign: "left" }}>
            <div>
              <b>Selected Date:</b>
            </div>
            <input
              style={{ width: "50%" }}
              id="eventsFormDate"
              onChange={(e) => setsetDate(e.target.value)}
              value={setDate}
            ></input>
            <br />
            <div>
              {" "}
              <b>Event Description:</b> &nbsp;
            </div>
            <Input
              name="eventsFormDescription"
              id="eventsFormDescription"
              value={eventsFormDescription}
              onChange={(e) => handleInputChange(e)}
              style={{ width: "100%", position: "relative" }}
              type="textarea"
            ></Input>{" "}
            &nbsp;
          </div>
          {/*   <FirestoreProvider {...firebaseConfig} firebase={firebase}>
            <FirestoreMutation type="add" merge={true} path={`/events/`}>
              {({ runMutation }) => {
                return (
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <button
                      style={{
                        borderRadius: "5px",
                        textAlign: "center",
                        width: "auto",
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        runMutation(
                          {
                            EventTitle: document.getElementById(
                              "eventsFormDescription"
                            ).value,
                            EventEZID: localStorage.getItem("eventCounter"),
                            EventDate: document.getElementById("eventsFormDate")
                              .value,
                          },
                          { merge: true }
                        ).then((res) => {
                          console.log("Ran mutation ", res);
                        });
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                        }}
                      >
                        Add Event To MicroHawaii's Schedule
                      </span>
                    </button>
                  </div>
                );
              }}
            </FirestoreMutation>
            </FirestoreProvider> */}
          <br />
          <h5>
            <b>Events Within 24h of Selected Day:</b>
          </h5>{" "}
          <br /> {textVar}
          {/*  <FirestoreProvider {...firebaseConfig} firebase={firebase}>
            <FirestoreCollection path={`/events/`}>
              {(d) => {
                if (d) {
                  let concData = "";
                  if (!d.isLoading) {
                    for (var i = 0; i < d.value.length; i++) {
                      localStorage.setItem("eventCounter", d.value.length);
                      let gotDate = new Date(d.value[i].EventDate);
                      let are24hFrom0 = new Date(new Date(setDate));
                      are24hFrom0.setDate(are24hFrom0.getDate(setDate) - 1);
                      var are24hFrom1 = new Date(setDate);
                      are24hFrom1.setDate(are24hFrom1.getDate(setDate) + 1);
                      if (gotDate >= are24hFrom0) {
                        if (gotDate <= are24hFrom1) {
                          concData = concData.concat(
                            `Event ID#` +
                              JSON.stringify(d.value[i].EventEZID) +
                              `\n Title:` +
                              JSON.stringify(d.value[i].EventTitle) +
                              `\n Date:` +
                              JSON.stringify(d.value[i].EventDate).replace(
                                /(Z|T)/gm,
                                "  "
                              ) +
                              `\n \n `
                          );
                        }
                      }
                    }
                    if (concData === "") {
                      concData = "No Events Found In Selected Period";
                    }
                    return (
                      <div
                        style={{ whiteSpace: "pre-line", textAlign: "left" }}
                      >
                        {concData}
                      </div>
                    );
                  }
                }
              }}
            </FirestoreCollection>
            </FirestoreProvider> */}
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default EventManagerComponent;
