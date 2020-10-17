import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import classnames from "classnames";
import ReactTable from "react-table";
import { Route } from 'react-router-dom';


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
const data55 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data22 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
];

const data3 = [
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
];

const data2 = [
  { name: "Page A", uv: 4000, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 3000, pv: 1398, amt: 2210 },
  { name: "Page D", uv: 4780, pv: 7908, amt: 2000 },
  { name: "Page D", uv: 2780, pv: 3908, amt: 2000 },
  { name: "Page C", uv: 2000, pv: 6800, amt: 2290 },
  { name: "Page F", uv: 2390, pv: 3800, amt: 2500 },
  { name: "Page E", uv: 2890, pv: 9800, amt: 2181 },
  { name: "Page E", uv: 1890, pv: 4800, amt: 2181 },
  { name: "Page C", uv: 2000, pv: 9800, amt: 2290 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page G", uv: 3490, pv: 4300, amt: 2100 },
  { name: "Page F", uv: 1390, pv: 3800, amt: 1500 },
];

function boxMullerRandom() {
  let phase = true,
    x1,
    x2,
    w;

  return (function () {
    if (phase) {
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);

      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      return x1 * w;
    } else {
      return x2 * w;
    }
  })();
}

function randomData(n = 30) {
  return Array.apply(0, Array(n)).map(boxMullerRandom);
}

const sampleData = randomData(10);
const sampleData2 = randomData(15);
const sampleData3 = randomData(8);
const sampleData4 = randomData(12);
console.info({
  sampleData,
  sampleData2,
  sampleData3,
  sampleData4,
});

export default class CRMDashboard2 extends Component {
  constructor(props) {
    super(props);

    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
      data: makeData(),
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
              <Card className="col-md- opacity-9 " >
                <CardHeader className="card-header-tab">
                  <div className="card text-center card-shadow-focus opacity-9">
                    MicroHawaii Services  </div>
                </CardHeader>
                <CardBody>  <div class="col-md">
                  <div class="col-md">
                    Founded on a five point focus system, mciroHawaii is a team and network of resources, information, abilities and values, youthfully sprouting into the modern world of technology and revolutionary sciences.
    <br></br> <br></br>    Find out more about what patterns are represented here through the free reading on the publishing page, or by making direct contact via the form on this site.
     Maui, Hawaii Based - Technology Initiative
     <div class="col-md">  </div>
                    <br></br> <br></br> </div>

                      A wide variety of skills and resources are offered here to stimulate wealth and health:
     <br></br>
                  <li> Website and Application Design</li> <li>  Custom 3D Modeling/Design Manufacturing</li>
                  <li> Electronic Hardware Design Manufacturing </li><li>Graphic Design &amp; Printing</li>
                  <li> Nutritional Guidance </li><li> Audio Production </li> <li>  Writing/Journalism</li><li> Business Advertising</li><li> Logo Production</li><li>Business Card Design
    </li><li> E-Commerce Services </li><li> Advertising Consultant </li>
                </div>
                </CardBody>
              </Card>
            </Col>

            <Col>

              <Row>

                <Col>



                  <Card className="row-md-6 opacity-9 " >
                    <a href="#" to="#/dashboards/home/contact" activeLinkFromLocation>
                      <CardHeader className="card-header-tab" >
                        <div className="card text-center card-shadow-focus opacity-9">
                          Contact
                    </div>
                      </CardHeader>
                      <CardBody>
                        <div>
                        </div><center> Click here to send a direct message for consultations and questions.</center>
                      </CardBody></a>
                  </Card>
                  <Row >


                    <Col > <br></br>

                    
                    <Card className=" opacity-9 " >
                      <CardHeader className="card-header-tab" >
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
             
             
                  <Card className="opacity-9 " >
                      <CardHeader className="card-header-tab" >
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

          <Row>  <Col>  <Card className="col-md-6 opacity-9 " >
            <CardHeader className="card-header-tab" >
              <div className="card text-center card-shadow-focus opacity-9">
                Website Design Specialist Experiences:
                    </div>
            </CardHeader>
            <CardBody>
              <div>  <p> Over a decade of researching and designing websites. </p><p> </p><p>  Fluent in 7+ Programming languages</p><p>
              </p><p>  E-Commerce Design</p><p>  Application Development</p><p>  Software &amp; Hardware Development</p><p>  Database Management </p><p> Team management & oversight experience for large projects
        </p><p>  Social Media Management</p><p>  API Development </p><p>
                </p>
              </div>
            </CardBody>
          </Card> <br></br>

          </Col>
          </Row>


          <Row>
            <Col sm="12" md="6" xl="4">
              <Card className="card-shadow-primary card-border text-white mb-3" color="primary">
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
