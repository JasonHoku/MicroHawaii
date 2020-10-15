import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import CarouselDefault from "./Carousel";
import CustomExample from "./CustomTag";

const CarouselBSExample = (props) => {
  return (
    <Fragment>
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <Row className="slick-slider-md">
          <Col lg="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Basic</CardTitle>
                <CarouselDefault />
              </CardBody>
            </Card>
          </Col>
          <Col lg="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Custom Tags</CardTitle>
                <CustomExample />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default CarouselBSExample;
