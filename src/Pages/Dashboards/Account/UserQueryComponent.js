import React, { Component, Fragment, useEffect } from "react";
import { compose, graphql } from "react-apollo";

import axios from "axios";
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

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";
import {
  FirestoreProvider,
  FirestoreCollection,
  FirestoreDocument,
  FirestoreMutation,
} from "@react-firebase/firestore";


var firebaseConfig = process.env.REACT_APP_FIREBASE;

class UserQueryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authVar: this.props.authVar,
      textVar: "",
      activeIDStatus: "Status: Viewing All",
    };
  }
  render() {
    return (
      <Fragment>
        <Card>
          <CardBody>
            <button
              style={{
                backgroundColor: "#335599",
                height: "40px",
                alignSelf: "center",
                borderRadius: "10px",
                marginBottom: "5px",
                fontSize: "15px",
              }}
              onClick={() => alert("coming soon")}
            >
              Email All
            </button>
            <br />
            <input
              style={{ textAlign: "center" }}
              placeholder={this.state.activeIDStatus}
            ></input>
            <br />
            &nbsp;
            <button
              style={{
                backgroundColor: "#335599",
                height: "40px",
                alignSelf: "center",
                borderRadius: "10px",
                fontSize: "15px",
              }}
              onClick={() => alert("coming soon")}
            >
              Change Powerlevel
            </button>{" "}
            &nbsp;
            <button
              style={{
                backgroundColor: "#993333",
                height: "40px",
                alignSelf: "center",
                borderRadius: "10px",
                fontSize: "15px",
              }}
              onClick={() => alert("coming soon")}
            >
              Ban User
            </button>
            &nbsp;
            <FirestoreProvider {...firebaseConfig} firebase={firebase}>
              <FirestoreCollection path={`/users/`}>
                {(d) => {
                  if (d) {
                    return d.isLoading ? (
                      "Loading"
                    ) : (
                      <pre>
                        {" "}
                        {localStorage.setItem(
                          "activeID2",
                          String(JSON.stringify(d.value))
                        )}
                        <div style={{ maxWidth: "350px" }}>
                          <h4>
                            {String(JSON.stringify(d.value))
                              .replace(/("|{|]|\[|\\|\/])/gm, "")
                              .replace(/(,)/gm, "\r\n ")
                              .replace(/(})/gm, "\r\n ")}
                          </h4>
                          {localStorage.setItem(
                            "ActiveUserCount",
                            d.value.length
                          )}
                        </div>
                      </pre>
                    );
                  }
                }}
              </FirestoreCollection>
            </FirestoreProvider>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
}
export default UserQueryComponent;
