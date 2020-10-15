import React, { Fragment } from "react";

import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Collapse,
  Row,
  FormGroup,
  Label,
  Input,
  FormFeedback,
  FormText,
} from "reactstrap";

export default class WizardStep3 extends React.Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <Fragment>
        <div className="form-wizard-content">
          <div id="accordion" className="accordion-wrapper mb-3">
            <Card>
              <CardHeader id="headingOne">
                <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)}
                  aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                  <h3 className="form-heading">
                    Account Information
                    <p>Enter your user informations below</p>
                  </h3>
                </Button>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                <CardBody>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleEmail2">Email</Label>
                        <Input type="email" name="email" id="exampleEmail2" placeholder="with a placeholder"/>
                      </FormGroup>
                    </Col>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
                      </FormGroup>
                    </Col>
                  </Row>
                  <FormGroup>
                    <Label for="exampleAddress">Address</Label>
                    <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleAddress2">Address 2</Label>
                    <Input type="text" name="address2" id="exampleAddress2" placeholder="Apartment, studio, or floor"/>
                  </FormGroup>
                  <Row form>
                    <Col md={6}>
                      <FormGroup>
                        <Label for="exampleCity">City</Label>
                        <Input type="text" name="city" id="exampleCity" />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleState">State</Label>
                        <Input type="text" name="state" id="exampleState" />
                      </FormGroup>
                    </Col>
                    <Col md={2}>
                      <FormGroup>
                        <Label for="exampleZip">Zip</Label>
                        <Input type="text" name="zip" id="exampleZip" />
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader className="b-radius-0" id="headingTwo">
                <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)}
                  aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                  <h3 className="form-heading">
                    Credit Card Informations
                    <p>Enter your user informations below</p>
                  </h3>
                </Button>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                <CardBody>
                  <FormGroup>
                    <Label for="exampleEmail3">Plain Text (Static)</Label>
                    <Input plaintext>Some plain text/ static value</Input>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail4">Email</Label>
                    <Input type="email" name="email" id="exampleEmail4" placeholder="with a placeholder"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Password</Label>
                    <Input type="password" name="password" id="examplePassword" placeholder="password placeholder"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleUrl">Url</Label>
                    <Input type="url" name="url" id="exampleUrl" placeholder="url placeholder"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleNumber">Number</Label>
                    <Input type="number" name="number" id="exampleNumber" placeholder="number placeholder"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDatetime">Datetime</Label>
                    <Input type="datetime" name="datetime" id="exampleDatetime" placeholder="datetime placeholder"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleDate">Date</Label>
                    <Input type="date" name="date" id="exampleDate" placeholder="date placeholder"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleTime">Time</Label>
                    <Input type="time" name="time" id="exampleTime" placeholder="time placeholder"/>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleColor">Color</Label>
                    <Input type="color" name="color" id="exampleColor" placeholder="color placeholder"/>
                  </FormGroup>
                </CardBody>
              </Collapse>
            </Card>
            <Card>
              <CardHeader id="headingThree">
                <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)}
                  aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                  <h3 className="form-heading">
                    Personal Details
                    <p>Enter your user informations below</p>
                  </h3>
                </Button>
              </CardHeader>
              <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                <CardBody>
                  <FormGroup>
                    <Label for="exampleEmail5">Input without validation</Label>
                    <Input />
                    <FormFeedback>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail6">Valid input</Label>
                    <Input valid />
                    <FormFeedback valid>
                      Sweet! that name is available
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Invalid input</Label>
                    <Input invalid />
                    <FormFeedback>
                      Oh noes! that name is already taken
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail7">Input without validation</Label>
                    <Input />
                    <FormFeedback tooltip>
                      You will not be able to see this
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="exampleEmail">Valid input</Label>
                    <Input valid />
                    <FormFeedback valid tooltip>
                      Sweet! that name is available
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                  <FormGroup>
                    <Label for="examplePassword">Invalid input</Label>
                    <Input invalid />
                    <FormFeedback tooltip>
                      Oh noes! that name is already taken
                    </FormFeedback>
                    <FormText>
                      Example help text that remains unchanged.
                    </FormText>
                  </FormGroup>
                </CardBody>
              </Collapse>
            </Card>
          </div>
        </div>
      </Fragment>
    );
  }
}
