import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
  CardHeader,
  CardLink,
  CardImg,
  NavLink,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

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
import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import AccountElements from "./account";
import AdminElements from "./admin";
import ModeratorElements from "./moderator";
import LoginPageElements from "./loginPage";
//

var CLIIP;

export default class Account extends Component {
  componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((response) => {
        CLIIP = response;
      })
      .then(function (parsedData) {})
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  render() {
    let adminCardEle;
    {
      adminCardEle = (
        <Row
          style={{
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            height: "min-content",
          }}
        >
          <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
            <FirebaseAuthConsumer>
              {({ isSignedIn, user, providerId }) => {
                if (isSignedIn === false) {
                  console.log(user);
                  return (
                    <Card
                      className="main-card mb-3"
                      style={{
                        width: "85%",
                        maxWidth: "750px",
                        backgroundColor: "#CCCCCCC",
                        borderRadius: "25px",
                        background:
                          "linear-gradient(0.25turn, #CCDDFFEE, #FFFFFFAA, #CCDDFFEE)",

                        boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      }}
                    >
                      <CardHeader
                        style={{
                          justifyContent: "center",
                          alignContent: "center",
                          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                          borderRadius: "25px",
                          alignItems: "center",
                        }}
                      >
                        <h2>Login</h2>{" "}
                      </CardHeader>
                      <br />
                      <CardBody
                        style={{
                          backgroundColor: "#CCCCCCC",
                          borderRadius: "10px",
                          margin: "10px",
                          background:
                            "linear-gradient(0.25turn, #CCDDEEEE, #FFFFFFAA, #CCDDEEEE)",
                        }}
                      >
                        <h2>Sign-In to access additional features.</h2>
                        <br />
                        <div style={{ textAlign: "left", margin: "10px" }}>
                          <h3>
                            {" "}
                            <li>Schedule A Meeting</li> <br />
                            <li>Chat With The Network</li> <br />
                            <li>Manage Your Account</li> <br />
                          </h3>
                          <br />
                          <div style={{ width: "100%", textAlign: "center" }}>
                            <button
                              className="zoom"
                              style={{
                                width: "120px",
                                backgroundColor: "#335599",
                                height: "60px",
                                alignSelf: "center",
                                fontSize: "15px",
                                borderRadius: "10px",
                              }}
                              onClick={() => {
                                const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
                                firebase
                                  .auth()
                                  .signInWithPopup(googleAuthProvider);
                              }}
                            >
                              Sign In With Google
                            </button>{" "}
                          </div>
                        </div>
                      </CardBody>
                    </Card>
                  );
                } else {
                  //Begin Moderator Check
                  if (
                    user.displayName === "raymauiyoga" ||
                    user.displayName === "Jason Hoku"
                  ) {
                    localStorage.setItem("username", user.displayName);
                    localStorage.setItem("userEmail", user.email);
                    localStorage.setItem("userUID", user.uid);
                    return (
                      <Card
                        style={{
                          width: "85%",
                          maxWidth: "750px",
                          backgroundColor: "#CCCCCCC",
                          borderRadius: "25px",
                          background:
                            "linear-gradient(0.25turn, #CCDDFFEE, #FFFFFFAA, #CCDDFFEE)",

                          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                        }}
                      >
                        <CardBody
                          style={{
                            width: "100%",
                            justifyContent: "center",
                            alignContent: "center",
                            boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                            width: "100%",
                            alignItems: "center",
                            borderRadius: "25px",
                            textAlign: "center",
                          }}
                        >
                          {" "}
                          <button
                            className="zoom"
                            style={{
                              width: "90px",
                              backgroundColor: "#AA3322",
                              height: "33px",
                              alignSelf: "right",
                              float: "right",
                              display: "flex",
                              position: "relative",
                              borderRadius: "10px",
                              fontSize: "15px",
                            }}
                            onClick={() => {
                              firebase.auth().signOut() &
                                localStorage.setItem("username", null);
                              localStorage.setItem("jwt", null);
                              window.location.reload();
                            }}
                          >
                            Sign&nbsp;Out
                          </button>
                          <h2> Welcome, {localStorage.getItem("username")}</h2>
                          <IfFirebaseAuthed>
                            <ModeratorElements />
                          </IfFirebaseAuthed>
                        </CardBody>
                      </Card>
                    );
                  } else localStorage.setItem("username", user.displayName);
                  localStorage.setItem("userEmail", user.email);
                  localStorage.setItem("userUID", user.uid);
                  console.log(user);
                  return (
                    <Card
                      style={{
                        width: "85%",
                        maxWidth: "750px",
                        backgroundColor: "#CCCCCCC",
                        borderRadius: "25px",
                        background:
                          "linear-gradient(0.25turn, #CCDDFFEE, #FFFFFFAA, #CCDDFFEE)",

                        boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      }}
                    >
                      <CardBody
                        style={{
                          width: "100%",
                          justifyContent: "center",
                          alignContent: "center",
                          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                          width: "100%",
                          alignItems: "center",
                          borderRadius: "25px",
                          textAlign: "center",
                        }}
                      >
                        {" "}
                        <button
                          className="zoom"
                          style={{
                            width: "90px",
                            backgroundColor: "#AA3322",
                            height: "33px",
                            alignSelf: "right",
                            float: "right",
                            display: "flex",
                            position: "relative",
                            borderRadius: "10px",
                            fontSize: "15px",
                          }}
                          onClick={() => {
                            firebase.auth().signOut() &
                              localStorage.setItem("username", null);
                            localStorage.setItem("jwt", null);
                            window.location.reload();
                          }}
                        >
                          Sign&nbsp;Out
                        </button>
                        <h2> Welcome, {localStorage.getItem("username")}</h2>
                        <IfFirebaseAuthed>
                          <AccountElements />
                        </IfFirebaseAuthed>
                      </CardBody>
                    </Card>
                  );
                }
              }}
            </FirebaseAuthConsumer>
          </FirebaseAuthProvider>
        </Row>
      );
    }

    return <Fragment>{adminCardEle}</Fragment>;
  }
}
