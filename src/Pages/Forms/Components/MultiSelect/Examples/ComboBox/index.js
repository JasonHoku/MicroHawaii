import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import { Combobox } from "react-widgets";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

library.add(faSpinner);

class FormComboBoxBasic extends React.Component {
  render() {
    let colors = ["orange", "red", "blue", "green", "cyan", "purple"];

    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Basic</CardTitle>
                  <Row form>
                    <Col md={6}>
                      <Combobox busy />
                    </Col>
                    <Col md={6}>
                      <Combobox busy
                        busySpinner={
                          <FontAwesomeIcon spin className="text-danger" icon="spinner"/>
                        }/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Dropup</CardTitle>
                  <Row form>
                    <Col md={12}>
                      <Combobox dropUp data={["orange", "red", "blue", "purple"]}/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Disabled</CardTitle>
                  <Row form>
                    <Col md={6}>
                      <Combobox disabled data={colors} defaultValue={"orange"}/>
                    </Col>
                    <Col md={6}>
                      <Combobox data={colors} defaultValue={"orange"} disabled={["red", "purple"]}/>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default FormComboBoxBasic;
