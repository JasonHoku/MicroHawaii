import React, { Fragment } from "react";
import MegaMenuFooter from "./Components/FooterMegaMenu";
import FooterDots from "./Components/FooterDots";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import collections from "../../assets/images/collections.png"; // gives image path

import productsandservices from "../../assets/images/productsandservices.png"; // gives image path

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
  CardImg,
  CardBody,
  CardHeader,
  CardLink,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "reactstrap";
import { fontFamily } from "../../Pages/Components/GuidedTours/Examples/settings";
import { faBold } from "@fortawesome/free-solid-svg-icons";
import { faMedium } from "@fortawesome/free-brands-svg-icons";
class AppContent extends React.Component {
  componentDidMount() {
    //doing some asynchronous call here which dispatches an action
    //and updates the state -> which inturn renders the component again.
    //I want component to be rendered after this happended. Is it possible ?
  }
  render() {
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
    return (
      <Fragment>
        <CSSTransitionGroup
          component="span"
          transitionName="fade-appear"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
   
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default AppContent;
