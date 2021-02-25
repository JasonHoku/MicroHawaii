import React, { Component, Fragment, useEffect, useState } from "react";
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
import { toInteger } from "lodash";
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.microhawaii.com/graphql",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }),
});

class NoteManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteVar: "",
      textVar2: "Select an Instance To Begin",
      statusVar: "Offline",
      onlineButton: "Go Online",
      purgeButton: "Clear Old Instances",
      deleteIDVar: "0",
      loadedUserMessage: "",
      loadedAdminMessage: "",
      getDataEZID: "",
    };
    this.runGetLive = this.runGetLive.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleInputChange(event) {
    this.setState({
      noteVar: String(event.target.value).replace(/(\r\n|\n|\r)/gm, ""),
    });
  }
  handleInputChange2(event) {
    this.setState({
      deleteIDVar: event.target.value,
    });
  }

  onImageChange = (event) => {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  };

  render() {
    return (
      <Fragment>
        <CardHeader
          style={{
            marginBottom: "-10px",
            backgroundColor: "transparent",
          }}
        >
          {" "}
          <h2>Live&nbsp;Chat&nbsp;Manager</h2> <br />
        </CardHeader>
        <h2>Status:&nbsp;{this.state.statusVar}</h2>
        <CardHeader
          style={{
            marginBottom: "-25px",
            backgroundColor: "transparent",
          }}
        >
          <Button
            color="primary"
            onClick={() =>
              this.setState({
                statusVar: "Online Set",
                onlineButton: "Return Offline",
              })
            }
          >
            {this.state.onlineButton}
          </Button>
          &nbsp;
          <Button color="primary" onClick={() => this.purgeOldChats()}>
            {this.state.purgeButton}
          </Button>
          &nbsp;
        </CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <p> {this.state.textVar2}</p> <br />
            <Row>
              <Col style={{ width: "50%" }}>
                {this.state.loadedUserMessage
                  .replace(/xyzVar/g, "\r\n")
                  .split("\r\n")
                  .map((str, index) => (
                    <h5 key={index}>{str}</h5>
                  ))}
              </Col>
              <Col style={{ width: "50%" }}>
                {this.state.loadedAdminMessage
                  .replace(/xyzVar/g, "\r\n")
                  .split("\r\n")
                  .map((str, index) => (
                    <h5 key={index}>{str}</h5>
                  ))}
              </Col>
              <Row style={{ width: "100%" }}></Row>
              <Col>
                <b>User</b>:
              </Col>{" "}
              <Col>
                <b>Admin</b>
              </Col>
            </Row>
          </div>
          <br />
          <input
            type="number"
            onChange={() => this.handleInputChange2(event)}
            style={{ width: "75px" }}
          ></input>{" "}
          &nbsp;
          <br />
          <Input
            value={this.state.noteVar}
            name="NoteVar"
            id="NoteVar"
            onChange={() => this.handleInputChange(event)}
            style={{ top: "15px", position: "relative" }}
            type="textarea"
          ></Input>{" "}
          &nbsp;
          <br />
          <br />{" "}
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            }}
          >
            {this.state.textVar}
          </div>
        </CardBody>
        <br />
      </Fragment>
    );
  }
}
export default NoteManagerComponent;
