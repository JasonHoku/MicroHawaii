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

import { makeData } from "../../../Tables/DataTables/Examples/utils";

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
            <Row>
              <Col mx-auto className=" opacity-9" style={{ width: "12rem" }}>
                <Card
                  mx-auto
                  style={{
                    width: "11rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <a href="#/dashboards/services">
                    {" "}
                    <Route path="#/dashboards/services" />
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
                <a href="#/dashboards/gallery">
                  <Card
                    mx-auto
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Visual Art Gallery
                      </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={visualpic}
                          alt=""
                        />
                      </div>
                      <center>Visual Gallery</center>
                    </CardBody>
                  </Card>
                </a>{" "}
                <br></br>
              </Col>
              <Col mx-auto className=" opacity-9">
                <a href="#/dashboards/shop">
                  <Route path="#/dashboards/shop" />

                  <Card
                    mx-auto
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
                <a href="#/dashboards/writing">
                  <Card
                    md="auto"
                    className="main-card mb-3"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Written Publishing
                      </div>{" "}
                      <div> </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={publishingpic}
                          alt=""
                        />
                      </div>
                      <center>Non Fiction</center>
                    </CardBody>
                  </Card>
                </a>{" "}
                <br></br>
              </Col>
              <Col mx-auto className=" opacity-9">
                <a href="#/dashboards/services">
                  <Route path="#/dashboards/services" />
                  <Card
                    mx-auto
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

              <Col mx-auto className=" opacity-9">
                {" "}
                <a href="#/dashboards/music">
                  <Card
                    mx-auto
                    className="main-card mb-3"
                    style={{
                      width: "11rem",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                    }}
                  >
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        Audio Art Gallery
                      </div>{" "}
                      <div> </div>
                    </CardHeader>
                    <CardBody>
                      <div>
                        <img
                          width={140}
                          className=" text-center"
                          src={audiopic}
                          alt=""
                        />
                        <br></br>
                      </div>
                      <center>Music Production.</center>
                    </CardBody>
                  </Card>
                </a>
              </Col>
              <Col mx-auto className=" opacity-9" style={{ width: "31rem" }}>
                <Card
                  className="mb-3 main-card"
                  style={{
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <CardHeader className="main-card dark card-header-tab">
                    <div className="card-header-title">
                      <i className=" lnr-rocket icon-gradient opacity-9"> </i>
                      10/17/20 Announcement
                    </div>
                  </CardHeader>{" "}
                  <CardBody>
                    {" "}
                    <div>
                         microHawaii is fully functional and currently accepting
                      client and consult requests.
                      <br></br> <br></br>
                      For more information on the{" "}
                      <a href="#/dashboards/services"> services </a>
                      provided here please inquire through the{" "}
                      <a href="#/dashboards/contact"> contact </a> page. or by
                      email at:   
                      <a href="mailto:contact@microhawaii.com">
                        {" "}
                        Contact@microHawaii.com{" "}
                      </a>
                      <br></br>
                      <br></br> <br></br>{" "}
                      <center>
                        {" "}
                        <img src={logo} width="100"></img>
                      </center>
                      <br></br>
                    </div>
                  </CardBody>
                </Card>
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
                    <i className="header-icon lnr-dice mr-3 text-muted opacity-6">
                      {" "}
                    </i>
                    Update: 8/17/20
                  </div>{" "}
                  <div>
                    {" "}
                    <br></br>
                    <br></br>
                    <br></br>
                  </div>
                </CardHeader>
                <CardBody>
                     I'd like to thank everyone who'se shown support through the
                  goals and work, wouldn't have gotten here without you.
                  <br></br> <br></br>
                    The site is being transfered to modern templature, utilizing
                  the React frameworks as the primary language. Improvements to
                  speed, aestetics and new features will be rolling out over the
                  coming weeks.
                  <br></br>
                  <br></br>   Please report any issues and commentary through
                  the contact page and thank you so much for stopping by.
                  <br></br>
                  <br></br> <br></br>{" "}
                  <center>
                    {" "}
                    <img src={logo} width="100"></img>
                  </center>
                  <br></br>
                  <br></br>
                </CardBody>
              </Card>
            </Col>
          </Row>

          <Card
            className="main-card mb-3"
            style={{
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            }}
          >
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg font-weight-normal">
                <i className="header-icon lnr-dice mr-3 text-muted opacity-6">
                  {" "}
                </i>
                Update: 7/17/20
              </div>{" "}
              <div> </div>
            </CardHeader>
            <CardBody>
              Site updates are live! (Improved services page, upgraded layout,
              added spunk)
              <br></br>
              <br></br>
              Find out what microHawaii is working on, get involved and learn
              more, by visiting the new
              <a href="#/dashboards/projects"> Projects Page</a>.<br></br>
              <br></br>
            </CardBody>
          </Card>

          <Row></Row>

          <Card
            className="main-card mb-3"
            style={{
              boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
            }}
          >
            <CardHeader className="card-header-tab">
              <div className="card-header-title font-size-lg font-weight-normal">
                <i className="header-icon lnr-dice mr-3 text-muted opacity-6">
                  {" "}
                </i>
                Update: 6/15/20
              </div>{" "}
              <div> </div>
            </CardHeader>
            <CardBody>
              The microHawaii 3D Web-Game development is kicking off! Pre-Alpha
              0.2 is now available
              <a href="../3D/"> here </a>.<br></br>
              <br></br>
            </CardBody>
          </Card>

          <Row></Row>

          <Row>
            <Col sm="12" md="6" xl="4">
              <Card
                className="card-shadow-primary card-border text-white mb-3"
                color="primary"
              >
                <div className="dropdown-menu-header">
                  <div className="dropdown-menu-header-inner bg-primary">
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
                      Send Message
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
