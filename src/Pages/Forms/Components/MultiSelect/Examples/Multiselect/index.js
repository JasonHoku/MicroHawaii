import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { Multiselect } from "react-widgets";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

let colors = ["Orange", "Red", "Blue", "Purple"];

library.add(faSpinner);

class FormMultiSelectWidget extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      value: [],
      people: colors,
    };
  }

  handleCreate(name) {
    let { people, value } = this.state;

    let newOption = {
      name,
      id: people.length + 1,
    };

    this.setState({
      value: [...value, newOption], // select new option
      people: [...people, newOption], // add new option to our dataset
    });
  }

  render() {
    let { value, people } = this.state;
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>DropUp</CardTitle>
                  <Row form>
                    <Col md={12}>
                      <Multiselect dropUp
                        data={["orange", "red", "blue", "purple"]}/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Loading States</CardTitle>
                  <Row form>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="exampleEmail">Default Loading Icon</Label>
                        <Multiselect busy />
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="examplePassword">FontAwesome Icons</Label>
                        <Multiselect busy
                          busySpinner={
                            <FontAwesomeIcon spin className="text-primary" icon="spinner"/>
                          }/>
                      </FormGroup>
                    </Col>
                    <Col md={4}>
                      <FormGroup>
                        <Label for="examplePassword">Regular Input</Label>
                        <Input type="text" name="address2" id="examplePassword" placeholder="Apartment, studio, or floor"/>
                      </FormGroup>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Add Tags</CardTitle>
                  <Row form>
                    <Col md={12}>
                      <Multiselect data={people} value={value} allowCreate="onFilter" onCreate={(name) => this.handleCreate(name)}
                        onChange={(value) => this.setState({ value })} textField="name"/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Disabled</CardTitle>
                  <Multiselect className="mb-3" disabled data={colors} defaultValue={["orange", "blue"]}/>
                  <Multiselect data={colors} defaultValue={["orange", "blue"]} disabled={["red", "purple"]}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default FormMultiSelectWidget;
