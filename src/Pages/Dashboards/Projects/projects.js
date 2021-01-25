import React, { Component, Fragment, useState } from "react";
import scriptLoader from "react-async-script-loader";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { ImInstagram, ImYoutube, ImFacebook, ImTwitter } from "react-icons/im";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";

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

import { toInteger } from "lodash";

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
                  <h1>MicroHawaii Blogs</h1>
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
                  <h4>
                    &nbsp; With over fifteen years of software development
                    experience, Jason Hoku, along-side the MicroHawaii team are
                    dedicated to a variety of powerful skillsets and networks.
                  </h4>
                  <br /> <br />
                  <li>
                    WebTools Source Code on {""}
                    <a href="https://github.com/JasonHoku">GitHub</a>
                  </li>
                  <li>
                    Website Tutorials on {""}
                    <a href="https://www.youtube.com/playlist?list=PLWGSXq68FTb1BvHxzWGvx63ZDpNZ12xuG">
                      Youtube
                    </a>
                  </li>
                  <br></br>
                  <Row
                    style={{
                      width: "100%",
                      alignContent: "center",
                      alignItems: "center",
                      justifyContent: "center",
                      textDecorationLine: "none",
                    }}
                  >
                    <a
                      style={{
                        textDecorationLine: "none",
                      }}
                      href="https://www.facebook.com/microHawaii"
                    >
                      {<ImFacebook size="50px" />}
                    </a>
                    2k &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                      }}
                      href="https://www.instagram.com/jasonlevien/"
                    >
                      {<ImInstagram size="50px" />}
                    </a>
                    14k &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                      }}
                      href="https://www.youtube.com/JasonLevien808"
                    >
                      {<ImYoutube size="50px" />}
                    </a>
                    170 &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                      }}
                      href="https://twitter.com/JasonHoku"
                    >
                      {<ImTwitter size="50px" />}
                    </a>
                    6k &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                      }}
                      href="https://discord.gg/fjV4yg7TWd"
                    >
                      {<FaDiscord size="50px" />}
                    </a>
                    200&nbsp;&nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                      }}
                      href="https://www.linkedin.com/in/jasonlevien/"
                    >
                      {<FaLinkedin size="50px" />}
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                      }}
                      href="https://github.com/JasonHoku"
                    >
                      {<FaGithub size="50px" />}
                    </a>
                    &nbsp;&nbsp;&nbsp;
                  </Row>
                  <br></br>
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
                Open-Source Contribution Activity:
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
