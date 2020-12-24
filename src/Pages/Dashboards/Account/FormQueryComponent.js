import React, { Component, Fragment, useEffect } from "react";
import { compose, graphql } from "react-apollo";

import axios from "axios";

class FormQueryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authVar: this.props.authVar,
      textVar: "",
    };
  }
  render() {
    this.state.authVar = axios
      .get(`https://api.ponomap.com/pono-forms/`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        },
      })
      .then((res) => {
        if (res.err == null) {
          null;
        }
        var concData = "";
        for (var i = 0; i < JSON.parse(JSON.stringify(res.data)).length; i++) {
          concData =
            concData + JSON.stringify(JSON.parse(JSON.stringify(res.data))[i]);
          this.state.textVar = concData;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    return this.state.textVar;
  }
}
export default FormQueryComponent;
