import React, { Component, Fragment, useState } from "react";
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

var firebaseConfig = {
  apiKey: "AIzaSyDnQ9BZMl5OChhJS1oqxPfq_oj16oREAGs",
  authDomain: "microhawaii-5f97b.firebaseapp.com",
  projectId: "microhawaii-5f97b",
  storageBucket: "microhawaii-5f97b.appspot.com",
  messagingSenderId: "775965301611",
  appId: "1:775965301611:web:5858ed50ba444371e74a2e",
  measurementId: "G-H00S7BSD3H",
};

function EventManagerComponent() {
  const [textVar, settextVar] = useState("");
  const [setDate, setsetDate] = useState(String(new Date().toISOString()));
  const [eventsFormDescription, seteventsFormDescription] = useState("");

  function handleInputChange(event) {
    seteventsFormDescription(event.target.value);
  }
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
          <h4>
            {" "}
            <b>Dates Are UTC</b>
          </h4>
          <center>
            <Calendar className="calendarVar" onChange={(e) => setsetDate(e)} />
          </center>
          <div style={{ textAlign: "left" }}>
            <div>Selected Date In UTC</div>
            <input
              style={{ width: "50%" }}
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
              onChange={handleInputChange}
              style={{ width: "100%", position: "relative" }}
              type="textarea"
            ></Input>{" "}
            &nbsp; <br />
          </div>
          <br />
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
                            EventTitle: eventsFormDescription,
                            EventEZID: localStorage.getItem("eventCounter"),
                            EventDate: String(new Date(setDate).toISOString()),
                          },
                          { merge: true }
                        ).then((res) => {
                          console.log("Ran mutation ", res);
                        });
                        seteventsFormDescription("");
                      }}
                    >
                      <span
                        style={{
                          position: "relative",
                          top: "-4px",
                        }}
                      >
                        Add Event To Day
                      </span>
                    </button>
                  </div>
                );
              }}
            </FirestoreMutation>
          </FirestoreProvider>
          <br />
          <b>Calendar Listings:</b>
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
                      are24hFrom1.setDate(are24hFrom1.getDate(setDate));
                      console.log("X :" + are24hFrom0);
                      console.log("Y :" + are24hFrom1);
                      if (gotDate >= are24hFrom0) {
                        if (gotDate < are24hFrom1) {
                          console.log(new Date(d.value[i].EventDate));
                          console.log(new Date(new Date(setDate)));
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
      <br />
    </Fragment>
  );
}

export default EventManagerComponent;
