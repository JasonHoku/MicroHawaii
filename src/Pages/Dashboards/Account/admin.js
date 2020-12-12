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

import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache, HttpLink } from "apollo-boost";
import { Query, ApolloProvider, Mutation } from "react-apollo";
import { gql, useQuery } from "@apollo/client";
import axios from "axios";

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

// This setup is only needed once per application;
const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: "https://api.ponomap.com/graphql",
    headers: {
      "content-type": "application/json",
    },
  }),
});

const MY_QUERY_COPY_QUERY = gql`
  query MyQueryCopy {
    microHawaiis {
      id
    }
  }
`;

const MyQueryCopyQuery = (props) => {
  return (
    <Query query={MY_QUERY_COPY_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <pre>Loading</pre>;
        if (error)
          return (
            <pre>
              Error in MY_QUERY_COPY_QUERY
              {JSON.stringify(error, null, 2)}
            </pre>
          );

        if (data) {
          return <pre>{JSON.stringify(data, null, 2)}</pre>;
        }
      }}
    </Query>
  );
};

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

    const formData = new FormData();
    if (this.state.images != null) {
      var form = document.getElementById("apiupform");
      document.getElementById("apiupform").hidden = true;
      Array.from(this.state.images).forEach((image) => {
        formData.append("files", image);
      });

      axios
        .post(`https://upload.microhawaii.com/uploadfiles/`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((res) => {
          if (res.err == null) {
            alert("Success!");
            document.getElementById("apiupform").hidden = false;
          }
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
    let { formName, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
  mutation MyMutation {
    insert_microHawaii(objects: {email: "${formName}"}) {
      affected_rows
    }
  }
`;

    const MyMutationMutation = (props) => {
      return (
        <Mutation mutation={MY_MUTATION_MUTATION}>
          {(MyMutation, { loading, error, data }) => {
            if (loading) return <pre>Loading</pre>;

            if (error)
              return (
                <pre>
                  Error in MY_MUTATION_MUTATION
                  {JSON.stringify(error, null, 2)}
                </pre>
              );

            const dataEl = data ? (
              <pre>{JSON.stringify(data, null, 2)}</pre>
            ) : null;

            return (
              <div>
                <br />
                {dataEl}

                <button onClick={() => MyMutation(formName)} disabled>
                  Query
                </button>
              </div>
            );
          }}
        </Mutation>
      );
    };
    return (
      <Fragment>
        <Container fluid>
          <ApolloProvider client={apolloClient}>
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
                          Larger files or slow internet connections may take
                          some time.
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
          </ApolloProvider>
        </Container>
      </Fragment>
    );
  }
}
