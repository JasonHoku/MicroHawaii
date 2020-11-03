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
    this.state = {
      formName: "",
      formEmail: "",
      formMessage: "",
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

  render() {
    let { formName, formEmail, formMessage } = this.state;
    const { data } = this.state;

    return (
      <Fragment>
        <Container fluid>
<Row>
                  <Card
                style={{
                  width: "26rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                }}
              >
                <CardHeader>microHawaii Account Tools</CardHeader>
                <CardBody>
                  <p>
                    This page is currently home to microHawaii's web development team tools.
                  </p>
                  <p> Please sign in to confirm authentication.</p>
                </CardBody>
              </Card></Row> <br /> <br />
              <Row> 
                  <Card
                style={{
                  width: "16rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  alignContent: "center",
                  alignItems:"center"
                }}
              >
                <CardHeader>Sign-In to microHawaii.</CardHeader>
                <CardBody>
                  <p>
                  <a href={`${backendUrl}/connect/google`}>
          <Button
            className="btn-icon-horizontal btn-transition app-header-right"
            outline
            color="dark"
          >
            <i className="fa fa-newspaper-o btn-icon-wrapper"></i>&nbsp; Sign-In
          </Button>
        </a>
                  </p>
                </CardBody>
              </Card></Row>
        </Container>
      </Fragment>
    );
  }
}
