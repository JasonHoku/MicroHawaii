import React, { Component, Fragment } from "react";
import scriptLoader from 'react-async-script-loader';
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from 'react-router-dom';
import PayPalButton from './PayPalButton';

 
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


const CLIENT = {
  sandbox: process.env.PAYPAL_CLIENT_ID_SANDBOX,
  production: process.env.PAYPAL_CLIENT_ID_PRODUCTION,
};

// PayPal API WIP

const onSuccess = (payment) =>
console.log('Successful payment!', payment);

const onError = (error) =>
console.log('Erroneous payment OR failed to load script!', error);

const onCancel = (data) =>
console.log('Cancelled payment!', data);

// 
export default class ShopElements extends Component {
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
            <Col>
            <center><iframe src="http://localhost:8020/" width="90%" height="1100" frameBorder="0"  > </iframe></center>
           
            </Col>
            </Row>
        
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
