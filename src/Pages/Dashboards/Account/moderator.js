
import React, { Component, Fragment, useState, useEffect, useRef } from "react";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

import {
  FirebaseAppProvider,
  useFirestoreDocData,
  useFirestore,
  useFirebaseApp,
  useFirestoreCollectionData,
  useFirestoreCollection,
} from "reactfire";

import FormQueryComponent from "./FormQueryComponent.js";
import UserQueryComponent from "./UserQueryComponent.js";
import { toInteger } from "lodash";
import ProductManagerComponent from "./ProductManagerComponent.js";
import ChatManagerComponent from "./ChatManagerComponent.js";
import ContentManagerComponent from "./ContentManagerComponent.js";
import EventManagerComponent from "./EventManagerComponent.js";
import NoteManagerComponent from "./NoteManagerComponent.js";
import CommentManagerComponent from "./CommentManagerComponent.js";
import SurveyManagerComponent from "./SurveyManagerComponent.js";
import LiveChatManagerComponent from "./LiveChatManagerComponent.js";
import SiteChatManagerComponent from "./SiteChatManagerComponent.js";
import DocumentationPage from "./Documentation.js";
import VideoManager from "./VideoManager.js";
import IssueManager from "./IssueManager.js";

import classnames from "classnames";

import PayPalButton from "../Shop/PayPalExpress";
import TextareaAutosize from "react-textarea-autosize";
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
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { relative } from "path";
import LoginPageElements from "./loginPage";
import AccountElements from "./account";

import { toast } from "react-toastify";
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

function ModeratorElements() {
  const [activeTab, setactiveTab] = useState("1");
  const [userMetric, setuserMetric] = useState(
    parseInt(localStorage.getItem("users")) || 0
  );
  const [loadedSnapshotData, setloadedSnapshotData] = useState("");
  const [loadedSnapshotData2, setloadedSnapshotData2] = useState("");
  const [isLoadedOnce, setisLoadedOnce] = useState("1");
  const [issuesMetric, setissuesMetric] = useState("");
  const [loadStage, setloadStage] = useState("1");
  const isInitialMount = useRef(true);

  function showNotification(e) {
    console.log(userMetric, localStorage.getItem("users"));
    navigator.serviceWorker.register("sw.js");
    Notification.requestPermission(function (result) {
      if (result === "granted") {
        navigator.serviceWorker.ready.then(function (registration) {
          var options = {
            body: "A new user has joined MicroHawaii",
            icon: "logo.png",
            vibrate: [100, 50, 100],
            data: {
              dateOfArrival: Date.now(),
              primaryKey: 1,
            },
          };
          registration.showNotification("New User", options);
        });
      }
    });
  }

  function showNotification2(e) {
    toast("A new user has joined MicroHawaii", {
      position: "top-right",
      autoClose: false,
      containerId: 1,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      onClose: () => setloadStage("1"),
      draggable: true,
    });
  }

  function GetCollectionLength(e) {
    // easily access the Firestore library
    const firebaseApp = useFirebaseApp();

    const collectionRef = firebaseApp.firestore().collection("Users");

    const items = useFirestoreCollectionData(collectionRef);

    // easily check the loading status
    if (items.data) {
      if (items.data.length === userMetric) {
        return items.data.length;
      } else console.log("YYY");
      showNotification(e);
      showNotification2(e);
      localStorage.setItem("users", parseInt(items.data.length)) &
        setuserMetric(items.data.length);
      return items.data.length;
    } else return "Fetching...";
  }

  function GetDocData2(e) {
    // easily access the Firestore library
    const firebaseApp = useFirebaseApp();

    const docRef = useFirestore().collection("totalHits").doc("value");

    // subscribe to a document for realtime updates. just one line!
    const { status, data } = useFirestoreDocData(docRef);

    // easily check the loading status
    if (data) {
      return data.population;
    } else return "Fetching...";
  }

  function GetDocData3(e) {
    // easily access the Firestore library
    const firebaseApp = useFirebaseApp();

    const docRef = useFirestore().collection("totalClicks").doc("value");

    // subscribe to a document for realtime updates. just one line!
    const { status, data } = useFirestoreDocData(docRef);

    // easily check the loading status
    if (data) {
      return data.population;
    } else return "...";
  }

  function GetDocData(e) {
    // easily access the Firestore library
    const firebaseApp = useFirebaseApp();

    const docRef = useFirestore().collection("version").doc("0");

    // subscribe to a document for realtime updates. just one line!
    const { status, data } = useFirestoreDocData(docRef);

    // easily check the loading status
    if (data) {
      return data.version;
    } else return "Fetching...";
  }

  function loadProducts() {
    if (activeTab === "Products") {
      return <ProductManagerComponent />;
    }
  }
  function loadEvents() {
    if (activeTab === "Events") {
      return <EventManagerComponent />;
    }
  }
  function loadContentManagerComponent(props) {
    if (activeTab === "Content") {
      return <ContentManagerComponent />;
    }
  }
  function loadUserQueryComponent(props) {
    if (activeTab === "Users") {
      return <UserQueryComponent />;
    }
  }

  function loadCommentManagerComponent(props) {
    if (activeTab === "Comments") {
      return <CommentManagerComponent />;
    }
  }

  function loadUserQueryComponent(props) {
    if (activeTab === "Users") {
      return <UserQueryComponent />;
    }
  }
  function documentationPageLoader() {
    if (activeTab === "Documentation") {
      return <DocumentationPage />;
    }
  }

  function loadAccountElementComponent() {
    if (activeTab === "2") {
      return <AccountElements />;
    }
  }

  function loadLiveChatManager() {
    if (activeTab === "Site Chat") {
      return <SiteChatManagerComponent />;
    }
  }

  function loadContentManagerComponent(props) {
    if (activeTab === "Content") {
      return <ContentManagerComponent />;
    }
  }

  function loadSurveyManagerComponent(props) {
    if (activeTab === "Surveys") {
      return <SurveyManagerComponent />;
    }
  }
  function loadNoteManagerComponent(props) {
    if (activeTab === "Notes") {
      return <NoteManagerComponent />;
    }
  }

  function getMetrics() {
    console.log("Updating Metrics"),
      this.setState({
        userMetric: localStorage.getItem("ActiveUserCount"),
        chatMetric: localStorage.getItem("ActiveChatUserCount"),
        issuesMetric: localStorage.getItem("ActiveIssueCount"),
        commentsMetric: localStorage.getItem("CommentsCount"),
        SurveyMetric: localStorage.getItem("NewSurveyCount"),
      });
  }
  function toggle(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  }
  function handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id === id);
    cart.splice(index, 1);
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }
  function toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }
  function onImageChange(event) {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  }

  function handleInputChange(event) {
    this.setState({
      formName: event.target.value,
    });
  }
  function handlePriceInputChange(event) {
    localStorage.setItem(
      "localData7",
      event.target.value - localStorage.getItem("localData4")
    );
    this.setState({
      adminPrice: event.target.value,
    });
  }
  function valueCheck() {
    if (!localStorage.getItem("localData3")) {
      localStorage.setItem("localData3", 0);
    }
  }
  return (
    <Fragment>
      <Container
        fluid
        style={{
          backgroundColor: "transparent",
          backgroundColor: "#FFFFFFDD",
          borderRadius: "55px",
          width: "100%",
          justifyContent: "center",
        }}
      >
        <TabContent
          activeTab={activeTab}
          style={{
            backgroundColor: "transparent",
            opacity: 0.9,
            justifyContent: "center",
            alignSelf: "center",
            width: "100%",
          }}
        >
          <CardHeader
            className="ponoTitle"
            style={{
              justifyContent: "center",
              backgroundColor: "transparent",
              alignSelf: "center",
              borderBottom: "none",
              marginBottom: "-25px",
              width: "100%",
              opacity: 100,
            }}
          >
            <h2>
              <i className="pe-7s-tools icon-gradient bg-plum-plate"></i>
              Moderator Controls
            </h2>
          </CardHeader>
          <CardHeader
            style={{
              marginBottom: "-35px",
              justifyContent: "center",
              backgroundColor: "transparent",
              borderBottom: "none",
              alignSelf: "center",
            }}
          >
            <Button
              size="sm"
              outline
              color="alternate"
              className={
                "btn-pill btn-wide " +
                classnames({ active: useState(activeTab) === "1" })
              }
              onClick={() => {
                toggle("1");
              }}
            >
              Tools
            </Button>
            <Button
              outline
              color="alternate"
              className={
                "btn-pill btn-wide " +
                classnames({ active: useState(activeTab) === "2" })
              }
              onClick={async () => {
                toggle("2");
                setTimeout(
                  () =>
                    document.getElementById("id001").scrollIntoView({
                      behavior: "smooth",
                      block: "center",
                      inline: "center",
                    }),
                  100
                );
              }}
            >
              User View
            </Button>
          </CardHeader>
          <br />
          <br />
          <Row style={{ justifyContent: "center" }}>
            <Row>
              {" "}
              <Card
                style={{
                  width: "auto",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  alignContent: "center",
                  height: "100%",
                  marginTop: "-5px",
                  marginBottom: "-10px",
                  marginLeft: "25px",
                  marginRight: "25px",
                  alignItems: "center",
                }}
              >
                <CardTitle
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    marginBottom: "-15px",
                  }}
                >
                  <h4>Main Website Tools:</h4>
                </CardTitle>
                <span
                  style={{
                    marginLeft: "10px",
                    marginTop: "5px",
                    display: "block",
                  }}
                >
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#009900",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      toggle("Documentation");
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                    }}
                  >
                    {" "}
                    Documentation{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#009999",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Content");
                    }}
                  >
                    {" "}
                    Content Editor{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#006699",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Video");
                    }}
                  >
                    {" "}
                    Video Manager{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#0033AA",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Users");
                    }}
                  >
                    {" "}
                    User Management{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#0000CC",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Comments");
                    }}
                  >
                    {" "}
                    Comments{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#3300CC",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Products");
                    }}
                  >
                    {" "}
                    Products{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#6600CC",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Events");
                    }}
                  >
                    {" "}
                    Events{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      marginTop: "10px",
                      backgroundColor: "#BB00CC",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Notes");
                    }}
                  >
                    Team Notes
                  </button>
                  &nbsp;
                  <button
                    style={{
                      backgroundColor: "#BB0099",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Surveys");
                    }}
                  >
                    {" "}
                    Surveys{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      backgroundColor: "#BB0066",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Site Chat");
                    }}
                  >
                    {" "}
                    Site Chat{" "}
                  </button>
                  &nbsp;
                  <button
                    style={{
                      backgroundColor: "#BB0033",
                      borderRadius: "16px",
                      height: "35px",
                      fontSize: "120%",
                      marginTop: "5px",
                    }}
                    onClick={async () => {
                      setTimeout(
                        () =>
                          document.getElementById("id002").scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                            inline: "center",
                          }),
                        100
                      );
                      toggle("Issue");
                    }}
                  >
                    {" "}
                    Report Issue{" "}
                  </button>
                  &nbsp;
                  <br />
                  <br />
                </span>
              </Card>
            </Row>
            <TabPane
              className="ponoTitle"
              tabId="1"
              style={{
                height: "100%",
                backgroundColor: "transparent",
                alignContent: "center",
                opacity: 100,
              }}
            >
              <Card
                style={{
                  width: "100%",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  alignContent: "center",
                  height: "100%",
                  marginTop: "15px",
                  alignItems: "center",
                  marginBottom: "25px",
                }}
              >
                <CardTitle
                  style={{
                    justifyContent: "center",
                    alignSelf: "center",
                    margin: "5px",
                  }}
                >
                  <h3>Highlight Metrics:</h3>
                </CardTitle>
                <h5>
                  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
                    <Row
                      style={{
                        boxShadow: "0px 0px 0px 2px rgba(50,50,50, .9)",
                        marginBottom: "2px",
                        paddingBottom: "2px",
                      }}
                    >
                      <Col style={{ width: "100%" }}>Clicks: </Col>
                      <Col style={{ textAlign: "right" }}>
                        <GetDocData3 />
                      </Col>
                    </Row>{" "}
                    <Row
                      style={{
                        boxShadow: "0px 0px 0px 2px rgba(50,50,50, .9)",
                        marginBottom: "2px",
                        paddingBottom: "2px",
                      }}
                    >
                      <Col> PageLoads: </Col>
                      <Col style={{ textAlign: "right" }}>
                        <GetDocData2 />
                      </Col>
                    </Row>{" "}
                    <Row
                      style={{
                        boxShadow: "0px 0px 0px 2px rgba(50,50,50, .9)",
                        marginBottom: "2px",
                        paddingBottom: "2px",
                      }}
                    >
                      <Col>Users: </Col>
                      <Col style={{ textAlign: "right" }}>
                        <GetCollectionLength />
                        <span id="id002"></span>
                      </Col>
                    </Row>{" "}
                    <Row
                      style={{
                        boxShadow: "0px 0px 0px 2px rgba(50,50,50, .9)",
                        marginBottom: "2px",
                        paddingBottom: "2px",
                      }}
                    >
                      <Col>SiteVersion: </Col>
                      <Col style={{ textAlign: "right" }}>
                        <GetDocData />
                      </Col>
                    </Row>
                  </FirebaseAppProvider>{" "}
                </h5>
              </Card>
            </TabPane>
          </Row>
          <TabPane tabId="2">
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Card
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  alignContent: "left",
                  borderRadius: "50px",
                  alignItems: "left",
                  textAlign: "left",
                }}
              >
                <h4 style={{ width: "100%", textAlign: "left" }}>
                  <b>&nbsp; Registered User View:</b>
                </h4>
                {loadAccountElementComponent()}
                <br />
              </Card>
            </Row>
          </TabPane>
          <TabPane tabId="3"></TabPane>
          <TabPane tabId="Comments">{loadCommentManagerComponent()}</TabPane>
          <TabPane tabId="Events">
            {loadEvents()} <br />
          </TabPane>
          <TabPane tabId="Content">
            {loadContentManagerComponent()}
            <br />
          </TabPane>
          <TabPane tabId="Notes">{loadNoteManagerComponent()}</TabPane>
          <TabPane tabId="Products">{loadProducts()}</TabPane>
          <TabPane tabId="Site Chat">{loadLiveChatManager()}</TabPane>
          <TabPane tabId="Documentation">{documentationPageLoader()}</TabPane>
          <TabPane tabId="Video"></TabPane>
          <TabPane tabId="Users">{loadUserQueryComponent()}</TabPane>
          <TabPane tabId="Issue"></TabPane>
        </TabContent>
      </Container>
    </Fragment>
  );
}
export default ModeratorElements;
