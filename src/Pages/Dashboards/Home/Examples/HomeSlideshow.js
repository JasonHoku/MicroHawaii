import React from "react";
import { Slide } from "react-slideshow-image";
import "./slide.css";

import {
  Row,
  Col,
  Button,
  UncontrolledButtonDropdown,
  DropdownToggle,
  ListGroup,
  ListGroupItem,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  CardHeader,
  NavLink,
  TabContent,
  TabPane,
  Progress,
  CardFooter,
  ButtonGroup,
  CardLink,
} from "reactstrap";

const Slideshow = () => {
  return (
    <div style={{ width: window.innerWidth * 0.8 }}>
      <Slide easing="ease">
        <Container fluid>
          <br />
          <Row
            style={{
              backgroundColor: "transparent",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                justifyContent: "center",
                float: "center",
                maxWidth: window.innerWidth * 0.8,
                alignContent: "center",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              }}
            >
              <span style={{ textAlign: "center" }}>
                <b>&nbsp;Utilize Expert Web Tools</b>
              </span>
              <img
                src="/images/Analytics1.png"
                style={{
                  width: window.innerWidth * 0.7,
                }}
              ></img>
            </Card>
          </Row>
          <br />
        </Container>

        <Container fluid>
          <br />
          <Row
            style={{
              backgroundColor: "transparent",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                justifyContent: "center",
                float: "center",
                maxWidth: window.innerWidth * 0.8,
                alignContent: "center",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              }}
            >
              <span style={{ textAlign: "center" }}>
                <b>&nbsp;Gain Powerful Insights</b>
              </span>
              <img
                src="/images/Analytics2.png"
                style={{
                  width: window.innerWidth * 0.7,
                  zIndex: 9,
                }}
              ></img>
            </Card>
          </Row>
          <br />
        </Container>
        <Container fluid>
          <br />
          <Row
            style={{
              backgroundColor: "transparent",
              justifyContent: "center",
            }}
          >
            <Card
              style={{
                justifyContent: "center",
                float: "center",
                maxWidth: window.innerWidth * 0.8,
                alignContent: "center",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
              }}
            >
              <span style={{ textAlign: "center" }}>
                <b>&nbsp;Get Your Content Noticed</b>
              </span>
              <img
                src="/images/Analytics3.png"
                style={{
                  width: window.innerWidth * 0.7,
                }}
              ></img>
            </Card>
          </Row>{" "}
          <br />
        </Container>
      </Slide>
    </div>
  );
};

export default Slideshow;
