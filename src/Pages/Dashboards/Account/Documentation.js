import React, { Component, Fragment, useEffect } from "react";
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

class DocumentationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteVar: "",
      textVar2: "Select an Instance ",
      deleteIDVar: "26",
    };
  }

  handleInputChange(event) {
    this.setState({
      noteVar: event.target.value,
    });
  }
  handleInputChange2(event) {
    this.setState({
      deleteIDVar: event.target.value,
    });
  }

  onSubmit = () => {
    const formData = new FormData();
    formData.Answers = this.state.noteVar;

    axios
      .post(
        `https://api.microhawaii.com/live-chats`,
        JSON.stringify(formData),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.err == null) {
          document.getElementById("apiupform").hidden = false;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onSubmitDelete = () => {
    const formData = new FormData();
    formData.Note = this.state.noteVar;
    formData.id = 21;
    console.log(formData);

    axios
      .post(
        `https://api.microhawaii.com/live-chats`,
        JSON.stringify(formData),
        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )
      .then((res) => {
        if (res.err == null) {
          alert("Success!");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onImageChange = (event) => {
    console.log(event.target.files);

    this.setState({
      images: event.target.files,
    });
  };

  render() {
    let { formName, formDesc, formEmail, formMessage } = this.state;
    const { data } = this.state;

    const MY_MUTATION_MUTATION = gql`
      mutation DeleteNote {
        deleteSurvey(input: { where: { id: ${this.state.deleteIDVar} } }) {
          survey {
            id
          }
        }
      }
    `;

    const MyMutationMutation = (props) => {
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION}>
            {(MyMutation, { loading, error, data }) => {
              try {
                if (loading) return <pre>Loading</pre>;

                if (error) {
                }
              } catch (error) {}
              const dataEl = data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : null;

              return (
                <button
                  onClick={() =>
                    MyMutation(formName + formDesc, Date().toString())
                  }
                >
                  Activate Chat #
                </button>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };

    return (
      <Fragment>
        <CardHeader> Webtools Documentation </CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              borderRadius: "5px",
            }}
          >
            <strong>
              ChangeLog Post<b> 1/19/21</b>
            </strong>
            <small> V1.1 </small>
            <br />
            <br />{" "}
            <Row>
              <Col>
                <b>Content Editor</b>
              </Col>
              <Col>Used for changing parts of the website easily</Col>
            </Row>{" "}
            <br />
            <br />
            <Row>
              <Col>
                <b>Video Manager</b>
              </Col>
              <Col>Manages Custom Videos and Streaming.</Col>
            </Row>{" "}
            <br />
            <br />
            <Row>
              <Col>
                <b>User Management</b>
              </Col>
              <Col>Send Emails, Create Moderators, Ban Accounts</Col>
            </Row>{" "}
            <br />
            <br />
            <Row>
              <Col>
                <b>Comments</b>
              </Col>
              <Col>Manage Comment Submissions</Col>
            </Row>{" "}
            <br />
            <Row>
              <Col>
                <b>Products</b>
              </Col>
              <Col>Add, Edit, or Delete Shop Products and Content</Col>
            </Row>{" "}
            <br />
            <Row>
              <Col>
                <b>Events</b>
              </Col>
              <Col>Manage Event Calendar Data</Col>
            </Row>{" "}
            <br />
            <Row>
              <Col>
                <b>Your Notes</b>
              </Col>
              <Col>Personal Notekeeping Tool</Col>
            </Row>{" "}
            <br />
            <Row>
              <Col>
                <b>Surveys</b>
              </Col>
              <Col>Create, manage and view survey utilities.</Col>
            </Row>{" "}
            <br />
            <Row>
              <Col>
                <b>Report Issue</b>
              </Col>
              <Col>Manage and report issues to web development.</Col>
            </Row>{" "}
            <br />
            <Row>
              <Col>
                <b>Live Chat</b>
              </Col>
              <Col>Chat with users who are live on your website!</Col>
            </Row>{" "}
            <br />
          </div>{" "}
          <br />
          <br />{" "}
          <a
            href="https://github.com/PrettyCoolPattern/PrettCoolWeb/
      "
          >
            Source Code And Readme
          </a>{" "}
          <br />
        </CardBody>
      </Fragment>
    );
  }
}
export default DocumentationPage;
