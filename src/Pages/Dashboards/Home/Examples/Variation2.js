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
  Input,
  CardHeader,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup, CardLink,
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

import Main from "../../../Main";
import CenterMode from "../../../Components/Carousel/Examples/Slideshow/CenterMode";

import bgimg1 from "../../../../assets/images/bg1.jpg"; // gives image path

import bgimg2 from "../../../../assets/images/bg2.jpg"; // gives image path

import bgimg3 from "../../../../assets/images/bg3.jpg"; // gives image path
import { relative } from "path";

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
export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component="span"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Row> <p> </p> <p> </p> <p> </p>
            <Col>

            <CardLink href="https://www.prettycoolpattern.com">
              <Card
                style={{
                  width: "26rem",
                  backgroundColor: "transparent",
                  opacity: 100,
                }}
              >
                <CardHeader
                  style={{
                    backgroundColor: "transparent",
                    opacity: 100,
                  }}
                >
                  <h3>Welcome to MicroHawaii.com</h3>
                </CardHeader>
                <CardBody>
                  {" "}
                  &nbsp;&nbsp;&nbsp;&nbsp; Offspring of prettycoolpattern.com , soon to be propagated more fully.
                  <p>

                  </p>
                </CardBody>
              </Card></CardLink>
              </Col><Col>
              <p> </p> <p> </p> <p> </p> 
            </Col>
          </Row>
          <Row   style={{
                  width: "26rem",
                  backgroundColor: "transparent",
                  opacity: 100,
                  paddingTop: 75,
                  left: clientWidth / 3,
                }}></Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
