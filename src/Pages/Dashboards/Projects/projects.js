import React, { Component, Fragment, useState } from "react";

import {TransitionGroup} from "react-transition-group";
import { ImInstagram, ImYoutube, ImFacebook, ImTwitter } from "react-icons/im";
import { FaDiscord, FaLinkedin, FaGithub } from "react-icons/fa";
import { Helmet } from "react-helmet";

import GitHubCalendar from "github-calendar";

import { Row, Col, Card, CardBody, CardHeader } from "reactstrap";

import { toInteger } from "lodash";

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
  componentDidMount() {
    GitHubCalendar(".calendar", "JasonHoku");
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
        <Helmet>
          <title>MicroHawaii.com Networks</title>
          <meta name="description" content="Find MicroHawaii's activity on various networks." />
          <meta name="theme-color" content="#008f68" />
          <link rel="canonical" href="https://microhawaii.com/projects" />
        </Helmet>
        <TransitionGroup
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
                  <h1>About MicroHawaii</h1>
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
                    &nbsp; With over fifteen years of software development experience, Jason Hoku,
                    along-side the MicroHawaii team are dedicated to a variety of powerful skillsets
                    and networks.
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
                        marginTop: "5px",
                      }}
                      href="https://www.facebook.com/PrettyCoolPattern"
                    >
                      {<ImFacebook size="50px" />}
                      2k
                    </a>
                    &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                        marginTop: "5px",
                      }}
                      href="https://www.instagram.com/jasonlevien/"
                    >
                      {<ImInstagram size="50px" />}
                      14k{" "}
                    </a>
                    &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                        marginTop: "5px",
                      }}
                      href="https://www.youtube.com/JasonLevien808"
                    >
                      {<ImYoutube size="50px" />}
                      170{" "}
                    </a>
                    &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                        marginTop: "5px",
                      }}
                      href="https://twitter.com/JasonHoku"
                    >
                      {<ImTwitter size="50px" />}
                      6k{" "}
                    </a>
                    &nbsp; &nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                        marginTop: "5px",
                      }}
                      href="https://discord.gg/fjV4yg7TWd"
                    >
                      {<FaDiscord size="50px" />}
                      200
                    </a>
                    &nbsp;&nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                        marginTop: "5px",
                        marginTop: "5px",
                      }}
                      href="https://www.linkedin.com/in/jasonlevien/"
                    >
                      {<FaLinkedin size="50px" />}
                    </a>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a
                      style={{
                        textDecorationLine: "none",
                        marginTop: "5px",
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
            </Col>
          </Row>
          <br></br>
          <Card
            style={{
              width: "100%",
              alignContent: "center",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CardHeader>
              <a href="https://github.com/JasonHoku">GitHub Contribution Activity:</a>
            </CardHeader>
            <CardBody>
              <link
                rel="stylesheet"
                href="https://unpkg.com/github-calendar@latest/dist/github-calendar-responsive.css"
              />

              <div class="calendar" style={{ width: "100%" }}></div>
            </CardBody>
          </Card>
          <br />

          <Row style={{ justifyContent: "center" }}>
            <Card>
              <CardBody>
                Find more about MicroHawaii's provisions on the{" "}
                <a href="/services">services</a> page.
                <br></br>
              </CardBody>
            </Card>
          </Row>
          <Row></Row>
          <br></br>
        </TransitionGroup>
      </Fragment>
    );
  }
}
