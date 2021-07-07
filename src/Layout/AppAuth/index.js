import React, { useCallback, useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/auth";

import { Card, CardBody, CardHeader } from "reactstrap";
import AccountElements from "../../Pages/Dashboards/Account/account";
import ModeratorElements from "../../Pages/Dashboards/Account/moderator";
import "firebaseui/dist/firebaseui.css";

const defaultUser = { loggedIn: false, email: "" };
const UserContext = React.createContext({});
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

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

function onAuthStateChange(callback) {
  return firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      callback({ loggedIn: true, email: user.email, uid: user.uid });
    } else {
      callback({ loggedIn: false });
    }
  });
}
function login(username, password) {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(username, password)
      .then(() => resolve())
      .catch((error) => reject(error));
  });
}
function logout() {
  firebase.auth().signOut();
}
function LoginView({ onClick, error }) {
  const [loadElements, setloadElements] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <button
        onClick={() => {
          onClick(username, password);
        }}
      >
        Login
      </button>
      <span>{error}</span>
    </div>
  );
}
function LogoutView({ onClick }) {
  const [loadElements, setloadElements] = useState(null);
  const user = useContext(UserContext);
  return <div></div>;
}
function AppAuth() {
  const [user, setUser] = useState({ loggedIn: false });
  const [error, setError] = useState("");
  const [elementAuth, setelementAuth] = useState(null);
  const [loadStage, setloadStage] = useState("1");
  const [loadElements, setloadElements] = useState(null);

  var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function (authResult) {
        firebase
          .firestore()
          .collection("Users")
          .doc(authResult.user.uid)
          .set({
            username: String(authResult.user.displayName),
            uuid: String(authResult.user.uid),
            email: String(authResult.user.email),
          });

        return false;
      },
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: "popup",
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.PhoneAuthProvider.PROVIDER_ID,
    ],
  };
  function decideUserLoad() {
    if (user.loggedIn) {
      if (
        user.uid === "zlnmlPv5KfeSEitHQhtd6UReWhF3" ||
        user.uid === "lhMwE8j0pyZlmkCLT6Uy6pQpDLA3"
      ) {
        return (
          <span>
            <button
              className="zoom"
              style={{
                width: "90px",
                backgroundColor: "#AA3322",
                height: "30px",
                alignSelf: "right",
                float: "right",
                display: "flex",
                position: "absolute",
                top: "0px",
                right: "25px",
                borderRadius: "10px",
                fontSize: "15px",
              }}
              onClick={() => {
                firebase.auth().signOut();
                localStorage.setItem("username", null);
                localStorage.setItem("jwt", null);
                window.location.reload();
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  paddingRight: "-5px",
                  paddingLeft: "-5px",
                }}
              >
                Sign&nbsp;Out
              </span>
            </button>
            <ModeratorElements />
          </span>
        );
      } else if (user.loggedIn) {
        return (
          <span>
            <button
              className="zoom"
              style={{
                width: "90px",
                backgroundColor: "#AA3322",
                height: "30px",
                position: "absolute",
                top: "0px",
                right: "15px",
                borderRadius: "10px",
                fontSize: "15px",
              }}
              onClick={() => {
                firebase.auth().signOut();
                localStorage.setItem("username", null);
                localStorage.setItem("jwt", null);
                window.location.reload();
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  paddingRight: "-5px",
                  paddingLeft: "-5px",
                }}
              >
                Sign&nbsp;Out
              </span>
            </button>
            <AccountElements />
          </span>
        );
      }
    }
  }

  var firebaseui = require("firebaseui");

  useEffect(() => {
    if (firebaseui.auth.AuthUI.getInstance()) {
      const ui = firebaseui.auth.AuthUI.getInstance();
      ui.start("#firebaseui-auth-container", uiConfig);
    } else {
      const ui = new firebaseui.auth.AuthUI(firebase.auth());
      ui.start("#firebaseui-auth-container", uiConfig);
    }
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);
  const requestLogin = useCallback((username, password) => {
    login(username, password).catch((error) => setError(error.code));
  });
  const requestLogout = useCallback(() => {
    logout();
  }, []);

  if (!user.loggedIn) {
    return (
      <CardBody
        style={{
          backgroundColor: "#303030",
          borderRadius: "10px",
          color: "black",
          background: "transparent",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            paddingLeft: "15px",
            paddingRight: "25px",
          }}
        >
          <h2
            style={{
              color: "black",
              textAlign: "center",
            }}
          >
            <b> An account is required to:</b>
          </h2>
          <br />
          <div style={{ textAlign: "center", justifyContent: "center" }}>
            <h4
              style={{
                color: "black",
                textAlign: "left",
                paddingLeft: "25px",
              }}
            >
              <li>Subscribe to Updates</li>
              <br />
              <li>Schedule a Meeting</li>
              <br />
              <li>Chat Amongst the Community</li>
              <br />
              <li>Access Moderator Tools</li>
              <br />
              <li>And more!</li>
            </h4>
            <br />
            <div style={{ width: "100%", textAlign: "center" }}></div>
          </div>
        </div>
        <div id="firebaseui-auth-container">{decideUserLoad()}</div>
      </CardBody>
    );
  } else {
    return (
      <UserProvider value={user}>
        <div id="firebaseui-auth-container">
          <LogoutView onClick={requestLogout} />
          {decideUserLoad()}
        </div>
      </UserProvider>
    );
  }
}
export default AppAuth;
1;
