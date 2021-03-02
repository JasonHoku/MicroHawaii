import React, { Component, Fragment, useState, useEffect, useRef } from "react";
import { Route } from "react-router-dom";
import LandingPage from "../../../Pages/home";
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
} from "reactstrap";
import CKEditor from "ckeditor4-react";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

function ContentManagerComponent() {
  const [url, setURL] = useState("");
  const isInitialMount = useRef(true);
  const [noteVar, setnoteVar] = useState("");
  const [textVar2, settextVar2] = useState("Select an Instance To Begin");
  const [textVar, settextVar] = useState("Select an Instance To Begin");
  const [statusVar, setstatusVar] = useState("Viewing HomePage Data");
  const [onlineButton, setonlineButton] = useState("Go Online");
  const [purgeButton, setpurgeButton] = useState("Clear Old Instances");
  const [proStatusText, setproStatusText] = useState("Loading...");
  const [selectByIDVar, setselectByIDVar] = useState("0");
  const [loadedImgURL, setloadedImgURL] = useState("");
  const [readyImgURL, setreadyImgURL] = useState("");
  const [loadedDescription, setloadedDescription] = useState("");
  const [editedDescription, seteditedDescription] = useState("");
  const [loadedLocationData, setloadedLocationData] = useState("");
  const [getDataEZID, setgetDataEZID] = useState("");
  const [ChangeImageURLVar, setChangeImageURLVar] = useState("");
  const [loadedCreatorData, setloadedCreatorData] = useState("");
  const [loadedGMapCoords, setloadedGMapCoords] = useState("");
  const [loadedTitle, setloadedTitle] = useState("");
  const [loadedEvents, setloadedEvents] = useState([]);
  const [loadedEventIDs, setloadedEventIDs] = useState("");
  const [loadedPublic, setloadedPublic] = useState("");
  const [loadedIDData, setloadedIDData] = useState("");
  const [loadStage, setloadStage] = useState("1");
  const [loadedTitleData, setloadedTitleData] = useState("");

  const [hasReceivedImgURL, sethasReceivedImgURL] = useState(false);
  const [readyCreator, setreadyCreator] = useState("");
  const [readyTitle, setreadyTitle] = useState("");
  const [readyDescription, setreadyDescription] = useState("");
  const [readyID, setreadyID] = useState("");
  const [readyPublic, setreadyPublic] = useState("");
  const [loadedEzID, setloadedEzID] = useState("1");
  const [loadedTotalIDs, setloadedTotalIDs] = useState("1");
  const [gotDownloadURL, setgotDownloadURL] = useState(
    "Upload An Image To Embed"
  );
  const [categoryVar, setcategoryVar] = useState("HomePage");
  const [isLoadedOnce, setisLoadedOnce] = useState("1");
  const [file, setFile] = useState(null);

  function handleInputChangeEvent(event) {
    setState({
      [event.target.name]: event.target.value,
    });
  }


  useEffect(() => {
    if (isInitialMount.current === true) {
      console.log("Updating, Stage: " + loadStage);
      if (loadStage === "1") {
        setloadStage("2");
      }
      if (loadStage === "2") {
        setloadStage("3");
      }
      if (loadStage === "3") {
        setloadStage("4");
      }
      if (loadStage === "4") {
        console.log();
        console.log("Finished Loading!");
      }
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

  function runLinkCreation() {
    data.forEach((data) => {
      console.log(data);
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
      <Card>
        <CardBody
          style={{
            justifyContent: "center",
            justifyItems: "center",
            textAlign: "center",
            marginLeft: "-10px",
            marginRight: "-10px",
          }}
        >
          <h4 style={{ width: "100%", textAlign: "left" }}>
            <b>&nbsp;Content&nbsp;Manager</b>
          </h4>
          <span>
            <Button
              color="primary"
              onClick={() =>
                setcategoryVar("HomePage") &
                setloadStage("1") &
                setloadedEzID("1")
              }
            >
              HomePage
            </Button>{" "}
            &nbsp;
            <Button
              color="primary"
              onClick={() =>
                setcategoryVar("AboutPage") &
                setloadStage("1") &
                setloadedEzID("1")
              }
            >
              AboutPage
            </Button>{" "}
            &nbsp;
            <Button
              color="primary"
              onClick={() =>
                setcategoryVar("EventsPage") &
                setloadStage("1") &
                setloadedEzID("1")
              }
            >
              EventsPage
            </Button>
            &nbsp;
            <Button color="danger" onClick={() => runLinkCreation()}>
              CreateLink
            </Button>
          </span>
          <h2>{statusVar}</h2>
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
              setloadedEzID(parseInt(loadedEzID) - 1) & setloadStage("1")
            }
          >
            ←
          </Button>{" "}
          &nbsp;
          <Button
            color="primary"
            onClick={() =>
              setloadedEzID(parseInt(loadedEzID) + 1) & setloadStage("1")
            }
          >
            →
          </Button>{" "}
          &nbsp;
          <Button
            color="success"
            onClick={() => runSendData() & setloadStage("1")}
          >
            Save
          </Button>{" "}
          &nbsp;
          <Button
            color="secondary"
            onClick={() =>
              setloadedEzID(parseInt(loadedTotalIDs) + 1) &
              setloadStage("2") &
              seteditedDescription("") &
              setloadedDescription("")
            }
          >
            New
          </Button>{" "}
          &nbsp;
          <Button
            color="danger"
            onClick={() =>
              runDeleteData() & setloadedEzID(1) & setloadStage("2")
            }
          >
            Delete
          </Button>
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
              <CardHeader>Content View:</CardHeader>{" "}
            </div>{" "}
            <small>
              <div
                className="listingExample"
                dangerouslySetInnerHTML={{
                  __html: editedDescription,
                }}
              />
            </small>
          </div>
          &nbsp;
          <br />
          <div
            style={{
              width: "100%",
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
              textAlign: "center",
            }}
          >
            <CardHeader>Content Editor Tools:</CardHeader>{" "}
            <CKEditor onChange={onEditorChange} data={loadedDescription} />{" "}
            <br />{" "}
          </div>
          <br />
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            }}
          >
            <b> Upload An Image:</b> <br />
            <form
              role="imgForm"
              name="imgForm"
              id="imgForm"
              onSubmit={handleUpload}
            >
              <input type="file" onChange={handleChange} />
              <Button
                hidden={!file}
                fill="true"
                color="primary"
                disabled={!file}
                style={{
                  alignSelf: "center",
                  justifySelf: "center",
                  display: "block",
                  position: "relative",
                  width: "55%",
                }}
                type="submit"
              >
                <h5 style={{ position: "relative", top: "-2px" }}>
                  Upload Image
                </h5>
              </Button>{" "}
            </form>
            <img
              hidden={!hasReceivedImgURL}
              style={{ maxWidth: "100%" }}
              src={url}
              alt=""
            />
            <input
              disabled={true}
              hidden={!hasReceivedImgURL}
              type="text"
              value={loadedImgURL}
              id="copyImgURLElement"
            />{" "}
            &nbsp;
            <div hidden={!hasReceivedImgURL} className="tooltip2">
              <button onClick={() => copyImgURL()} onMouseOut={() => outFunc()}>
                <span className="tooltip2text" id="myTooltip">
                  Copy to clipboard
                </span>
                Copy text
              </button>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fragment>
  );
}
export default ContentManagerComponent;
