import React, {
  Component,
  useContext,
  Fragment,
  useEffect,
  useState,
  useRef,
} from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Helmet } from "react-helmet";

import { unregister } from "../../../serviceWorker";
import AppAuth from "../../../Layout/AppAuth/index.js";

import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import {
  Row,
  Col,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  CardTitle,
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

import { toast } from "react-toastify";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

import packageJson from "../../../meta.json";

var appVersion = packageJson.version;

var CLIIP;

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

function AccountPage() {
  const isInitialMount = useRef(true);

  const UserContext = React.createContext({});
  const user = useContext(UserContext);
  const UserProvider = UserContext.Provider;
  const UserConsumer = UserContext.Consumer;

  const [elementAuth, setelementAuth] = useState(null);
  const [loadStage, setloadStage] = useState("1");
  const [loadElements, setloadElements] = useState(null);
  const [loadedSnapshotData, setloadedSnapshotData] = useState("");
  const [loadedSnapshotDataIDs, setloadedSnapshotDataIDs] = useState("");
  const [loadedOnce, setloadedOnce] = useState(1);

  function toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }
  function componentDidMount() {
    this.setState({ isLoading: true });

    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((response) => {
        CLIIP = response;
      })
      .then(function (parsedData) {})
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  return (
    <Fragment>
      <Helmet>
        <title>MicroHawaii.com Account Tools</title>
        <meta
          name="description"
          content="Authenticated section for chat, admin and tools."
        />
        <meta name="theme-color" content="#008f68" />
        <link
          rel="canonical"
          href="https://microhawaii.com/dashboards/account"
        />
      </Helmet>
      <Card
        className="AccountBackground"
        style={{
          justifyContent: "center",
          textAlign: "center",
          marginLeft: "-10px",
          borderRadius: "35px",
          background:
            "linear-gradient(0.25turn, #10306655, #FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD, #10306655)",
        }}
      >
        <CardBody
          style={{
            backgroundColor: "transparent",
            paddingRight: "-55px",
            paddingLeft: "-55px",
          }}
        >
          <CardHeader
            style={{
              backgroundColor: "transparent",
              paddingRight: "-25px",
              paddingLeft: "-25px",
            }}
          >
            <h2>Account Tools</h2>
          </CardHeader>
          <AppAuth />
          <VersionCheck />
        </CardBody>
      </Card>
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

function showNotification() {
  function iOS() {
    return (
      [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod",
      ].includes(navigator.platform) ||
      // iPad on iOS 13 detection
      (navigator.userAgent.includes("Mac") && "ontouchend" in document)
    );
  }if (!iOS){
    
  navigator.serviceWorker.register("sw2.js");
  Notification.requestPermission(function (result) {
    if (result === "granted") {
      navigator.serviceWorker.ready.then(function (registration) {
        var options = {
          body:
            "A new version of this website is available, please reload after saving any work to load new website content.",
          icon: "logo.png",
          vibrate: [100, 50, 100],
          data: {
            dateOfArrival: Date.now(),
            primaryKey: 1,
          },
        };
        registration.showNotification("Site Update", options);
      });
    }
  });
  }
}

function showNotification2(e) {
  toast(
    "A new version of this website is available, please reload after saving any work to load new website content.",
    {
      position: "top-right",
      autoClose: false,
      containerId: 1,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      onClose: () => unregister,
      draggable: true,
    }
  );
}

function VersionCheck() {
  const dummy = useRef();
  const messagesRef = firestore.collection("version");
  const query = messagesRef.limit(25);

  const [messages] = useCollectionData(query);
  if (messages) {
    let concData = JSON.parse(JSON.stringify(messages[0])).version;
    if (!localStorage.getItem("appVersion")) {
      localStorage.setItem("appVersion", concData);
    } else if (localStorage.getItem("appVersion") != concData) {
      showNotification();
      showNotification2();
      if (caches) {
        caches.keys().then(function (names) {
          for (let name of names) caches.delete(name);
        });
        localStorage.setItem("appVersion", concData);
      }
    }
  }
  console.log("X");
  return null;
}
export default AccountPage;
