import React, { Component, Fragment } from "react";

import { TransitionGroup } from "react-transition-group";

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
  CardTitle,
  ListGroupItem,
  Card,
  CardBody,
  Form,
  FormGroup,
  Label,
  Container,
  Input,
  FormText,
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


var CLIIP;

export default class ContactElements extends Component {
  constructor(props) {
    super(props);
    this.submitContact = this.submitContact.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.state = {
      activeTab2: "222",
      activeTab1: "11",
      infoCLI: [],
      formName: "",
      formEmail: "",
      formMessage: "",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
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

  componentDidMount() {
    let latitude;
    let longitude;
    const location = window.navigator && window.navigator.geolocation;

    if (location) {
      location.getCurrentPosition((position) => {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      });
    }

    this.state.infoCLI = JSON.stringify({
      timeOpened: new Date(),
      timezone: new Date().getTimezoneOffset() / 60,
      pageon: window.location.pathname,
      referrer: document.referrer,
      previousSites: window.history.length,
      browserName: window.navigator.appName,
      browserEngine: window.navigator.product,
      browserVersion1a: window.navigator.appVersion,
      browserVersion1b: navigator.userAgent,
      browserLanguage: navigator.language,
      browserOnline: navigator.onLine,
      browserPlatform: navigator.platform,
      sizeScreenW: window.screen.width,
      sizeScreenH: window.screen.height,
      sizeInW: window.innerWidth,
      sizeInH: window.innerHeight,
      sizeAvailW: window.screen.availWidth,
      sizeAvailH: window.screen.availHeight,
      latitude,
      longitude,
    });
    this.setState({ isLoading: true });

    fetch("https://api.ipify.org")
      .then((response) => response.text())
      .then((response) => {
        CLIIP = response;
      })
      .then(function (parsedData) {})
      .catch((error) => this.setState({ error, isLoading: false }));
  }

  submitContact() {
    let { formName, formEmail, formMessage } = this.state;

    document.getElementById("contactFormButton").disabled = true;

    if (
      (formName.length !== null && formName.length < 1) ||
      (formEmail.length !== null && formEmail.length < 1) ||
      (formMessage.length !== null && formMessage.length < 1)
    ) {
      alert("You must fill this form entirely.");
      document.getElementById("contactFormButton").disabled = false;
    } else {
      sendRequest();
      document.getElementById("headerMsg").innerHTML = "<br /> Sending... <br /> ";
      async function sendRequest(props) {
        try {
          var useEmulator = true;
          //Emulator local url for development:
          let fetchURL = "";
          const urlLocal = `http://localhost:5111/microhawaii-5f97b/us-central1/processSendEmail`;

          //Live  url:
          const urlLive =
            "https://us-central1-microhawaii-5f97b.cloudfunctions.net/processSendEmail";

          if (useEmulator && window.location.hostname.includes("localhost")) {
            fetchURL = urlLocal;
          } else {
            fetchURL = urlLive;
          }

          //Send Details to Functions
          const rawResponse = await fetch(fetchURL, {
            method: "POST",
            mode: "cors",
            headers: new Headers({
              "Content-Type": "application/json",
              Accept: "application/json",
              HeaderTokens: JSON.stringify({
                //
                // //
                // refreshToken: auth.currentUser.refreshToken,
                // authDomain: auth.currentUser.authDomain,
                // uid: auth.currentUser.uid,
                // name: auth.currentUser.displayName,
                // email: auth.currentUser.email,
                hostname: window.location.hostname,
              }),
            }),
            body: JSON.stringify({
              name: formName,
              contact: formEmail,
              message: formMessage,
              // UUID: auth.currentUser.uuid,
            }),
          });
          const content = await rawResponse.json();
          console.log(content.res);

          if (content.res === "success") {
            alert("Your message has sent successfully!");
            var form = document.getElementById("contactFormID");
            document.getElementById("contactFormID").hidden = true;
            document.getElementById("headerMsg").innerHTML =
              "Thank you!<br /> Your message has sent successfully. <br /> A response can generally be expected within 24hrs";
            // document.getElementById("contactFormThanks").hidden = false;
            document.getElementById("contactFormButton").disabled = true;
          } else {
            alert("The message did not send. Perhaps you've lost internet? \n" + JSON.stringify);
          }
        } catch (error) {
          alert(
            "The message did not send. Perhaps you've lost internet? \n" + JSON.stringify(error)
          );
          document.getElementById("contactFormButton").disabled = false;
        }
      }
    }
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <Helmet>
          <title>MicroHawaii.com Contact Tool</title>
          <meta name="description" content="Easily make contact with MicroHawaii administration." />
          <meta name="theme-color" content="#008f68" />
          <link rel="canonical" href="https://microhawaii.com/dashboards/contact" />
        </Helmet>
        <TransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Container fluid>
            <Row
              style={{
                justifyContent: "center",
              }}
            >
              <Card
                style={{
                  width: "24rem",
                  boxShadow: "0px 0px 0px 5px rgba(50,50,50, .8)",
                }}
              >
                <CardHeader>Contact MicroHawaii.</CardHeader>
                <CardBody>
                  <p id="headerMsg">
                    &nbsp; For any inquirines, comments, concerns or critique, please use this
                    simple form or reach out through the contact method listed here.
                  </p>
                  <br />
                  <p style={{ textAlign: "center" }}>
                    Jason Hoku Levien <br />
                    <a href="mailto:admin@MicroHawaii.com">admin@MicroHawaii.com</a>
                    <br />
                    (808)385-1775
                  </p>
                  <span id="contactFormThanks" hidden>
                    Thank you for your submission! A response can be expected in 0-3 days.
                  </span>
                  <br />
                  <Form id="contactFormID">
                    <FormGroup row>
                      <Label for="examplePassword" sm={3}>
                        Name
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="input"
                          style={{ width: "265px" }}
                          name="formName"
                          value={this.state.formName}
                          onChange={this.handleInputChange}
                          id="formName"
                          placeholder="Who's inquiring?"
                        />
                      </Col>
                    </FormGroup>
                    <br />{" "}
                    <FormGroup row>
                      <Label for="exampleEmail" sm={3}>
                        Email
                      </Label>
                      <Col sm={8}>
                        <Input
                          style={{ width: "265px" }}
                          type="formEmail"
                          name="formEmail"
                          value={this.state.formEmail}
                          onChange={this.handleInputChange}
                          id="formEmail"
                          placeholder="How to best reach you?"
                        />
                      </Col>
                    </FormGroup>
                    <br />
                    <FormGroup row height="1005px">
                      <Label for="formMessage" sm={3}>
                        Info:
                      </Label>
                      <Col sm={8}>
                        <Input
                          type="textarea"
                          name="formMessage"
                          value={this.state.formMessage}
                          onChange={this.handleInputChange}
                          id="formMessage"
                          style={{ width: "265px", height: "170px" }}
                        />
                      </Col>
                    </FormGroup>
                    <br />
                    <center>
                      <FormGroup check row>
                        <Col sm={{ size: 12 }}>
                          <Button
                            id="contactFormButton"
                            disabled={false}
                            onClick={this.submitContact}
                          >
                            Submit
                          </Button>
                        </Col>
                      </FormGroup>
                    </center>
                  </Form>
                </CardBody>
              </Card>
            </Row>
          </Container>
        </TransitionGroup>
      </Fragment>
    );
  }
}
