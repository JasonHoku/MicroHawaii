/* This is an example snippet - you should consider tailoring it
to your service.
*/
/*
  Add these to your `package.json`:
    "apollo-boost": "^0.3.1",
    "graphql": "^14.2.1",
    "graphql-tag": "^2.10.0",
    "react-apollo": "^2.5.5"
*/
import React, { Component, Fragment, useState, useEffect, useRef } from "react";
import axios from "axios";
import firebase from "firebase/app";
import "firebase/auth";

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

function ModeratorElements() {
  const [activeTab, setactiveTab] = useState("1");
  const [userMetric, setuserMetric] = useState("");
  const [loadedSnapshotData, setloadedSnapshotData] = useState("");
  const [loadedSnapshotData2, setloadedSnapshotData2] = useState("");
  const [isLoadedOnce, setisLoadedOnce] = useState("1");
  const [issuesMetric, setissuesMetric] = useState("");
  const [loadStage, setloadStage] = useState("1");
  const isInitialMount = useRef(true);

  useEffect(() => {
    let concData = [];
    let concData2 = [];
    let concData3 = [];

    console.log(isInitialMount);
    console.log("Load X: " + loadStage);
    console.log("Updating, Stage: " + loadStage);
    if (loadStage === "1") {
      setloadStage("2") & setisLoadedOnce("1");
    }
    if (loadStage === "2") {
      if (isLoadedOnce === "1") {
        const loadsnapshot = async () => {
          let concData = [];
          let concData2 = [];
          const snapshot = await firebase.firestore().collection("Notes").get();

          snapshot.forEach(async function (doc) {
            concData = concData.concat(doc.data());
          });
          setloadedSnapshotData(concData);
        };
        loadsnapshot().then(async () => {
          setisLoadedOnce("2");
        });
      }
      setloadStage("3");
    }
    if (loadStage === "3") {
      if (loadedSnapshotData != "") {
        if (isLoadedOnce === "1") {
          console.log(loadedSnapshotData) &
            setisLoadedOnce("2") &
            setuserMetric(loadedSnapshotData.length);
        }
      }
    }
  });
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
    if (activeTab === "Live Chat") {
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
                      toggle("Live Chat");
                    }}
                  >
                    {" "}
                    Live Chat{" "}
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
                  }}
                >
                  <h4>Highlight Metrics:</h4>
                </CardTitle>
                <h4>
                  Users: {userMetric}
                  <br />
                  <span id="id002"></span>
                  Open Issues: {issuesMetric} <br />
                  New Comments: x <br />
                  Event Requests: x
                  <br />
                </h4>
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
          <TabPane tabId="Live Chat">{loadLiveChatManager()}</TabPane>
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
