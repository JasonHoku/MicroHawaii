import React, { Component, Fragment, useState, useEffect, useRef } from "react";

import ReactDOM from "react-dom";
import {
  Row,
  ListGroupItem,
  Card,
  CardBody,
  Container,
  Input,
  FormText,
} from "reactstrap";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import { useAuthState } from "react-firebase-hooks/auth";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useDocument } from "react-firebase-hooks/firestore";

import "./chat.css";

import { toast } from "react-toastify";

import RatingComponent from "./RatingComponent";

import { register } from "../../../serviceWorker";

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

function DiscordJSComponent() {
  const firestore = firebase.firestore();

  const query = firestore.doc(`Secrets/${auth.currentUser.uid}`);

  const [docValue, docLoading, docError] = useDocument(query);

  const dataRef = firestore.collection("Secrets");

  const [loadStage, setloadStage] = useState("1");

  function checkSecretKey() {
    const { WebhookClient, MessageEmbed } = require("discord.js");

    const webhook = new WebhookClient(
      "id",
      "token"
    );
    const embed = new MessageEmbed()
      .setTitle("Automated Discord Sharing")
      .setColor("#FFddff");

    webhook
      .send("Webhook test 2", {
        username: "MicroHawaii.Com",
        avatarURL: "https://MicroHawaii.Com/logo.png",
        embeds: [embed],
      })
      .catch(console.error);
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
          <button onClick={() => checkSecretKey()}>
            Post To Discord Channel
          </button>
          &nbsp;
          <h4 style={{ width: "100%", textAlign: "left" }}>
            <b>&nbsp;SiteChat</b>
          </h4>
          <section></section>
        </CardBody>
      </Card>
      <br />
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

export default DiscordJSComponent;
