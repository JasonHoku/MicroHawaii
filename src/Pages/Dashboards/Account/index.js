import React, { Component, Fragment, useEffect, useState, useRef } from "react";
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

import AccountElements from "./account";
import ModeratorElements from "./moderator";
//
var CLIIP;

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

var firebaseui = require("firebaseui");

function Account() {
  const [elementAuth, setelementAuth] = useState(null);
  const [loadStage, setloadStage] = useState("1");
  const [loadElements, setloadElements] = useState(null);

  function decideUserLoad() {
    return <div>{loadElements}</div>;
  }
  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult) {
        console.log(authResult);
        localStorage.setItem("username", authResult.user.name);
        if (authResult.user.uid === "zlnmlPv5KfeSEitHQhtd6UReWhF3") {
          setloadElements(
            <span>
              <ModeratorElements />
            </span>
          );
        } else setloadElements(<AccountElements />);
        return false;
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
    // Terms of service url.
    tosUrl: "/#/dashboards/termsofservice",
    // Privacy policy url.
    privacyPolicyUrl: "/#/dashboards/privacy",
  };

  const isInitialMount = useRef(true);

  useEffect(() => {
    console.log(loadStage);
    console.log(firebase.auth());
    if (isInitialMount.current === true) {
      if (loadStage === "1") {
        if (firebaseui.auth.AuthUI.getInstance()) {
          const ui = firebaseui.auth.AuthUI.getInstance();
          ui.start("#firebaseui-auth-container", uiConfig);
        } else {
          const ui = new firebaseui.auth.AuthUI(firebase.auth());
          ui.start("#firebaseui-auth-container", uiConfig);
        }

        setloadStage("2");
      }
      if (loadStage === "2") {
        isInitialMount.current = false;
      } else if (loadStage === "3") {
        try {
          console.log(firebase);
        } catch (e) {
          console.log(e);
        }
        sethasLoaded("4");
      }
    }
  });

  /*  <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
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
            </FirebaseAuthProvider> */
  return (
    <Fragment>
      <CSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Row
          style={{
            width: "100%",
            justifyContent: "center",
            alignContent: "center",
            width: "100%",
            alignItems: "center",
          }}
        >
          <Card
            style={{
              width: "100%",
              backgroundColor: "#CCCCCCC",
              justifyContent: "center",
              marginRight: "-25px",
              justifySelf: "center",
              borderRadius: "25px",
              background:
                "linear-gradient(0.25turn, #30CCCCDD, #FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD, #30CCCCDD)",
            }}
          >
            <CardBody
              style={{
                justifyContent: "center",
                textAlign: "center",
              }}
            >
              <h1>Welcome</h1>
              <div id="firebaseui-auth-container">{decideUserLoad()}</div>
            </CardBody>
          </Card>
        </Row>
      </CSSTransitionGroup>
    </Fragment>
  );
}
export default Account;
