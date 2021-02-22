import React, { Component, Fragment, useState, useEffect, useRef } from "react";

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

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE,
  authDomain: "raymauiyoga-d75b1.firebaseapp.com",
  projectId: "raymauiyoga-d75b1",
  storageBucket: "raymauiyoga-d75b1.appspot.com",
  messagingSenderId: "313463385446",
  appId: "1:313463385446:web:7d2d2fd362f03913802ca7",
  measurementId: "G-S8EJTRMN63",
};
function CheckVersions() {
  const [url, setURL] = useState("");
  const [noteVar, setnoteVar] = useState("");
  const [textVar2, settextVar2] = useState("Select an Instance To Begin");
  const [textVar, settextVar] = useState("Select an Instance To Begin");
  const [statusVar, setstatusVar] = useState("Loading..");
  const [onlineButton, setonlineButton] = useState("Go Online");
  const [purgeButton, setpurgeButton] = useState("Clear Old Instances");
  const [selectByIDVar, setselectByIDVar] = useState("0");
  const [loadedImgURL, setloadedImgURL] = useState("");
  const [loadedDescription, setloadedDescription] = useState("");
  const [editedDescription, seteditedDescription] = useState("");
  const [loadedLocationData, setloadedLocationData] = useState("");
  const [getDataEZID, setgetDataEZID] = useState("");
  const [ChangeImageURLVar, setChangeImageURLVar] = useState("");
  const [loadedCreatorData, setloadedCreatorData] = useState("");
  const [loadedGMapCoords, setloadedGMapCoords] = useState("");
  const [loadedCategory, setloadedCategory] = useState("");
  const [loadedPublic, setloadedPublic] = useState("");
  const [loadedIDData, setloadedIDData] = useState("");
  const [loadStage, setloadStage] = useState("1");
  const [loadedTitleData, setloadedTitleData] = useState("");
  const [sendReadyCreator, setsendReadyCreator] = useState("");
  const [sendReadyCategory, setsendReadyCategory] = useState("");
  const [sendReadyDescription, setsendReadyDescription] = useState("");
  const [sendReadyGMapCoords, setsendReadyGMapCoords] = useState("");
  const [sendReadyLocation, setsendReadyLocation] = useState("");
  const [sendReadyID, setsendReadyID] = useState("");
  const [sendReadyPublic, setsendReadyPublic] = useState("");
  const [sendReadyTitle, setsendReadyTitle] = useState("");
  const [loadedEzID, setloadedEzID] = useState("1");
  const [loadedTotalIDs, setloadedTotalIDs] = useState("1");
  const [loadedAnswerData, setloadedAnswerData] = useState("");
  const [loadedQuestionData, setloadedQuestionData] = useState("");
  const [loadedFlowData, setloadedFlowData] = useState("");

  const [isLoadedOnce, setisLoadedOnce] = useState("1");
  const [hasReceivedImgURL, sethasReceivedImgURL] = useState(false);
  const [loadedSnapshotData, setloadedSnapshotData] = useState("");
  const [loadedSnapshotDataIDs, setloadedSnapshotDataIDs] = useState("");

  const [readyQuestionAnswer, setreadyQuestionAnswer] = useState("");
  const [readyQuestionScore, setreadyQuestionScore] = useState(0);
  const [readyNextQuestionFlow, setreadyNextQuestionFlow] = useState("");
  const [
    readyQuestionScorePossibleTotal,
    setreadyQuestionScorePossibleTotal,
  ] = useState("Loading...");

  const [ToggleYesAnswerInput, setToggleYesAnswerInput] = useState(false);
  const [ToggleNoAnswerInput, setToggleNoAnswerInput] = useState(false);
  const [ToggleNAAnswerInput, setToggleNAAnswerInput] = useState(false);

  const [file, setFile] = useState(null);

  const [gotDownloadURL, setgotDownloadURL] = useState("Upload An Image");

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE,
    authDomain: "ponomap-c8faa.firebaseapp.com",
    projectId: "ponomap-c8faa",
    storageBucket: "ponomap-c8faa.appspot.com",
    messagingSenderId: "913918067006",
    appId: "1:913918067006:web:e94012e765578331cbec6f",
    measurementId: "G-E2P5QYL5V1",
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  useEffect(() => {
    let concData = [];
    let concData2 = [];
    let concData3 = [];
    console.log("Updating, Stage: " + loadStage);
    if (loadStage === "1") {
      setreadyNextQuestionFlow("");
      const loadsnapshot = async () => {
        let concData = [];
        let concData2 = [];
        const snapshot = await firebase.firestore().collection("version").get();
        snapshot.forEach(async function (doc) {
          concData = concData.concat(doc.data());
          concData2 = concData2.concat(doc.id);
        });
        setloadedSnapshotData(concData);
        setloadedSnapshotDataIDs(concData2);
      };
      loadsnapshot().then(async () => {
        if (loadedSnapshotData != "") {
          setloadStage("2");
        }
      });
      setisLoadedOnce("2");
    }

    if (loadStage === "2") {
      try {
        setisLoadedOnce("1");
        console.log(loadedSnapshotData);
        console.log(loadedSnapshotDataIDs);
        setloadedTotalIDs(loadedSnapshotData.length) &
          setloadedQuestionData(loadedSnapshotData[loadedEzID - 1].Question);
      } catch (error) {}
      if (loadStage === "3") {
        setloadStage("4");
      }
      if (loadStage === "4") {
        console.log("Finished Loading!");
      }
    }
  });
  return null;
}
export default CheckVersions;
