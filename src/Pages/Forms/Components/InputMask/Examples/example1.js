import React, { Fragment } from "react";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  InputGroup,
  InputGroupAddon,
} from "reactstrap";

import InputMask from "react-input-mask";

import { faCalendarAlt, faPhone } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class FormInputMaskExample extends React.Component {
  state = {
    value: "",
    mask: "9999-9999-9999-9999",
  };

  onChange = (event) => {
    var value = event.target.value;
    var newState = {
      mask: "9999-9999-9999-9999",
      value: value,
    };
    if (/^3[47]/.test(value)) {
      newState.mask = "9999-999999-99999";
    }
    this.setState(newState);
  };

  render() {
    return (
      <Fragment>
        <Row>
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Phone Numbers</CardTitle>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                  </InputGroupAddon>
                  <InputMask className="form-control" mask="+4\9 99 999 99" maskChar={null}/>
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faPhone} />
                    </div>
                  </InputGroupAddon>/>
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Dates</CardTitle>
                <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                  </InputGroupAddon>
                  <InputMask className="form-control" mask="99-99-9999" defaultValue="27-10-2018"/>
                </InputGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div className="input-group-text">
                      <FontAwesomeIcon icon={faCalendarAlt} />
                    </div>
                  </InputGroupAddon>
                  <InputMask className="form-control" mask="99/99/9999" placeholder="Enter birthdate"/>
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Credit Card</CardTitle>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <div className="input-group-text">@</div>
                  </InputGroupAddon>
                  <InputMask className="form-control" {...this.state} onChange={this.onChange}/>
                </InputGroup>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default FormInputMaskExample;
