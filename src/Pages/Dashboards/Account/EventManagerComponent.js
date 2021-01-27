import React, { Component, Fragment, useState, useEffect } from "react";
import { compose, graphql } from "react-apollo";
import { gql, useQuery } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";
import { toInteger } from "lodash";

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
import {
  FirestoreProvider,
  FirestoreCollection,
  FirestoreDocument,
  FirestoreMutation,
} from "@react-firebase/firestore";

import {
  FirebaseAuthProvider,
  FirebaseAuthConsumer,
  IfFirebaseAuthed,
  IfFirebaseAuthedAnd,
} from "@react-firebase/auth";

var firebaseConfig = process.env.REACT_APP_FIREBASE;

function EventManagerComponent() {
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

  useEffect(() => {
    setsetDate(document.getElementById("eventsFormDate").value);
    seteventsFormDescription(
      document.getElementById("eventsFormDescription").value
    );
    console.log(eventsFormDescription);
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
                )
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
          <FirestoreProvider {...firebaseConfig} firebase={firebase}>
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
          </FirestoreProvider>
          <br />
          <h5>
            <b>Events Within 24h of Selected Day:</b>
          </h5>
          <FirestoreProvider {...firebaseConfig} firebase={firebase}>
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
          </FirestoreProvider>
        </CardBody>
      </Card>
    </Fragment>
  );
}

export default EventManagerComponent;
