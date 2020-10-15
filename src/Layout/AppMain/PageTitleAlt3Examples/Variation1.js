import React, { Component, Fragment } from "react";

import { Button, CustomInput, UncontrolledTooltip } from "reactstrap";

import { toast, Slide } from "react-toastify";

import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class TitleComponent1 extends Component {
  state = {
    expZoomIn: false,
  };

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }

  notify22 = () =>
    (this.toastId = toast("You can add whatever element in this section.", {
      transition: Slide,
      closeButton: true,
      autoClose: 5000,
      position: "bottom-center",
      type: "default",
    }));

  render() {
    return (
      <Fragment>
        <div className="d-inline-block pr-3">
          <CustomInput id="custom-inp-top" size="sm" type="select">
            <option>Select period...</option>
            <option>Last Week</option>
            <option>Last Month</option>
            <option>Last Year</option>
          </CustomInput>
        </div>
      </Fragment>
    );
  }
}
