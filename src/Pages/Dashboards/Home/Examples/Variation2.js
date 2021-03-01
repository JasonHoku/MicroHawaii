import React, {
  Component,
  Fragment,
  useState,
  useEffect,
  useRef,
  lazy,
} from "react";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

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
  CardTitle,
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

import avatar1 from "../../../../assets/utils/images/avatars/1.jpg";
import servicespic from "../../../../assets/images/thumbs/services.webp";
import aboutpic from "../../../../assets/images/thumbs/about.png";
import shoppic from "../../../../assets/images/thumbs/shop.webp";
import fireAd1 from "../../../../images/ads/FirePricing3.png";
import fireAd2 from "../../../../images/ads/FirePricing2.png";
import fireAd3 from "../../../../images/ads/FirePricing1.png";

import Slideshow from "./HomeSlideshow";

import { Helmet } from "react-helmet";

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";

import { useCollectionData } from "react-firebase-hooks/firestore";

export default function CRMDashboard2() {
  const [setDate, setsetDate] = useState(
    String(
      new Date().toLocaleTimeString([], {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    )
  );
  const firestore = firebase.firestore();

  const messagesRef = firestore.collection("events");

  const query2 = messagesRef.orderBy("EventDate");

  const [messages2] = useCollectionData(query2, { idField: "id" });

  function EventDataSelectedDate(props) {
    const auth = firebase.auth();
    const firestore = firebase.firestore();
    const { EventDate, EventTitle, id } = props.message;
    const dex = props.index;

    const messageClass = "sent";

    for (var i = 0; i < messages2.length; i++) {
      let gotDate = new Date(EventDate);
      let are24hFrom0 = new Date(new Date(setDate));
      are24hFrom0.setDate(are24hFrom0.getDate(setDate) - 7);
      var are24hFrom1 = new Date(setDate);
      are24hFrom1.setDate(are24hFrom1.getDate(setDate) + 1);
      if (gotDate >= are24hFrom0) {
        if (gotDate <= are24hFrom1) {
          return (
            <>
              <div
                style={{ width: "100%" }}
                className={`message ${messageClass}`}
              >
                <br />
                <p
                  style={{ textAlign: "left", width: "100%" }}
                  className="pchat"
                >
                  {EventTitle}
                  <br />
                  <div style={{ textAlign: "left" }}>
                    <b>{EventDate}</b>
                  </div>
                </p>
              </div>
            </>
          );
        } else {
          return null;
        }
      } else {
        return null;
      }
    }
    return null;
  }

  return (
    <Fragment>
      <CSSTransitionGroup
        component="div"
        transitionName="MainAnimation"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnterTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}
      >
        <center>
          <Helmet>
            <title>MicroHawaii.com Dashboard: Unleash Your Web</title>
            <meta
              name="description"
              content="Software development, e-commerce, education, training, tools and services."
            />
            <meta name="theme-color" content="#008f68" />
            <link
              rel="canonical"
              href="https://microhawaii.com/dashboards/home"
            />
          </Helmet>
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
                <CardBody>
                  <h2>
                    MicroHawaii brings expert web developers to modern toolsets
                    and training to fit the needs of any online experience.
                  </h2>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Card
              style={{
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                justifyContent: "center",
                width: "80%",
              }}
            >
              <CardBody
                style={{
                  width: "100%",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  justifyContent: "center",
                  background:
                    "linear-gradient(0.25turn, #1030DDDD, #FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD,#FFFFFFDD, #1030DDDD)",
                }}
              >
                <CardTitle>
                  <h4>Web Tools Training</h4>
                </CardTitle>
                <center>
                  <br />
                  <div
                    className="videoDivide"
                    style={{ width: "80%", maxWidth: "600px" }}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/playlist?list=PLWGSXq68FTb1BvHxzWGvx63ZDpNZ12xuG"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      style={{
                        boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      }}
                    ></iframe>
                  </div>
                </center>
              </CardBody>
            </Card>
          </Row>
          <br />
          <Row>
            <Col mx-auto="true" style={{ width: "31rem" }}>
              <Card
                className="mb-3 main-card"
                style={{
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                }}
              >
                <CardBody>
                  <h2>Recent Events:</h2>
                  {messages2 &&
                    messages2.map((msg, index) => (
                      <EventDataSelectedDate
                        index={index}
                        key={msg.id}
                        message={msg}
                      />
                    ))}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br />
          <Row style={{ justifyContent: "center" }}>
            <Card
              style={{
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                justifyContent: "center",
                borderRadius: "50px",
                width: "95%",
              }}
            >
              <CardBody
                style={{
                  width: "100%",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  justifyContent: "center",
                  borderRadius: "50px",
                }}
              >
                <center>
                  <CardTitle>
                    <h3> Custom Designed SEO Strategies</h3>
                  </CardTitle>
                  <span className="zoom">
                    {" "}
                    <Slideshow />
                  </span>
                </center>
              </CardBody>
            </Card>
          </Row>
          <br />
          <Row>
            <Col
              mx-auto="true"
              className=" opacity-9 zoom"
              style={{ width: "12rem" }}
            >
              <Card
                mx-auto="true"
                style={{
                  width: "11rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                }}
              >
                <a href="/dashboards/services">
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
            <Col mx-auto="true" className=" opacity-9  zoom">
              <a href="/dashboards/shop">
                <Card
                  mx-auto="true"
                  style={{
                    width: "11rem",
                    boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                  }}
                >
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      Shop
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
            <Col mx-auto="true" className=" opacity-9  zoom">
              <a href="/dashboards/projects">
                <Route path="/dashboards/projects" />
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
                </Card>
                <br></br>
              </a>
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
                <h4 style={{ textAlign: "left" }}>
                  Web Architecture with MicroHawaii
                </h4>
              </CardHeader>
              <CardBody>
                  MicroHawaii is a local tech startup, specializing in providing
                web focused technologies, strategy, and solutions to businesses
                of all shapes and sizes.
                <br></br> <br></br>
                 This website is an{" "}
                <a href="https://github.com/JasonHoku/MicroHawaii">
                  {" "}
                  open-source{" "}
                </a>
                cross platform application that services authentication
                alongside Google's powerful and generous
                <a href="https://firebase.google.com/"> FireBase</a>{" "}
                technologies to accomidate the needs of any online experience.{" "}
                <br />
                <br></br>
                <center>
                  <img
                    style={{
                      maxWidth: "275px",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      margin: "5px",
                    }}
                    width="100%"
                    src={fireAd1}
                  ></img>
                  <img
                    style={{
                      maxWidth: "275px",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      margin: "5px",
                    }}
                    width="100%"
                    src={fireAd2}
                  ></img>
                  <img
                    style={{
                      maxWidth: "275px",
                      boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                      margin: "5px",
                    }}
                    width="100%"
                    src={fireAd3}
                  ></img>
                </center>
                <br />
                <a href="/dashboards/services">
                  Gain ultimate control and expert assistance through
                  MicroHawaii today.{" "}
                </a>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row style={{ width: "100%", justifyContent: "center" }}>
          <center>
            <Col className=" opacity-9  zoom">
              <a href="/dashboards/projects">
                <Card>
                  <CardHeader className="card-header-tab">
                    <div className="card text-center card-shadow-focus opacity-9">
                      Join The MicroHawaii Network
                    </div>{" "}
                    <div> </div>
                  </CardHeader>
                  <CardBody>
                    <center>Learn More &amp; Get Connected</center>
                  </CardBody>
                </Card>
              </a>
            </Col>
          </center>
        </Row>
        <br />
        <Row style={{ justifyContent: "center" }}>
          {" "}
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
                  className="dropdown-menu-header-inner"
                  style={{ justifyContent: "center", background: "#3333FFCC" }}
                >
                  <div className="menu-header-content">
                    <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                      <div className="avatar-icon">
                        <img src="/assets/images/logo.png" alt="Avatar 5" />
                      </div>
                    </div>
                    <div>
                      <h5 className="menu-header-title">PrettyCoolPattern</h5>
                      <h6 className="menu-header-subtitle">
                        Arts &amp; Entertainment
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="text-center d-block">
                <a href="https://PrettyCoolPattern.com">
                  <Button className="btn-shadow-dark btn-wider" color="dark">
                    Visit Website
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </Col>{" "}
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
                  className="dropdown-menu-header-inner"
                  style={{ justifyContent: "center", background: "#3333DDCC" }}
                >
                  <div className="menu-header-content">
                    <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                      <div className="avatar-icon">
                        <img
                          style={{ position: "relative", top: "-1px" }}
                          src="/images/ponologo.png"
                          alt="Avatar 5"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="menu-header-title">PonoMap.com</h5>
                      <h6 className="menu-header-subtitle">
                        Generating Sustainable Data for Hawaii
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="text-center d-block">
                <a href="https://PonoMap.com">
                  <Button className="btn-shadow-dark btn-wider" color="dark">
                    Visit Website
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </Col>
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
                  className="dropdown-menu-header-inner"
                  style={{ justifyContent: "center", background: "#3333CCCC" }}
                >
                  <div className="menu-header-content">
                    <div className="avatar-icon-wrapper mb-3 avatar-icon-xl">
                      <div className="avatar-icon">
                        <img
                          src="/images/mauiartprintslogo.webp"
                          alt="Avatar 5"
                        />
                      </div>
                    </div>
                    <div>
                      <h5 className="menu-header-title">MauiArtPrints</h5>
                      <h6 className="menu-header-subtitle">
                        Hawaiian Arts Gallery
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="text-center d-block">
                <a href="https://MauiArtPrints.com">
                  <Button className="btn-shadow-dark btn-wider" color="dark">
                    Visit Website
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </Col>
        </Row>
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
                      <h6 className="menu-header-subtitle">Founder / Owner</h6>
                    </div>
                  </div>
                </div>
              </div>
              <CardFooter className="text-center d-block">
                <a href="/dashboards/contact">
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
