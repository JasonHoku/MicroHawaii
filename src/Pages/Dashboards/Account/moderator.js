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

import TextareaAutosize from "react-textarea-autosize";
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
    ponoMaps {
      id
      User
      data1
      created_at
      User
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

export default class ModeratorElements extends Component {
  constructor(props) {
    super(props);
    this.setMutation = this.setMutation.bind(this);
    this.state = {
      formName: [],
      formEmail: "",
      formMessage: "",
      MY_QUERY_COPY_QUERY: gql`
        query MyQueryCopy {
          ponoMaps {
            id
            User
            data1
            created_at
            User
          }
        }
      `,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

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
      formName: event.target.value,
    });
  }

  setMutation() {
    let { formName, formEmail, formMessage } = this.state;

    if (formName.length !== null) {
      formName = document.getElementById("formName");
    } else {
      formName = document.getElementById("formName");
    }
  }

  render() {
    let { formName, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
mutation MyMutation {
  createPonoMap(
    input: {
      data: {
        User: "${formName}"
      }
    }
  ) {
    ponoMap {
      id
      
    }
  }
}
`;

    const MyMutationMutation = (props) => {
      return (
        <Mutation mutation={MY_MUTATION_MUTATION}>
          {(MyMutation, { loading, error, data }) => {
            if (loading) return <pre>Loading</pre>;
            if (error) {
              alert("That username is taken");
              window.location.reload();
            } else if (error)
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
              <span>
                {dataEl}

                <button disabled onClick={() => MyMutation(this.state.formName)}>
                  Add Data
                </button>
              </span>
            );
          }}
        </Mutation>
      );
    };
    return (
      <Fragment>
        <Container fluid>
          <ApolloProvider client={apolloClient}>
            <Row>
              <Col width="23rem">
                {" "}
                <Card
                  style={{
                    width: "26rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  {" "}
                  <MyQueryCopyQuery />
                </Card>
              </Col>{" "}
              <Col>
                {" "}
                <Card
                  style={{
                    width: "26rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    alignContent: "center",
                    height: "100%",
                    alignItems: "center",
                  }}
                >
                  <br />
                  <Form onSubmit={this.setMutation()}>
                    <br />
                    <Input></Input>
                    <Button>Approve Data #</Button>
                    <br />
                    <br />
                    <Input></Input>
                    <Button>Reject Data #</Button>
                    <br />
                    <br />
                    <Input type="textarea"></Input>
                    <Button>Set HomePage Article Data</Button>
                    <br />
                    <br />
                    <Input type="textarea"></Input>
                    <Button>Set Page2 Article Data</Button>
                    <br />
                    <br />
                    <Input
                      value={this.state.formName}
                      onChange={this.handleInputChange}
                      type="textarea"
                    ></Input>
                    <MyMutationMutation></MyMutationMutation>
                    <br />
                    <br />
                  </Form>{" "}
                </Card>
              </Col>
            </Row>

            <br />
            <br />
            <Row style={{ justifyContent: "center" }}>
              {" "}
              <Col>
                {" "}
                <Card
                  style={{
                    width: "26rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    alignContent: "center",
                    alignItems: "center",
                  }}
                >
                  <CardHeader> PonoMap Large File Uploader</CardHeader>
                  <CardBody>
                    {" "}
                    <p>
                      {" "}
                      For ease with numerous files, .zip archive them before
                      uploading.
                    </p>
                    <p>
                      Larger files or slow internet connections may take some
                      time.
                    </p>
                  </CardBody>
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
              </Col>
              <Col>
                {" "}
                <Card
                  style={{
                    alignSelf: "center",
                    width: "28rem",
                  }}
                >
                  <CardHeader> Registered User View:</CardHeader>
                  <CardBody>
                    <AccountElements />
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </ApolloProvider>
        </Container>
      </Fragment>
    );
  }
}
