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
import logo from "../../../assets/images/logoani.gif";
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
                    MicroHawaii Services{" "}
                  </div>
                </CardHeader>
                <CardBody>
                  microHawaii is a conglomerate of Hawaii based computer
                  services.
                  <br /> <br /> Areas of expertise include:
                  <br /> <br /> <li> Website and Application Design</li>
                  <li>Graphic Design &amp; Printing</li>
                  <li> Powerful Modern Advertising</li>
                  <li> E-Commerce Services </li>
                  <br /> <br /> Active microHawaii Clients:
                  <br /> <br />
                  <li>
                    <a href="https://mauiartprints.com/">
                      https://mauiartprints.com/
                    </a>
                  </li>{" "}
                  <li>
                    <a href="https://ponomap.com/">https://ponomap.com/</a>
                  </li>{" "}
                  <li>
                    <a href="https://prettycoolpattern.com/">
                      https://prettycoolpattern.com/
                    </a>
                  </li>{" "}
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Row>
                <Col>
                  <Card className="row-md-6 opacity-9 ">
                    <a
                      href="#/dashboards/contact"
                      to="#/dashboards/contact"
                      activeLinkFromLocation
                    >
                      <CardHeader className="card-header-tab">
                        <div className="card text-center card-shadow-focus opacity-9">
                          <i className="pe-7s-mail">Contact</i>
                        </div>
                      </CardHeader>
                      <CardBody>
                        <div></div>
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
                            Maui, Hawaii Based
                          </div>
                        </CardHeader>
                        <CardBody>
                          <CardImg src={maui}></CardImg>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
                <Col>
                  <Card className="opacity-9 ">
                    <CardHeader className="card-header-tab">
                      <div className="card text-center card-shadow-focus opacity-9">
                        E-Commerce + Design
                      </div>
                    </CardHeader>
                    <CardBody>
                      <CardImg src={illumexample}></CardImg>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>

          <br></br>

          <Row>
            {" "}
            <Col>
              {" "}
              <Card className="col-md-6 opacity-9 ">
                <CardHeader className="card-header-tab">
                  <div className="card text-center card-shadow-focus opacity-9">
                    Website Design Portfolio Highlights:
                  </div>
                </CardHeader>
                <CardBody>
                  <div>
                    {" "}
                    <p> 15+ Years Experience</p>
                    <p> </p>
                    <p> Affordable $30/hr </p>
                    <p></p>
                    <p> E-Commerce Sites Starting @ $250</p>
                    <p> Advertising Expert Of Top Modern Utilities</p>
                    <p>DevOps Management For Jobs of Any Size</p>
                    <p></p>
                  </div>
                </CardBody>
              </Card>{" "}
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
