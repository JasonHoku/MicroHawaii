import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Helmet } from "react-helmet";

import { Link } from "react-router-dom";
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

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import maui from "../../../assets/images/maui.png";

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

    <Link to="#">
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

        <Link to="#">
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
            <Helmet>
              <title>MicroHawaii.com Services Page</title>
              <meta
                name="description"
                content="Discover and inquire about services and provisions from MicroHawaii."
              />
              <link
                rel="canonical"
                href="https://microhawaii.com/dashboards/services"
              />
            </Helmet>
            <Col>
              <Card className="col-md- opacity-9 ">
                <CardHeader className="card-header-tab">
                  <div>
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
                    <Link to="https://prettycoolpattern.com/">
                      PrettyCoolPattern
                    </Link>
                  </li>
                  <li>
                    <Link href="https://mauiartprints.com/">MauiArtPrints</Link>
                  </li>{" "}
                  <li>
                    <Link to="https://ponomap.com/">PonoMap</Link>
                  </li>{" "}
                  <li>
                    <Link to="https://AARootsHI.com/">AARootsHI.com</Link>
                  </li>{" "}
                  <li>
                    <Link to="https://RayMauiYoga.com/">RayMauiYoga.com</Link>
                  </li>{" "}
                  <br /> <br /> Join the rapidly expanding network today.
                </CardBody>
              </Card>
            </Col>

            <Col>
              <Row>
                <Col>
                  <Card className="row-md-6 opacity-9 zoom ">
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/dashboards/contact"
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
                    </Link>
                  </Card>
                  <Row>
                    <Col>
                      {" "}
                      <br></br>
                      <Card className=" opacity-9 ">
                        <CardHeader className="card-header-tab">
                          <div>
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
              <Link to="/dashboards/contact" to="/dashboards/contact">
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
                      <p>Analytics, Advertising &amp; Easy Management Tools.</p>
                      <p>
                        Powerful Advertising Plans: Get Your Website Noticed By
                        The Right Audience.
                      </p>
                      <p> Reach out and begin your online adventure, today!</p>
                    </div>
                  </CardBody>
                </Card>{" "}
              </Link>
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
                  <Link to="/dashboards/contact">  <Button className="btn-shadow-dark btn-wider" color="dark">
                    Direct Message
                  </Button></Link>
                </CardFooter>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
