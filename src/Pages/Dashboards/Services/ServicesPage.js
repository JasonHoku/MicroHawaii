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

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import aboutpic from "../../../assets/images/thumbs/about.png";
import publishingpic from "../../../assets/images/thumbs/publishing.png";
import shoppic from "../../../assets/images/thumbs/shop.png";
import audiopic from "../../../assets/images/thumbs/audio.png";
import visualpic from "../../../assets/images/thumbs/visual.jpg";
import maui from "../../../assets/images/maui.png";
import illumexample from "../../../assets/images/thumbs/illumexample.png";

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
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

  render() {
    const { data } = this.state;

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
          {/*
      
<div>

    <a href="#">
        <img src="images/thumbs/07.png" alt="" />
        <h2>Custom E-Commerce, Services, Merchandise, Research & More</h2>
    </a>
</div>
</section>


<section id="main"><br>
<center>
    <div class="gif">
    </div>
</center>

<!-- Thumbnails -->
<section class="thumbnails">
    <div>

        <a href="#">
            <img src="images/thumbs/javaexample.png" alt="" />Example Site A
        </a>
    </div>
    <div>
        <br>

        </center>
      
    </div>
</section>

</section>
</section>
                    */}

          <Row>
            <Col>
              <Card className="col-md- opacity-9 ">
                <CardHeader className="card-header-tab">
                  <div className="card text-center card-shadow-focus opacity-9">
                    <h4> MicroHawaii Services </h4>
                  </div>
                </CardHeader>
                <CardBody>
                  MicroHawaii is a conglomerate of Hawaii based computer
                  services.
                  <br /> <br /> Main Services:
                  <br /> <br /> <li> Complete Web and App Design</li> <br />
                  <li> Powerful Modern Advertising</li> <br />
                  <li> Ultimate SEO Utilities </li> <br />
                  <br /> <br />
                  MicroHawaii Websites:
                  <br /> <br />
                  <li>
                    <a href="https://prettycoolpattern.com/">
                      PrettyCoolPattern
                    </a>
                  </li>
                  <li>
                    <a href="https://mauiartprints.com/">MauiArtPrints</a>
                  </li>{" "}
                  <li>
                    <a href="https://ponomap.com/">PonoMap</a>
                  </li>{" "}
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Row>
                <Col>
                  <Card className="row-md-6 opacity-9 zoom ">
                    <a style={{textDecoration:"none"}}
                      href="#/dashboards/contact"
                      to="#/dashboards/contact"
                      activeLinkFromLocation
                    >
                      <CardHeader
                        style={{ textAlign: "center" }}
                        className="card-header-tab"
                      >
                        <center>
                          {" "}
                          <h4>Contact</h4>
                        </center>
                      </CardHeader>
                      <CardBody>
                        <div style={{ textAlign: "center" }}>
                          Jason Hoku Levien <br />
                          info@MicroHawaii.com <br />
                          (808)385-1775
                        </div>{" "}
                        <br />
                        <center> Click here to send a direct message.</center>
                      </CardBody>
                    </a>
                  </Card>
                  <Row>
                    <Col>
                      {" "}
                      <br></br>
                      <Card className=" opacity-9 ">
                        <CardHeader className="card-header-tab">
                          <div className="card text-center card-shadow-focus opacity-9">
                            <h4> Maui, Hawaii Based</h4>
                          </div>
                        </CardHeader>
                        <CardBody>
                          <center>
                            <CardImg
                              style={{
                                maxWidth: "350px",
                                borderRadius: "50px",
                              }}
                              src={maui}
                            ></CardImg>
                          </center>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>

          <br></br>

          <Row>
            <Col>
              <a href="#/dashboards/contact" to="#/dashboards/contact">
                <Card className="col-md-6 opacity-9 zoom">
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9"></div>
                    <h4>Make Contact</h4>
                  </CardHeader>
                  <CardBody>
                    <div>
                      <p> 15+ Years Experience</p>
                      <p></p>
                      <p> E-Commerce Sites Starting At $250</p>
                      <p>
                        {" "}
                        Analytics, Advertising &amp; Easy Management Tools.
                      </p>
                      <p>
                        Powerful Advertising Plans: Get Your Website Noticed By
                        The Right Audience.
                      </p>
                      <p> Reach out and begin your online adventure, today!</p>
                    </div>
                  </CardBody>
                </Card>{" "}
              </a>
              <br></br>
            </Col>
          </Row>

          <Row style={{ justifyContent: "center" }}>
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
                          Lead Web Applications Developer
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <CardFooter className="text-center d-block">
                  <Button className="btn-shadow-dark btn-wider" color="dark">
                    Send Message
                  </Button>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
