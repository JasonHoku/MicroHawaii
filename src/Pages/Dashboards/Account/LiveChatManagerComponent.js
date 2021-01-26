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
import { JsxEmit } from "typescript";
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
  getData() {
    console.log("Check Live Chat Data");
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
              //text array is reversed
              concData =
                concData +
                "\r\n Created At: " +
                JSON.parse(JSON.stringify(res.data))[i].timestamp +
                "\r\n Instance: " +
                JSON.parse(JSON.stringify(res.data))[i].instance +
                "\r\n ID#" +
                JSON.stringify(JSON.parse(JSON.stringify(res.data))[i].id) +
                "\r\n . ";
              this.setState({
                textVar: concData
                  .split("\n")
                  .map((str, index) => <h5 key={index}>{str}</h5>)
                  .reverse(),
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
    this.runGetLive();
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

  purgeOldChats() {
    var myLine = this.state.getOldTimestamp;

    var nowTime = Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(Date.now());

    var nowTimeCon1 = Intl.DateTimeFormat("en-US", {
      hour: "2-digit",
    }).format(Date.now());

    var nowTimeCon2 = Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(Date.now());

    let recentMinute = [
      toInteger(
        Intl.DateTimeFormat("en-US", {
          minute: "2-digit",
        }).format(Date.now())
      ),
    ];
    let gotDates = new Date();
    var MS_PER_MINUTE = 60000;
    var d2 = new Date();
    var n2 = d2.toISOString();
    var myStartDate = new Date(d2 - 5 * MS_PER_MINUTE);
    // for each date : compare to time now and get true/false and ID for greater than 5 minutes
    console.log("XXX" + myStartDate);

    var parts = "2021-01-13T17:21:41.696Z";
    for (var i = 0; i < this.state.getOldTimestamp.length; i++) {
      console.log(i);
      // Steps ??? Declare dates of all instances
      console.log(new Date(this.state.getOldTimestamp[i]));
      var d = new Date();
      var n = d.toISOString();
      console.log(n);
      console.log(new Date(parts));
      console.log(this.state.getDataEZID[i]);
      if (new Date(this.state.getOldTimestamp[i]) < myStartDate) {
        axios
          .delete(
            `https://api.microhawaii.com/live-chats/${this.state.getDataEZID[i]}`,

            {
              headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${localStorage.getItem("jwt")}`,
              },
            }
          )

          .then((res) => {
            if (res.err == null) {
              console.log(res);
            }
          })
          .catch((err) => {
            console.log(err);
          });
        console.log("YYYZZ");
      }
      // Compare dates to recent time
      // Delete old dates
    }
  }

  purgeByID = () => {
    axios
      .delete(
        `https://api.microhawaii.com/live-chats/${this.state.deleteIDVar}`,

        {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        }
      )

      .then((res) => {
        if (res.err == null) {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  onSubmit = () => {
    const MY_MUTATION_MUTATION3 = gql`
      mutation UpdateChat {
        updateLiveChat(
          input: { where: { id: ${this.state.deleteIDVar} }, data: { messageAdmin: "Test" } }
        ) {
          liveChat {
            messageAdmin
          }
        }
      }
    `;
    try {
      <Mutation mutation={MY_MUTATION_MUTATION3}>
        {(MyMutation, { loading, error, data }) => {
          try {
            if (loading) return <pre>Loading</pre>;

            if (error) {
            }
          } catch (error) {}
          const dataEl = data ? (
            <pre>{JSON.stringify(data, null, 2)}</pre>
          ) : null;
          if (data) {
            this.runGetLive();
            console.log(data);
          }

          return MyMutation(formName + formDesc, Date().toString());
        }}
      </Mutation>;
    } catch (error) {}
  };

  runGetLive() {
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
            for (
              var i = 0;
              i < JSON.parse(JSON.stringify(res.data)).length;
              i++
            )
              if (
                String(JSON.parse(JSON.stringify(res.data))[i].id) ===
                this.state.deleteIDVar
              ) {
                this.setState({ EZID: i });
              }
            this.setState({
              statusVar: "On ID#" + this.state.deleteIDVar,
            });
            this.setState({
              textVar2: "On ID#" + this.state.deleteIDVar,
            });
            this.setState({
              loadedAdminMessage: String(
                JSON.parse(JSON.stringify(res.data))[this.state.EZID]
                  .messageAdmin
              ),
            });
            this.setState({
              loadedUserMessage: String(
                JSON.parse(JSON.stringify(res.data))[this.state.EZID]
                  .messageUser
              ),
            });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  }
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
    const MY_MUTATION_MUTATION3 = gql`
      mutation UpdateChat {
        updateLiveChat(
          input: { where: { id: ${this.state.deleteIDVar} }, data: { messageAdmin: "Welcome!" ,messageUser: " " } }
        ) {
          liveChat {
            messageAdmin
            messageUser
          }
        }
      }
    `;
    const MyMutationMutation3 = (props) => {
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION3}>
            {(MyMutation, { loading, error, data }) => {
              try {
                if (loading) return <pre>Loading</pre>;

                if (error) {
                }
              } catch (error) {}
              const dataEl = data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : null;
              if (data) {
                this.runGetLive();
              }

              return <button onClick={() => MyMutation()}>Initialize</button>;
            }}
          </Mutation>
        );
      } catch (error) {}
    };
    const MY_MUTATION_MUTATION2 = gql`
      mutation UpdateChat {
        updateLiveChat(
          input: { where: { id: ${
            this.state.deleteIDVar
          } }, data: { messageAdmin: "${
      String(this.state.loadedAdminMessage) + " xyzVar " + this.state.noteVar
    }" } }
        ) {
          liveChat {
            messageAdmin
          }
        }
      }
    `;

    const MyMutationMutation2 = (props) => {
      try {
        return (
          <Mutation mutation={MY_MUTATION_MUTATION2}>
            {(MyMutation, { loading, error, data }) => {
              try {
                if (loading) return <pre>Loading</pre>;

                if (error) {
                }
              } catch (error) {}
              const dataEl = data ? (
                <pre>{JSON.stringify(data, null, 2)}</pre>
              ) : null;
              if (data) {
                this.runGetLive();
                this.setState({ noteVar: "" });
              }

              return <button onClick={() => MyMutation()}>Send</button>;
            }}
          </Mutation>
        );
      } catch (error) {}
    };
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
