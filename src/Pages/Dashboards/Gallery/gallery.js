import React, { Component, Fragment } from "../../../../node_modules/react";

import {TransitionGroup} from "react-transition-group";
import CarouselBSExample from "./Carousel";
import { Helmet } from "react-helmet";

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
  CardTitle,
} from "../../../../node_modules/reactstrap";

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
        <TransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Helmet>
            <title>MicroHawaii.com Artwork Gallery</title>
            <meta
              name="description"
              content="Discover arts produced by MicroHawaii."
            />
            <link
              rel="canonical"
              href="https://microhawaii.com/home"
            />
          </Helmet>
          <Row
            style={{
              alignContent: "center",
              justifyContent: "center",
              marginTop: "-15px",
              marginBottom: "-15px",

              textAlign: "center",
            }}
            width="100%"
          >
            <CardTitle
              style={{
                textAlign: "center",
                borderRadius: "25px",
                backgroundColor: "#440066BB",
                paddingRight: "10px",
                paddingLeft: "10px",
                fontWeight: "900",
                color: "whitesmoke",
                fontSize: "36px",
              }}
            >
              Visual Gallery
            </CardTitle>
          </Row>
          <Row style={{ justifyContent: "center" }}>
            <Col width="100%" style={{ maxWidth: "750px" }}>
              <Card>
                <CardBody>
                  <h4>
                    An image is said to contain a thousand words, but how should
                    one contain a thousand images?
                  </h4>
                  <center>
                    <CarouselBSExample />
                  </center>
                  <center>
                    ← Slides →
                    <br /> 100 Random Selects <br />
                    <br />
                  </center>
                  <h5>
                    MicroHawaii has produced over 1,200 logos, icons, textures,
                    and other digital graphics.
                  </h5>
                  <p>Here rests a collection of some, growing over time.</p>{" "}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <br></br>
          <Row>
            <Col xs="6" sm="4" md="4" xl="3">
              <Card>
                <CardBody>
                  {" "}
                  Instagram Gallery:
                  <br></br>
                  <a href="http://instagram.com/jasonlevien">@jasonlevien </a>
                </CardBody>
              </Card>{" "}
            </Col>

            <Col style={{ marginTop: "10px" }} xs="6" sm="4" md="3" xl="4">
              <Card>
                <CardBody>
                  Free HD Wallpapers Download:
                  <br></br> <br></br>
                  <li>
                    {" "}
                    <a href="https://drive.google.com/drive/folders/0BwrXo2gcPpKOeXBzejk1YXNCYWs">
                      Desktop{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://drive.google.com/drive/folders/0BwrXo2gcPpKOUkhQMUZqVHpfNzgs">
                      Mobile{" "}
                    </a>
                  </li>
                </CardBody>
              </Card>{" "}
            </Col>

            <Col style={{ marginTop: "15px" }} xs="7" sm="4" md="4" xl="5">
              <CardLink href="/contact">
                <Card>
                  <CardHeader>Contact</CardHeader>
                  <CardBody>
                    For commission inquiries, suggestions or commentary reach
                    out through the contact page.
                  </CardBody>
                </Card>
              </CardLink>
            </Col>
          </Row>
          <br></br>
        </TransitionGroup>
      </Fragment>
    );
  }
}
