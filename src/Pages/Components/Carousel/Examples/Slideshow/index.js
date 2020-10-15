import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import SimpleSlider from "./SimpleSlider";
import MultipleItems from "./MultipleItems";
import CenterMode from "./CenterMode";
import Responsive from "./Responsive";
import VariableWidth from "./VariableWidth";
import DarkImg from "./DarkImg";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class SlideshowExample extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Full width Slider</CardTitle>
                  <SimpleSlider />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Multiple Items</CardTitle>
                  <MultipleItems />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Center Mode</CardTitle>
                  <CenterMode />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Variable Width</CardTitle>
                  <VariableWidth />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Responsive</CardTitle>
                  <Responsive />
                </CardBody>
              </Card>
            </Col>
            <Col md="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Inverted + Images</CardTitle>
                  <DarkImg />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default SlideshowExample;
