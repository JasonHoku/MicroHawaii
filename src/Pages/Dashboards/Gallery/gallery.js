import React, { Component, Fragment } from "../../../../node_modules/react";
import scriptLoader from '../../../../node_modules/react-async-script-loader';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import classnames from "../../../../node_modules/classnames";
import ReactTable from "../../../../node_modules/react-table";
import { Route } from '../../../../node_modules/react-router-dom';
import CarouselBSExample from "./Carousel";
 
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
  CardLink,
  CardImg,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
} from "../../../../node_modules/reactstrap";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  AreaChart,
  Area,
  Tooltip,
} from "../../../../node_modules/recharts";

import PerfectScrollbar from "../../../../node_modules/react-perfect-scrollbar";

import {
  faAngleUp,
  faDotCircle,
  faAngleDown,
  faStrikethrough,
} from "../../../../node_modules/@fortawesome/free-solid-svg-icons";

import { Sparklines, SparklinesCurve } from "../../../../node_modules/react-sparklines";

import { makeData } from "../../Tables/DataTables/Examples/utils";

const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

export default class GalleryElements extends Component {
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
        <CSSTransitionGroup component="div" transitionName="TabsAnimation"
          transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>

          <Row>      
            <Col xs="5" sm="5" md="4" xl="4">
<Card>
  <CardBody><p>An image is said to contain a thousand words, but how should one contain a thousand images?
  </p> <p>
  microHawaii has produced over 1,200 logos, icons, textures, and graphics.
    </p> <p>
    Here you shall find a collection of some, growing over time.
    </p> </CardBody>
</Card>
            </Col>

            <Col xs="7" sm="7" md="7" xl="7">
              <Card>
                <CardBody>
                  <center>
<CarouselBSExample  /></center>
<center>← Custom Display →</center>
</CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>


          <Row>            
          <Col xs="4" sm="4" md="4" xl="3">
            <Card>
  <CardBody> Instagram Gallery:
    <br></br><a href="http://instagram.com/jasonlevien">http://instagram.com/jasonlevien </a>
  </CardBody>
</Card>  </Col> 


            <Col xs="4" sm="4" md="3" xl="4">
            <Card>
  <CardBody>Wallpapers for download:
    <br></br><a href="https://drive.google.com/drive/folders/0BwrXo2gcPpKOeXBzejk1YXNCYWs"> 
    Desktop </a>
    <br></br> <a href="https://drive.google.com/drive/folders/0BwrXo2gcPpKOUkhQMUZqVHpfNzgs"> 
    Mobile </a>
  </CardBody>
</Card>  </Col> 


            <Col xs="4" sm="4" md="4" xl="5">
            <a href="#/dashboards/contact">
            <Card><CardHeader>
              Contact
            </CardHeader>
  <CardBody>
    MicroHawaii eagerly responds to all persons within 1-2 days.
    <br></br>
     For commission inquiries, suggestions or commentary reach out through the <a href="#/dashboards/contact"> contact page.</a>
  </CardBody>
</Card></a>
            </Col>


          </Row>
          <br></br>
     
        </CSSTransitionGroup>
        
      </Fragment>
    );
  }
}
