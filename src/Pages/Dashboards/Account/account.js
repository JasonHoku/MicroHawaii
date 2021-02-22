import React, { Component, Fragment, useState, useEffect, useRef } from "react";

import axios from "axios";
import classnames from "classnames";

import PayPalButton from "../Shop/PayPalExpress";
import SiteChatManagerComponent from "./SiteChatManagerComponent.js";

import {
  Row,
  Col,
  Button,
  CardTitle,
  ListGroupItem,
  Card,
  CardBody,
  Container,
  Input,
  CardHeader,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
} from "reactstrap";
import { toInteger } from "lodash";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";


function AccountElements() {
  const [activeTab, setactiveTab] = useState("1");
  const [formTitle, setformTitle] = useState("");
  const [formCategory, setformCategory] = useState("");
  const [formLoc, setformLoc] = useState("");
  const [finListButtonDisable, setfinListButtonDisable] = useState(true);
  const [formScoreReason, setformScoreReason] = useState("");
  const [loadedImgURL, setloadedImgURL] = useState("");
  const [loadedLocationData, setloadedLocationData] = useState("");
  const [loadedDescription, setloadedDescription] = useState("");
  const [editedDescription, seteditedDescription] = useState("");
  const [gotDownloadURL, setgotDownloadURL] = useState("");
  const [formGMapCoords, setformGMapCoords] = useState("");
  const [loadedEzID, setloadedEzID] = useState("");
  const [hasLoaded, sethasLoaded] = useState("1");
  const [loadStage, setloadStage] = useState("1");
  const [imgUpped, setimgUpped] = useState("");
  const [formPublicType, setformPublicType] = useState("");
  const [hasReceivedImgURL, sethasReceivedImgURL] = useState(false);
  const [readyPaymentCost, setreadyPaymentCost] = useState("2");
  const [readyPaymentItems, setreadyPaymentItems] = useState(
    "Tier 1: $2 / Month"
  );
  const [formDesc, setformDesc] = useState("");
  const [intervalId, setintervalId] = useState("");
  const [finListButton, setfinListButton] = useState("Fill Form Entirely");
  const [finListButtonStatus, setfinListButtonStatus] = useState(
    "Form Not Filled Entirely"
  );
  const [file, setFile] = useState(null);
  const [url, setURL] = useState("");

  const isInitialMount = useRef(true);

  function logout() {
    firebase.auth().signOut();
  }
  function copyImgURL() {
    var copyText = document.getElementById("copyImgURLElement");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied: " + copyText.value;
  }

  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }
  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function decideLoadChat() {
    if (activeTab === "Chat") {
      return <SiteChatManagerComponent />;
    }
  }

  function handleUpload(e) {
    const storage = firebase.storage();
    e.preventDefault();
    const uploadTask = storage.ref(`/listings/${file.name}`).put(file);
    uploadTask.on("state_changed", console.log, console.error, () => {
      storage
        .ref("listings")
        .child(file.name)
        .getDownloadURL()
        .then((url) => {
          setFile(null);
          setURL(url);
          setloadedImgURL(url);
          sethasReceivedImgURL(true);
        });
    });
  }
  function onImageChange(event) {
    console.log(event.target.files[0]);
    document.getElementById("imageGot").hidden = false;
    setimage(event.target.files) & setimgUpped(event.target.files[0].name);
  }

  function loadSubmitFinalListing() {
    if (activeTab === "3") {
      const auth = firebase.auth();
      firebase
        .firestore()
        .collection("ListingsToApprove")
        .doc(auth.currentUser.uid)
        .update({
          [formTitle]: {
            Title: `${localStorage.getItem("formTitle")}`,
            Creator: `${localStorage.getItem(`username`)}`,
            Location: `${localStorage.getItem("formLoc")}`,
            Description: editedDescription,
            Category: `${localStorage.getItem("formCategory")}`,
            Public: `${localStorage.getItem("formPublicType")}`,
            GMapCoords: `${localStorage.getItem("formGMapCoords")}`,
          },
        });
    }
  }
  function loadSubmitUserListing() {
    if (activeTab === "3") {
      return null;
    }
  }
  function onEditorChange(evt) {
    seteditedDescription(evt.editor.getData());
  }
  function toggle(tab) {
    if (activeTab !== tab) {
      setactiveTab(tab);
    }
  }
  function valueCheck() {
    if (!localStorage.getItem("localData3")) {
      localStorage.setItem("localData3", 0);
    }
  }
  function handleRemoveProduct(id, e) {
    let cart = this.state.cart;
    let index = cart.findIndex((x) => x.id == id);
    cart.splice(index, 1);
    this.setState({
      cart: cart,
    });
    this.sumTotalItems(this.state.cart);
    this.sumTotalAmount(this.state.cart);
    e.preventDefault();
  }

  //Reset Quantity
  function updateQuantity(qty) {
    console.log("quantity added...");
    this.setState({
      quantity: qty,
    });
  }
  function handleImageUploadState() {
    if (
      gotDownloadURL === "Upload An Image To Embed" ||
      gotDownloadURL === null
    ) {
      return <div>{gotDownloadURL}</div>;
    } else {
      // User Has URL
      return (
        <div style={{ borderRadius: "25px", textAlign: "center" }}>
          {gotDownloadURL}
          <button
            style={{ borderRadius: "25px", textAlign: "center" }}
            onClick={() => {
              formResetter() &
                localStorage.setItem("gotDownloadURL", "Upload Image To Embed");
            }}
          >
            Reset Image Form
          </button>
        </div>
      );
    }
  }
  function formResetter() {
    try {
      document.forms[1].reset();
      document.forms[2].reset();
      document.forms[3].reset();
      document.forms[4].reset();
      document.forms[5].reset();
      setgotDownloadURL(localStorage.getItem("gotDownloadURL"));
    } catch (error) {}
  }

  function loadPayPalButton() {
    if (activeTab === "4") {
      localStorage.setItem(
        "ProductInfo",
        readyPaymentItems + "X" + localStorage.getItem("username")
      );
      return (
        <span>
          <PayPalButton
            valueCheck={valueCheck()}
            cart={readyPaymentItems
              .toString()
              .split("\n")
              .map((str) => (
                <p key={str}>{str}</p>
              ))}
            total={toInteger(readyPaymentCost)}
            totalItems={readyPaymentItems
              .toString()
              .split("\n")
              .map((str) => (
                <p key={str}>{str}</p>
              ))}
            cartItems={readyPaymentItems
              .toString()
              .split("\n")
              .map((str) => (
                <p key={str}>{str}</p>
              ))}
            removeProduct={handleRemoveProduct}
            style={{ width: "15rem" }}
          />
          <center>
            {" "}
            <br />{" "}
            {readyPaymentItems
              .toString()
              .split("\n")
              .map((str) => (
                <p key={str}>{str}</p>
              ))}
          </center>
        </span>
      );
    }
  }
  function postListingImage() {
    console.log("x");
    setproStatusText("Awaiting Initialize");
    const formData = new FormData();
    if (images != null) {
      Array.from(images).forEach((image) => {
        formData.append("files", image);
      });
      formData.Image = images[0];
      axios
        .post(`https://api.MicroHawaii.com/upload`, formData, {
          headers: {
            "content-type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.err == null) {
            document.getElementById("imageUpped").hidden = false;
            console.log(res);
            setactiveProURL("http://api.MicroHawaii.com" + res.data[0].url);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  function checkFormStates() {
    setgotDownloadURL(localStorage.getItem("gotDownloadURL"));
    handleImageUploadState();
    setformGMapCoords(localStorage.getItem("LocationDataCoords"));
    try {
      if (String(formTitle).length > 1) {
        console.log("ZZZ");
        if (String(localStorage.getItem(`username`)).length > 3) {
          if (String(formLoc.length) > 3) {
            if (String(editedDescription.length) > 2) {
              if (String(formCategory).length > 1) {
                if (String(formPublicType) !== "") {
                  if (String(formGMapCoords).length > 3) {
                    setfinListButtonDisable(false);
                    document.getElementById("finListButton").disabled = false;
                    document.getElementById(
                      "finListButton"
                    ).style.backgroundColor = "blue";
                    setfinListButton("Send Listing");
                    setfinListButtonDisable(false);
                    setfinListButtonStatus("Ready To Publish");
                  }
                }
              }
            }
          }
        }
      }
    } catch (e) {}
  }

  function handleInputChange(event) {
    setformName(event.target.value);
  }
  return (
    <Fragment>
      <Card
        style={{
          width: "100%",
          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
          borderRadius: "25px",
        }}
      >
        <CardHeader
          style={{
            textAlight: "center",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50px",
          }}
        >
          <Button
            style={{
              marginTop: "10px",
              borderRadius: "16px",
              height: "35px",
              fontSize: "100%",
              marginLeft: "-10px",
              marginTop: "5px",
            }}
            size="md"
            fill="true"
            color="primary"
            className={
              "btn-pill btn-wide " + classnames({ active: activeTab === "2" })
            }
            onClick={() => {
              toggle("1");
            }}
          >
            Your Account
          </Button>
          &nbsp;
          <Button
            style={{
              marginTop: "10px",
              borderRadius: "16px",
              textAlight: "center",
              height: "35px",
              fontSize: "100%",
              paddingRight: "-25px",
              marginRight: "-10px",
              display: "center",
              marginTop: "5px",
            }}
            size="md"
            fill="true"
            color="primary"
            className={
              "btn-pill btn-wide " + classnames({ active: activeTab === "1" })
            }
            onClick={() => {
              toggle("Chat");
            }}
          >
            Community Chat:
          </Button>
        </CardHeader>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Card>
              <CardBody>
                <center>
                  <h3>More Account Tools Coming Soon.</h3>
                </center>
                <br />
                <br />
                <span style={{ textAlign: "left" }}>
                  <b>Username:</b> {localStorage.getItem("username")} <br />
                  <br />
                  <b> E-Mail:</b> {localStorage.getItem("userEmail")}
                  <br />
                  <span id="id001"></span>
                  <br />
                  <li> Edit Your Profile</li>{" "}
                  <li>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault() & setactiveTab("Chat")}
                    >
                      {" "}
                      Chat With Community{" "}
                    </a>{" "}
                  </li>{" "}
                  <li>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault() & setactiveTab("4")}
                    >
                      {" "}
                      Upgrade Account{" "}
                    </a>{" "}
                  </li>{" "}
                </span>
                <br /> <br />
                <Row
                  style={{
                    backgroundColor: "transparent",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={(e) => {
                      window.location.href =
                        "https://MicroHawaii.com/#/dashboards/contact";
                    }}
                  >
                    {" "}
                    Contact Staff
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    onClick={(e) => {
                      window.location.href =
                        "https://MicroHawaii.com/#/dashboards/services";
                    }}
                  >
                    {" "}
                    View Map
                  </Button>
                  &nbsp;&nbsp;
                  <Button
                    onClick={(e) => {
                      e.preventDefault();
                      localStorage.removeItem("jwt");
                      localStorage.removeItem("username");
                      logout();
                      window.location.reload();
                    }}
                  >
                    Logout
                  </Button>
                </Row>
              </CardBody>
            </Card>
            <br />
          </TabPane>
          <TabPane tabId="3">
            <Card>
              <CardBody>
                {loadSubmitUserListing()}
                {loadSubmitFinalListing()}
              </CardBody>
            </Card>
            <br />
          </TabPane>
          <TabPane tabId="4">
            <Card
              style={{
                backgroundColor: "#CCCCCCC",
                borderRadius: "25px",
                boxShadow: "0px 0px 0px 3px rgba(50,50,50, .8)",
              }}
            >
              <CardBody>
                <center>
                  <h2> Upgrade Account</h2>
                </center>{" "}
                <br />
                Account services and ofers are still being revisioned.
                <br /> Please check back in few days for new information.
                <br />
                <br />
                <h5>
                  {" "}
                  <div style={{ textAlign: "left" }}>
                    <b>Username:</b> {localStorage.getItem("username")} <br />
                    <br />
                    <b> E-Mail:</b> {localStorage.getItem("userEmail")}
                    <br />
                    <br />
                    <br />
                    <br />
                    <center>
                      {" "}
                      <a
                        href="#"
                        onClick={(e) =>
                          e.preventDefault() &
                          setreadyPaymentCost("2") &
                          setreadyPaymentItems("Tier 1: $2 / Month")
                        }
                      >
                        Tier 1
                      </a>{" "}
                      &nbsp;
                      <a
                        href="#"
                        onClick={(e) =>
                          e.preventDefault() &
                          setreadyPaymentCost("5") &
                          setreadyPaymentItems("Tier 2: $5 / Month")
                        }
                      >
                        Tier 2
                      </a>{" "}
                      &nbsp;
                      <a
                        href="#"
                        onClick={(e) =>
                          e.preventDefault() &
                          setreadyPaymentCost("25") &
                          setreadyPaymentItems("Tier 3: $25 / Month")
                        }
                      >
                        Tier 3
                      </a>
                    </center>
                    <br />
                    <br />
                    <br />
                    {loadPayPalButton()}
                    <br />
                  </div>
                </h5>
              </CardBody>
            </Card>
          </TabPane>
          <TabPane tabId="Chat">
            <Card
              style={{
                backgroundColor: "#CCCCCCC",
                borderRadius: "25px",
                boxShadow: "0px 0px 0px 3px rgba(50,50,50, .8)",
              }}
            >
              <CardBody>{decideLoadChat()}</CardBody>
            </Card>
          </TabPane>
        </TabContent>
      </Card>
      <br />
    </Fragment>
  );
}

export default AccountElements;
