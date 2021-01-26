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

class VideoManager extends Component {
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
        .get(`https://api.microHawaii.com/chats`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          if (res.err == null) {
            this.setState({ textvar: JSON.stringify(res) });
          }
          let concData = "";
          for (
            var i = 0;
            i < JSON.parse(JSON.stringify(res.data)).length;
            i++
          ) {
            concData =
              concData +
              "\r\n ID#" +
              String(JSON.parse(JSON.stringify(res.data))[i].id) +
              "| " +
              String(JSON.parse(JSON.stringify(res.data))[i].User) +
              ": " +
              String(JSON.parse(JSON.stringify(res.data))[i].Comment);

            this.state.textVar = concData
              .split("\n")
              .map((str, index) => <h5 key={index}>{str}</h5>);
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
    return (
      <Fragment>
        <CardHeader> PCP Site Video Manager</CardHeader>
        <CardBody>Setup Per Request. </CardBody>
      
        <br />
      </Fragment>
    );
  }
}
export default VideoManager;
