
import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";


import classnames from "classnames";

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
  TabContent,
  TabPane,
  NavLink,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import { faAlignCenter } from "@fortawesome/free-solid-svg-icons";
import { relative } from "path";
import ModeratorElements from "./moderator";
import AccountElements from "./account";

export default class AdminElements extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.submitContact = this.submitContact.bind(this);
    this.state = {
      formName: "",
      formEmail: "",
      formMessage: "",
      activeTab: "1",
      showMore: true,
      transform: true,
      showInkBar: true,
      selectedTabKey: 0,
      transformWidth: 400,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onChangeProp = (propsName) => (evt) => {
    this.setState({
      [propsName]:
        evt.target.type === "checkbox" ? evt.target.checked : +evt.target.value,
    });
  };

  onImageChange = (event) => {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

  };
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
      console.log("success");
    }
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Card className="main-card mb-3">
            <CardHeader>
              <i className="header-icon pe-7s-tools icon-gradient bg-plum-plate">
                {" "}
              </i>
              Admin Omni-Panel
              <div
                className="btn-actions-pane-right"
                style={{
                  display: "flex",
                  alignItems: "center",
                  width: "60%",
                }}
              >
                <Button
                  size="sm"
                  outline
                  color="alternate"
                  className={
                    "btn-pill btn-wide " +
                    classnames({ active: this.state.activeTab === "1" })
                  }
                  onClick={() => {
                    this.toggle("1");
                  }}
                >
                  Admin
                </Button>
                <Button
                  size="sm"
                  outline
                  color="alternate"
                  className={
                    "btn-pill btn-wide mr-1 ml-1 " +
                    classnames({ active: this.state.activeTab === "2" })
                  }
                  onClick={() => {
                    this.toggle("2");
                  }}
                >
                  Moderator
                </Button>
                <Button
                  size="sm"
                  outline
                  color="alternate"
                  className={
                    "btn-pill btn-wide " +
                    classnames({ active: this.state.activeTab === "3" })
                  }
                  onClick={() => {
                    this.toggle("3");
                  }}
                >
                  Registered
                </Button>
              </div>
            </CardHeader>
            <CardBody>
              <TabContent activeTab={this.state.activeTab}>
                <TabPane tabId="1">
                  <Card
                    style={{
                      width: "100%",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      alignContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <CardHeader> PonoMap Large File Uploader</CardHeader>
                    <CardBody>
                      <p>
                        For ease with numerous files, .zip archive them before
                        uploading.
                      </p>
                      <p>
                        Larger files or slow internet connections may take some
                        time.
                      </p>
                    </CardBody>{" "}
                    <div className="App">
                      <br />
                      <Form onSubmit={this.onSubmit}>
                        File Upload:<br></br>{" "}
                        <Input
                          type="file"
                          enctype="multipart/form-data"
                          name="apiup"
                          id="apiupform"
                          onChange={this.onImageChange}
                          alt="image"
                        />
                        <br />
                        <br />
                        <div>
                          <Button
                            style={{
                              alignSelf: "center",
                              display: "block",
                              position: "relative",
                              width: "100%",
                            }}
                            type="submit"
                          >
                            Send
                          </Button>
                        </div>
                      </Form>
                      <br />
                    </div>
                  </Card>
                </TabPane>
                <TabPane tabId="2">
                  <ModeratorElements />
                </TabPane>
                <TabPane tabId="3">
                  <AccountElements />
                </TabPane>
              </TabContent>
            </CardBody>
          </Card>{" "}
        </Container>
      </Fragment>
    );
  }
}
