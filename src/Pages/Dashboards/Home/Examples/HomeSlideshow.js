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
    <div
      style={{
        maxWidth: "775px",
      }}
    >
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
                maxWidth: "750px",
                width: "90%",
                alignContent: "center",
                boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                textAlign:"center"
              }}
            >
              <span style={{ textAlign: "center" }}>
                <b>&nbsp;Utilize Expert Web Tools</b>
              </span>
              <img
                src="/images/Analytics1.png"
                style={{
                  maxWidth: "750px",
                  width: "90%",
                  justifySelf:"center",
                  alignSelf:"center",
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
                width: "90%",
                maxWidth: "750px",
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
                  maxWidth: "750px",
                  width: "90%",
                  justifySelf:"center",
                  alignSelf:"center",
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
                maxWidth: "750px",
                width: "90%",
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
                  justifySelf:"center",
                  alignSelf:"center",
                  maxWidth: "750px",
                  width: "90%",
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
