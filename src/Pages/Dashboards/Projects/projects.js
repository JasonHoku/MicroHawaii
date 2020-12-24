import React, { Component, Fragment, useState } from "react";
import scriptLoader from "react-async-script-loader";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Nav,
  NavItem,
  ListGroup,
  Input,
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "recharts";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
  faStrikethrough,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { makeData } from "../../Tables/DataTables/Examples/utils";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import { toInteger } from "lodash";
import { relative } from "path";

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};


export default class ProjectElements extends Component {
  constructor(props) {
    super(props);

    this.timerLoader = this.timerLoader.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.timerReset = this.timerReset.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
      timerVar: 1200,
    };
  }

  toggle2(tab) {
    if (this.state.activeTab2 !== tab) {
      this.setState({
        activeTab2: tab,
      });
    }
  }

  toggle1(tab) {
    if (this.state.activeTab1 !== tab) {
      this.setState({
        activeTab1: tab,
      });
    }
  }
  timerLoader() {
    document.getElementById("timer").hidden = false;
    this.setState({});
  }
  timerReset() {
    if (toInteger(document.getElementById("timerText").value) === 0) {
      document.getElementById("timerText").value = 333;
    }

    this.state.timerVar = toInteger(document.getElementById("timerText").value);
    this.setState({});
  }
  render() {
    const { data } = this.state;
    let text;
    let timerVar = this.state.timerVar;

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
          <Row
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col xs="auto" sm="auto" md="auto" xl="auto">
              <Card>
                <CardBody>
                  Welcome to MicroHawaii projects blog.
                  <br></br>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>

          <Row
            style={{
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Col xs="auto" sm="auto" md="auto" xl="auto">
              <Card>
                <CardBody>
                  With 15+ years of software development experience, Jason Hoku
                  Levien along-side the MicroHawaii team and affiliates are
                  dedicated to a variety of educations and skillsets
                  <br /> <br />
                  <li>
                    Website Development: Follow on
                    <a href="https://github.com/JasonHoku">
                      {" "}
                      GitHub
                      <br></br>
                    </a>
                  </li>{" "}
                  <li>
                    <a href="/3D/">Game Development </a>
                  </li>
                  <li><a href="https://www.youtube.com/playlist?list=PLWGSXq68FTb1BvHxzWGvx63ZDpNZ12xuG">Web Tutorials </a></li>
                  <br></br> <br></br>
                </CardBody>
              </Card>
              <Row
                id="timer"
                hidden="true"
                style={{
                  alignContent: "center",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Card style={{ fontSize: "40px", width: "26rem" }}>
                  {" "}
                  <Row>
                    <CardBody>
                      <p>
                        <a
                          onClick={this.timerReset}
                          href="/#/dashboards/projects"
                        >
                          <i className="pe-7s-plus"></i>
                        </a>
                        <a>
                          <i className="pe-7s-less"></i>
                          <i className="pe-7s-lock"></i>
                          <i className="pe-7s-refresh"></i>
                        </a>
                      </p>
                      <Input
                        style={{
                          width: "60%",
                          alignContent: "center",
                          alignItems: "center",
                          position: "relative",
                          display: "block",
                          justifyContent: "center",
                        }}
                        width="13rem"
                        size="10"
                        type="text"
                        id="timerText"
                        placeholder={timerVar}
                      >
                        {" "}
                      </Input>{" "}
                    </CardBody>
                    <br></br>
                    <Col>
                      <CountdownCircleTimer
                        isPlaying={true}
                        duration={this.state.timerVar}
                        key={this.state.timerVar}
                        colors={[
                          ["#004777", 0.33],
                          ["#F7B801", 0.33],
                          ["#A30000", 0.33],
                        ]}
                      >
                        {({ remainingTime }) => remainingTime}
                      </CountdownCircleTimer>
                    </Col>
                    <Col>
                      <CountdownCircleTimer
                        isPlaying
                        duration={120}
                        colors={[
                          ["#004777", 0.33],
                          ["#F7B801", 0.33],
                          ["#A30000", 0.33],
                        ]}
                      >
                        {({ remainingTime }) => remainingTime}
                      </CountdownCircleTimer>
                    </Col>
                  </Row>
                </Card>
                <Col xs="auto" sm="auto" md="auto" xl="auto"></Col>
              </Row>
            </Col>
          </Row>
          <br></br>
          <Card
            alignContent="center"
            style={{
              width: "60%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardHeader>
              {" "}
              <a href="https://github.com/JasonHoku">
                Jason Hoku, GitHub Contribution Activity:
              </a>
            </CardHeader>
            <CardBody>
              <CardImg
                alignContent="center"
                src="https://grass-graph.moshimo.works/images/JasonHoku.png"
              ></CardImg>
            </CardBody>
          </Card>
          <br />

          <Row>
            <Col xs="auto" sm="auto" md="auto" xl="auto">
              <Card>
                <CardBody>
                  For now you can find more about MicroHawaii skillsets on the{" "}
                  <a href="#/dashboards/services">services</a> page.
                  <br></br>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row></Row>
          <br></br>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
