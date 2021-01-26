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
  }
}
export default FormQueryComponent;
