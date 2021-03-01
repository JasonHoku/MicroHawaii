import React, { Component, Fragment, useEffect } from "react";
import { compose, graphql } from "react-apollo";


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
class NoteManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteVar: "",
      textVar: " Loading...",
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
        .get(`https://api.microHawaii.com/micro-comments`, {
          headers: {
            "content-type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("jwt")}`,
          },
        })
        .then((res) => {
          if (res.err == null) {
            this.setState({ textvar: JSON.stringify(res) });
          }
          localStorage.setItem(
            "CommentsCount",
            String(JSON.parse(JSON.stringify(res.data)).length)
          );
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
              String(JSON.parse(JSON.stringify(res.data))[i].name) +
              ": " +
              String(JSON.parse(JSON.stringify(res.data))[i].comment);

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
    formData.comment = this.state.noteVar;
    formData.name = localStorage.getItem("username");
    console.log(formData);

    axios
      .post(
        `https://api.microhawaii.com/micro-comments`,
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
      .post(
        `https://api.microhawaii.com/micro-comments`,
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
        <CardHeader> PCP Site Comment Manager</CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
              marginLeft: "-15px",
              marginRight: "-15px",
              maxWidth: "375px",
            }}
          >
            <br />
            <div style={{ marginLeft: "5px" }}>
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
              <button onClick={() => this.onSubmit()}> Add Comment</button>{" "}
              <br />
              <span style={{ marginLeft: "2px", marginRight: "2px" }}>
                <div
                  style={{
                    boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
                    marginRight: "5px",
                  }}
                >
                  {" "}
                  Comments:
                  {this.state.textVar}
                </div>
              </span>
            </div>
          </div>{" "}
        </CardBody>
        <br />
      </Fragment>
    );
  }
}
export default NoteManagerComponent;
