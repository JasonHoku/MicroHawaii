import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import { Typeahead } from "react-bootstrap-typeahead";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import options from "./Examples/DummyData";

export default class FormTypeahead extends React.Component {
  state = {
    multiple: false,
  };

  render() {
    const { multiple } = this.state;
    return (
      <Fragment>
        <PageTitle heading="Typeahead"
          subheading="Create beautiful suggestion inputs for React form elements."
          icon="pe-7s-plug icon-gradient bg-arielle-smile"/>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Basic</CardTitle>
                  <Typeahead id="typeID2" labelKey="name" multiple={multiple} options={options} placeholder="Choose a state..."/>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Pre-Populate</CardTitle>
                  <Typeahead id="typeID" clearButton defaultSelected={options.slice(0, 5)}
                    labelKey="name" multiple options={options} placeholder="Choose a state..."/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
