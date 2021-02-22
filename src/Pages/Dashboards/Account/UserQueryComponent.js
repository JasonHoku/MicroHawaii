import React, { Component, Fragment, useState, useEffect, useRef } from "react";

import { gql, useQuery } from "@apollo/client";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";

import {
  Row,
  Col,
  Button,
  ListGroupItem,
  Card,
  CardBody,
  Tooltip,
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
} from "reactstrap";
import axios from "axios";
import CKEditor from "ckeditor4-react";

import { reverse, toInteger } from "lodash";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
function UserQueryComponent() {
  const btnRef = React.useRef(null);

  const [url, setURL] = useState("");
  const isInitialMount = useRef(true);
  const [statusVar, setstatusVar] = useState("Viewing User Data");
  const [loadedUsername, setloadedUsername] = useState("");
  const [editedDescription, seteditedDescription] = useState("");
  const [loadedSnapshotData, setloadedSnapshotData] = useState([]);
  const [loadedSnapshotDataIDs, setloadedSnapshotDataIDs] = useState("");
  const [loadStage, setloadStage] = useState("1");

  const [readyTitle, setreadyTitle] = useState("");
  const [loadedEzID, setloadedEzID] = useState("1");

  const [loadedEmail, setloadedEmail] = useState("");
  const [loadedUserMeta, setloadedUserMeta] = useState("");

  const [loadedTotalIDs, setloadedTotalIDs] = useState("1");
  const [gotDownloadURL, setgotDownloadURL] = useState(
    "Upload An Image To Embed"
  );
  const [categoryVar, setcategoryVar] = useState("User");
  const [isLoadedOnce, setisLoadedOnce] = useState("1");
  const [file, setFile] = useState(null);

  function handleInputChangeEvent(event) {
    setState({
      [event.target.name]: event.target.value,
    });
  }

  useEffect(() => {
    if (btnRef.current) {
      setReady(true);
    }
  }, [btnRef]);

  useEffect(() => {
    let concData = [];
    let concData2 = [];
    let concData3 = [];

    if (isInitialMount.current === true) {
      console.log("Updating, Stage: " + loadStage);
      if (loadStage === "1") {
        if (isLoadedOnce === "1") {
          const loadsnapshot = async () => {
            const snapshot = await firebase
              .firestore()
              .collection("Users")
              .get();
            snapshot.forEach((doc) => {
              concData = concData.concat(doc.data());
              concData2 = concData2.concat(doc.id);
            });
            setloadedSnapshotData(concData);
            setloadedSnapshotDataIDs(concData2);
          };
          console.log(
            loadsnapshot().then(async () => {
              setloadStage("2");
            })
          );
        }
      }
    }
    if (loadStage === "2") {
      try {
        setisLoadedOnce("1");
        console.log(loadedSnapshotData);
        setloadedTotalIDs(loadedSnapshotData.length);

        setloadedUsername(
          String(
            JSON.parse(JSON.stringify(loadedSnapshotData[loadedEzID - 1]))
              .username
          )
        );
        setloadedEmail(
          String(
            JSON.parse(JSON.stringify(loadedSnapshotData[loadedEzID - 1])).email
          )
        );
      } catch (error) {
        console.log(error);
      }
      setstatusVar(
        "Viewing " + categoryVar + " " + loadedEzID + " of: " + loadedTotalIDs
      ) & setloadStage("3");
    }
    if (loadStage === "3") {
      setloadStage("4");
    }
    if (loadStage === "4") {
      console.log("Finished Loading!");
    }
  });

  function onEditorChange(evt) {
    seteditedDescription(evt.editor.getData());
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
        });
    });
  }

  function handleChange(e) {
    setFile(e.target.files[0]);
  }

  function runSendData() {
    console.log(String(loadedEzID));
    firebase
      .firestore()
      .collection(categoryVar)
      .doc(String(loadedEzID - 1))
      .set({ body: String(editedDescription) });
  }

  function runDeleteData() {
    var answer = window.confirm(
      "Are you sure you want to delete " + loadedEzID
    );
    if (answer) {
      console.log(String(loadedEzID));
      firebase
        .firestore()
        .collection(categoryVar)
        .doc(String(loadedEzID - 1))
        .delete()
        .then(setloadStage("1") & setloadedTotalIDs(loadedTotalIDs - 1));
    } else {
      //some code
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

  function handleImageUploadState() {
    if (gotDownloadURL === "Upload An Image To Embed") {
      return <div>{gotDownloadURL}</div>;
    } else {
      // User Has URL
      return <div>{gotDownloadURL}</div>;
    }
  }
  return (
    <Fragment>
      <Card
        style={{
          boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
          backgroundColor: "transparent",
          width: "100%",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <CardBody>
          <h4 style={{ width: "100%", textAlign: "left" }}>
            <b>User&nbsp;Management</b>
          </h4>
          <small>ID #:</small>
          <input
            onChange={(e) =>
              setloadedEzID(e.target.value) & setloadStage("1") & formResetter()
            }
            value={loadedEzID}
            name="loadedEzID"
            style={{ width: "45px" }}
          ></input>
          &nbsp; &nbsp;
          <Button
            color="primary"
            onClick={() =>
              setloadedEzID(toInteger(loadedEzID) - 1) & setloadStage("1")
            }
          >
            ←
          </Button>{" "}
          &nbsp;
          <Button
            color="primary"
            onClick={() =>
              setloadedEzID(toInteger(loadedEzID) + 1) & setloadStage("1")
            }
          >
            →
          </Button>{" "}
          &nbsp;
          <br />
          <br />{" "}
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
              width: "100%",
            }}
          >
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <CardHeader style={{ textAlign: "left" }}>
                <h5> Data View:</h5>
              </CardHeader>{" "}
              <small>
                Username:
                <input
                  onChange={() =>
                    setloadedUsername(event.target.value) & setloadStage("3")
                  }
                  value={loadedUsername}
                  name="loadedUsername"
                  style={{ position: "relative", width: "90%" }}
                />
                <br />
                Email:
                <input
                  onChange={() =>
                    setloadedEmail(event.target.value) & setloadStage("3")
                  }
                  value={loadedEmail}
                  name="loadedEmail"
                  style={{ position: "relative", width: "90%" }}
                />
                <br />
                UserMeta:
                <input
                  onChange={() =>
                    setloadedUserMeta(event.target.value) & setloadStage("3")
                  }
                  value={loadedUserMeta}
                  name="loadedUserMeta"
                  style={{ position: "relative", width: "90%" }}
                />
                <br />
              </small>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}
export default UserQueryComponent;
