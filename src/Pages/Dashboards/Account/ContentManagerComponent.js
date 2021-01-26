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
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import axios from "axios";
import { idText } from "typescript";
import { toHtml } from "@fortawesome/fontawesome-svg-core";

class ContentManagerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authVar: this.props.authVar,
      textVar: "",
    };
  }

  onSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    if (this.state.images != null) {
      document.getElementById("apiupform").hidden = true;

      Array.from(this.state.images).forEach((image) => {
        formData.append("files", image);
      });

      formData.Title = "asdf";
      formData.Sizes = "asdf";
      formData.Shop = "asdf";
      formData.Price = "asdf";
      formData.Image = this.state.images[0];
      console.log(formData);

      axios
        .post(
          `https://api.microhawaii.com/pcp-products`,
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
            document.getElementById("apiupform").hidden = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
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
        <CardHeader> PCP Content Manager</CardHeader>
        <CardBody>
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            }}
          >
            &nbsp;<button> Home Page</button> &nbsp;
            <button> About Page</button> &nbsp;
            <button> Shop Page</button> &nbsp;
          </div>
          <br />
          <div
            style={{
              boxShadow: "0px 0px 0px 2px rgba(50,50,50, .8)",
            }}
          >
            [Load DataType Array Here]
          </div>
          <br />
          &nbsp;
        </CardBody>
        <br />
      </Fragment>
    );
  }
}
export default ContentManagerComponent;
