import React, { Component, Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

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



export default class MusicElements extends Component {
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
        <TransitionGroup component="div" transitionName="TabsAnimation"
          transitionAppear={true} transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>




          <Row>
            <Col xs="4" sm="4" md="4" xl="3">
              <Card>
                <CardBody> Over 40 MicroHawaii musical publishingings can be found on either YouTube or SoundCloud:
    <br></br>  </CardBody>
              </Card>  </Col>


            <Col xs="6" sm="6" md="6" xl="3">
              <br></br>
              <Card>
                <CardBody>SoundCloud Player:
    <br></br>
                                <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/359400835&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>

                </CardBody>
              </Card>  </Col>


            <Col xs="12" sm="12" md="8" xl="6">
              <br></br><br></br>
              <Card>
                <CardBody>
                  <center>
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/videoseries?list=PLWGSXq68FTb2TWN6m3PMvSD7oysOjknCV" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </center>
</CardBody>
              </Card>
            </Col>


          </Row>
          <br></br>

        </TransitionGroup>

      </Fragment>
    );
  }
}
