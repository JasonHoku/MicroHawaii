import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from "react-router-dom";

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
  ListGroupItem,
  Card,
  CardBody,
  CardHeader,
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
  faAlignCenter,
} from "@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "react-sparklines";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CountUp from "react-countup";

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../../assets/utils/images/avatars/3.jpg";
import servicespic from "../../../../assets/images/thumbs/services.png";
import aboutpic from "../../../../assets/images/thumbs/about.png";
import publishingpic from "../../../../assets/images/thumbs/publishing.png";
import shoppic from "../../../../assets/images/thumbs/shop.png";
import audiopic from "../../../../assets/images/thumbs/audio.png";
import visualpic from "../../../../assets/images/thumbs/visual.jpg";
import logo from "../../../../assets/images/logoani.gif";
import Main from "../../../Main";
import CenterMode from "../../../Components/Carousel/Examples/Slideshow/CenterMode";
import { setBackgroundImage } from "../../../../reducers/ThemeOptions";

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //doing some asynchronous call here which dispatches an action
    //and updates the state -> which inturn renders the component again.
    //I want component to be rendered after this happended. Is it possible ?

    let clientWidth = Math.min(
      window.innerWidth,
      document.documentElement.clientWidth
    );
    let logoWidth = null;
    let galleryPos = clientWidth;

    if (clientWidth <= "800") {
      logoWidth = clientWidth * 0.5;
      galleryPos = 25;
    }
    if (clientWidth >= "800" && clientWidth <= "1400") {
      logoWidth = clientWidth * 0.4;
      galleryPos = 100;
    }
    if (clientWidth > "1400") {
      logoWidth = clientWidth * 0.4;
      galleryPos = String(clientWidth / 6);
    }
  }
  render() {
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
          <center>
            <meta
              name="description"
              content="microHawaii.com, software development, e-commerce, education and services."
            />
            <Row>
              <Col
                mx-auto="true"
                className=" opacity-9"
                style={{ width: "31rem" }}
              >
                <Card
                  className="mb-3 main-card"
                  style={{
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <CardHeader className="main-card dark card-header-tab">
                    <div className="card-header-title">
                      <i size="large" className="pe-7s-rocket opacity-9">
                        {" "}
                        12/14/20 Announcement{" "}
                      </i>
                    </div>
                  </CardHeader>{" "}
                  <CardBody>
                    {" "}
                    <div>
                         microHawaii is celebrating 15 years of service. 🍰
                      <br></br> <br></br>
                      For more information on the{" "}
                      <a href="#/dashboards/services"> services </a>
                      provided here please inquire through the{" "}
                      <a href="#/dashboards/contact"> contact </a> page or by
                      email at:   
                      <a href="mailto:contact@microhawaii.com">
                        {" "}
                        contact@microHawaii.com
                      </a>
                      <br></br>
                      <br></br> <br></br>{" "}
                      <center>
                        {" "}
                        <img src={logo} width="75"></img>
                      </center>
                    </div>
                  </CardBody>
                </Card>
              </Col>
              <Col
                mx-auto="true"
                className=" opacity-9"
                style={{ width: "12rem" }}
              >
                <Card
                  mx-auto="true"
                  style={{
                    width: "11rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <a href="#/dashboards/services">
                    {" "}
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Services
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className="rounded-circle text-center"
                          src={servicespic}
                          alt=""
                        />
                      </div>
                      <center>Skills &amp; Consult.</center>
                    </CardBody>
                  </a>
                </Card>
                <br></br>
              </Col>
              <Col mx-auto="true" className=" opacity-9">
                <a href="#/dashboards/shop">
                  <Card
                    mx-auto="true"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Shoppe
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={shoppic}
                          alt=""
                        />
                      </div>
                      <center>E-Commerce</center>
                    </CardBody>
                  </Card>
                </a>
                <br></br>
              </Col>
              <Col mx-auto="true" className=" opacity-9">
                <a href="#/dashboards/services">
                  <Route path="#/dashboards/services" />
                  <Card
                    mx-auto="true"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        About
                      </div>{" "}
                      <div> </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={aboutpic}
                          alt=""
                        />
                      </div>
                      <center> Learn More</center>
                    </CardBody>
                  </Card>{" "}
                  <br></br>
                </a>{" "}
              </Col>
            </Row>
          </center>
          <Row></Row>
          <Row>
            <Col>
              <Card
                className="main-card mb-3"
                style={{
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                }}
              >
                <CardHeader className="card-header-tab" color="light">
                  <div className="card-header-title font-size-lg font-weight-normal">
                    <i className="header-icon pe-7s-news-paper text-muted opacity-6">
                      {" "}
                    </i>
                    microHawaii Web Development: 8/17/20
                  </div>{" "}
                  <div>
                    {" "}
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </CardHeader>
                <CardBody>
                    microHawaii is specializing in custom, self-hosted
                  E-Commerce Softwares, bringing powerful, low-cost tools to
                  businesses of all shapes and sizes.
                  <br></br> <br></br>
                   This website is an{" "}
                  <a href="https://github.com/JasonHoku/MicroHawaii">
                    {" "}
                    open-source{" "}
                  </a>
                  , custom,{" "}
                  <a href="https://create-react-app.dev/">"React App"</a>,
                  written in the NodeJS environment. Visit the about page to
                  learn more, report issues and make contact.
                  <br></br>
                  <br></br> <br></br>{" "}
                  <center>
                    {" "}
                    <img src={logo} width="50"></img>
                  </center>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Row></Row>

          <Row style={{ justifyContent: "center" }}>
            <Col sm="12" md="6" xl="4" style={{ justifyContent: "center" }}>
              <Card
                style={{ justifyContent: "center" }}
                className="card-shadow-primary card-border text-white mb-3"
                color="primary"
              >
                <div
                  className="dropdown-menu-header"
                  style={{ justifyContent: "center" }}
                >
                  <div
                    className="dropdown-menu-header-inner bg-primary"
                    style={{ justifyContent: "center" }}
                  >
                    <div className="menu-header-content">
                      <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                        <div className="avatar-icon">
                          <img src={avatar1} alt="Avatar 5" />
                        </div>
                      </div>
                      <div>
                        <h5 className="menu-header-title">Jason Hoku Levien</h5>
                        <h6 className="menu-header-subtitle">
                          Founder / Owner
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="text-center d-block">
                  <a href="#/dashboards/contact">
                    <Button className="btn-shadow-dark btn-wider" color="dark">
                      Contact
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
