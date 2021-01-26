import React, { Component, Fragment, useEffect } from "react";
import { compose, graphql } from "react-apollo";
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

class NoteManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteVar: "",
      deleteIDVar: "26",
    };
  }


  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }
  getData() {
    console.log("Check Chat Data");
    try {
      this.state.authVar = axios
        .get(`https://api.microHawaii.com/live-chats`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          if (res.err == null) {
            localStorage.setItem(
              "ActiveChatUserCount",
              String(JSON.parse(JSON.stringify(res.data)).length)
            );
            let concData = "";
            let concData2 = "";
            let concData3 = "";
            this.state.getOldTimestamp = [];
            this.state.getDataEZID = [];
            for (
              var i = 0;
              i < JSON.parse(JSON.stringify(res.data)).length;
              i++
            ) {
              concData2 = this.state.getOldTimestamp.concat([
                JSON.parse(JSON.stringify(res.data))[i].timestamp,
              ]);
              this.setState({
                getOldTimestamp: concData2,
              });
              concData3 = this.state.getDataEZID.concat([
                JSON.stringify(JSON.parse(JSON.stringify(res.data))[i].id),
              ]);
              this.setState({
                getDataEZID: concData3,
              });

              concData =
                concData +
                "\r\n ID#" +
                JSON.stringify(JSON.parse(JSON.stringify(res.data))[i].id) +
                "\r\n Instance: " +
                JSON.parse(JSON.stringify(res.data))[i].instance +
                "\r\n Created At: " +
                JSON.parse(JSON.stringify(res.data))[i].timestamp +
                "\r\n . ";
              this.setState({
                textVar: concData
                  .split("\n")
                  .map((str, index) => <h5 key={index}>{str}</h5>),
              });
            }
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
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
    formData.Comment = this.state.noteVar;
    formData.User = localStorage.getItem("username");
    console.log(formData);

    axios
      .post(`https://api.microhawaii.com/chats`, JSON.stringify(formData), {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        if (res.err == null) {
          document.getElementById("apiupform").hidden = false;
        }
        console.log(res);
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
      .post(`https://api.microhawaii.com/chats`, JSON.stringify(formData), {
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        if (res.err == null) {
          alert("Success!");
        }
        console.log(res);
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
      mutation DeleteChat {
        deleteChat(input: { where: { id: ${this.state.deleteIDVar} } }) {
          chat {
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
                  Delete Comment #
                </button>
              );
            }}
          </Mutation>
        );
      } catch (error) {}
    };

    return (
      <Fragment>
        <CardHeader> PCP Site Comment Manager</CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
              marginLeft: "-20px",
              marginRight: "-20px",
            }}
          >
            <span style={{ marginLeft: "2px", marginRight: "2px" }}>
              {this.state.textVar}
            </span>
          </div>
          <input
            type="number"
            onChange={() => this.handleInputChange2(event)}
            style={{ width: "50px" }}
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
          <button onClick={() => this.onSubmit()}> Send</button> <br />
        </CardBody>
        <br />
      </Fragment>
    );
  }
}
export default NoteManagerComponent;
