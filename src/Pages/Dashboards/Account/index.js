import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import {
  Row,
  Col,
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
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import AccountElements from "./account";
import AdminElements from "./admin";
import LoginPageElements from "./loginPage";
//


  var CLIIP;
export default class Account extends Component {



  componentDidMount() {
    this.setState({ isLoading: true });
  
    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((response) => {
        CLIIP = response;
      })
      .then(function (parsedData) {})
      .catch((error) => this.setState({ error, isLoading: false }));
  }
  

  render() {
    
    let adminCardEle;

    if (localStorage.getItem("jwt") != null) {
      adminCardEle = (
        <Col>
          <AccountElements />
        </Col>
      );
    }
    if (
      localStorage.getItem("jwt") != null ||
      localStorage.getItem("username") == "jlevien808" ||
      localStorage.getItem("username") == "mauisustainablesolutions" 
    ) {
      adminCardEle = (
        <Col>
          <AdminElements />
        </Col>
      );
    } else {
      adminCardEle = (
        <Col>
          <LoginPageElements />
        </Col>
      );
    }

    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row>{adminCardEle}</Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
