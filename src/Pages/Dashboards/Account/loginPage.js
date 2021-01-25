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

import gql from "graphql-tag";
import React, { Component, Fragment } from "react";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  CardTitle,
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
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

const backendUrl = process.env.REACT_APP_BACKEND_URL;

export default class LoginPageElements extends Component {
  constructor(props) {
    super(props);
    this.submitContact = this.submitContact.bind(this);
    this.gqlCreate = this.gqlCreate.bind(this);
    this.gqlLogin = this.gqlLogin.bind(this);
    this.state = {
      formName: "",
      formEmail: "",
      signFormUser: "",
      signFormPass: "",
      signFormEmail: "",
      formMessage: "",
      login: true, // switch between Login and SignUp
      email: "",
      password: "",
      name: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  submitContact() {
    let { formName, formEmail, formMessage } = this.state;

    if (formName.length !== null && formName.length < 1) {
      alert("You must fill this form entirely.");
    } else {
    }
  }
  gqlCreate() {
    if (this.state.signFormUser.toString().length < 5) {
      alert("Username must be 6+ character");
    }
    if (this.state.signFormEmail.toString().length < 5) {
      alert("Email must be 6+ character");
    }
    if (this.state.signFormPass.toString().length < 5) {
      alert("Password must be 6+ character");
    }
    try {
      const axios = require("axios");
      axios({
        url: `${backendUrl}/auth/local/register`,
        method: "post",
        headers: {
          "content-type": "application/json",
        },

        data: {
          username: this.state.signFormUser,
          email: this.state.signFormEmail,
          password: this.state.signFormPass,
        },
      })
        .then((result) => {
          try {
            console.log(result);
            if (result.data.errors) {
              alert(`Sign-Up Failed: \r\n
          Username or Email Taken \r\ `);
            } else {
              localStorage.setItem("jwt", result.data.jwt);
              localStorage.setItem("username", this.state.signFormUser);
              window.location.reload();
            }
          } catch (error) {
            console.log(error);
            alert("1");
          }
        })
        .catch((error) => {
          // your error handling goes here}
          alert(`Sign-Up Failed: \r\n
          Username or Email Taken \r\ `);
        });
    } catch (error) {
      console.log(error);
      alert("3");
    }
  }
  gqlLogin() {
    try {
      const axios = require("axios");
      axios({
        url: `${backendUrl}/auth/local`,
        method: "post",
        data: {
          identifier: this.state.signFormUser,
          password: this.state.signFormPass,
        },
      })
        .then((result) => {
          console.log(result);
          if (result.data.errors) {
            alert("Invalid User/Pass");
          }
        })
        .catch((error) => {
          alert("Invalid User/Pass");
        });
    } catch (error) {}
  }
  render() {
    let { formName, formEmail, formMessage } = this.state;
    const { data } = this.state;

    return (
      <Fragment>
        <Container fluid>
          <Row
            style={{
              width: "100%",
              justifyContent: "center",
              alignContent: "center",
              width: "100%",
              alignItems: "center",
            }}
          >
            <Card
              style={{
                width: "23rem",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              }}
            >
              <CardHeader>MicroHawaii Login</CardHeader>
              <CardBody
                style={{
                  backgroundColor: "#CCCCCCC",
                }}
              >
                <h5>
                  Register with MicroHawaii to get access to MicroHawaii
                  features.
                </h5>
                Please sign in to become authenticated.
              </CardBody>
              <CardBody hidden id="signUp">
                <span className="centerInput">
                  Username:{" "}
                  <Input
                    name="signFormUser"
                    id="signFormUser"
                    value={this.state.signFormUser}
                    onChange={this.handleInputChange}
                  ></Input>
                  <br /> Password:&nbsp;&nbsp;
                  <Input
                    name="signFormPass"
                    id="signFormPass"
                    value={this.state.signFormPass}
                    onChange={this.handleInputChange}
                    type="password"
                  ></Input>
                  <br /> E-Mail:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                  <Input
                    name="signFormEmail"
                    id="signFormEmail"
                    value={this.state.signFormEmail}
                    onChange={this.handleInputChange}
                    type="email"
                  ></Input>
                  <br />
                </span>
              </CardBody>
              <CardBody hidden id="signUp2">
                <span className="centerInput">
                  Username:{" "}
                  <Input
                    name="signFormUser"
                    id="signFormUser"
                    value={this.state.signFormUser}
                    onChange={this.handleInputChange}
                  ></Input>
                  <br /> Password:&nbsp;&nbsp;
                  <Input
                    name="signFormPass"
                    id="signFormPass"
                    value={this.state.signFormPass}
                    onChange={this.handleInputChange}
                    type="password"
                  ></Input> </span>
              </CardBody>
              <CardBody
                style={{
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  backgroundColor: "#3333CC",
                }}
              >
                <p>
                  &nbsp; &nbsp; &nbsp;
                  <Button
                    onClick={() => this.gqlCreate()}
                    hidden
                    id="signUpConfirm"
                    className="zoom"
                    style={{
                      width: "125px",
                      backgroundColor: "#333333",
                      height: "60px",
                      alignSelf: "center",
                      fontSize: "15px",
                    }}
                  >
                    <i className="fa fa-newspaper-o btn-icon-wrapper"></i>
                    &nbsp; Create
                  </Button>
                  <Button
                    onClick={() => this.gqlLogin()}
                    hidden
                    id="signInConfirm"
                    className="zoom"
                    style={{
                      width: "125px",
                      backgroundColor: "#333333",
                      height: "60px",
                      alignSelf: "center",
                      fontSize: "15px",
                    }}
                  >
                    <i className="fa fa-newspaper-o btn-icon-wrapper"></i>
                    &nbsp; Login
                  </Button>
                  <a
                    onClick={() => (
                      (document.getElementById("signUp2").hidden = false),
                      (document.getElementById("signIn").hidden = true),
                      (document.getElementById("signUpPre").hidden = true),
                      (document.getElementById("signInBack").hidden = false),
                      (document.getElementById("signInConfirm").hidden = false)
                    )}
                  >
                    <Button
                      id="signIn"
                      className="zoom"
                      style={{
                        width: "125px",
                        backgroundColor: "#333333",
                        height: "60px",
                        alignSelf: "center",
                        fontSize: "15px",
                      }}
                    >
                      <i className="fa fa-newspaper-o btn-icon-wrapper"></i>
                      &nbsp; Sign-In
                    </Button>
                  </a>
                  &nbsp; &nbsp; &nbsp; &nbsp;
                  <a
                    onClick={() => (
                      (document.getElementById("signUp").hidden = false),
                      (document.getElementById("signIn").hidden = true),
                      (document.getElementById("signUpPre").hidden = true),
                      (document.getElementById("signUpBack").hidden = false),
                      (document.getElementById("signUpConfirm").hidden = false)
                    )}
                  >
                    <Button
                      className="zoom"
                      id="signUpPre"
                      style={{
                        width: "125px",
                        backgroundColor: "#333333",
                        height: "60px",
                        alignSelf: "center",
                        fontSize: "15px",
                      }}
                    >
                      <i className="fa fa-newspaper-o btn-icon-wrapper"></i>
                      &nbsp; Sign-Up
                    </Button>{" "}
                  </a>
                  <a
                    onClick={() => (
                      (document.getElementById("signUp").hidden = true),
                      (document.getElementById("signIn").hidden = false),
                      (document.getElementById("signUpPre").hidden = false),
                      (document.getElementById("signUpBack").hidden = true),
                      (document.getElementById("signUpConfirm").hidden = true)
                    )}
                  >
                    <Button
                      hidden
                      className="zoom "
                      id="signUpBack"
                      style={{
                        width: "125px",
                        backgroundColor: "#333333",
                        height: "60px",
                        alignSelf: "center",
                        fontSize: "15px",
                      }}
                    >
                      <i className="fa fa-newspaper-o btn-icon-wrapper"></i>
                      &nbsp; Back
                    </Button>
                  </a>
                  <a
                    onClick={() => (
                      (document.getElementById("signUp2").hidden = true),
                      (document.getElementById("signIn").hidden = false),
                      (document.getElementById("signUpPre").hidden = false),
                      (document.getElementById("signInBack").hidden = true),
                      (document.getElementById("signInConfirm").hidden = true)
                    )}
                  >
                    <Button
                      hidden
                      className="zoom "
                      id="signInBack"
                      style={{
                        width: "125px",
                        backgroundColor: "#333333",
                        height: "60px",
                        alignSelf: "center",
                        fontSize: "15px",
                      }}
                    >
                      <i className="fa fa-newspaper-o btn-icon-wrapper"></i>
                      &nbsp; Back
                    </Button>
                  </a>
                </p>
              </CardBody>
            </Card>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
