import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import { SelectList } from "react-widgets";

class FormSelectListBasic extends React.Component {
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
                      <SelectList busy />
                    </Col>
                    <Col md={6}>
                      <SelectList data={colors} defaultValue={["orange", "blue"]}/>
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
                      <SelectList disabled data={colors} defaultValue={["orange", "blue"]}/>
                    </Col>
                    <Col md={6}>
                      <SelectList  data={colors} defaultValue={["orange", "blue"]} disabled={["red", "purple"]}/>
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

export default FormSelectListBasic;
