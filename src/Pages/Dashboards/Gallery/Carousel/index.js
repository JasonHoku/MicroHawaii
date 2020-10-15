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

<Col xs="12" sm="9" md="9" xl="7">
            <Card>
              <CardBody>
                  <CarouselDefault />
              </CardBody>
            </Card>
            </Col>

      </CSSTransitionGroup>
    </Fragment>
  );
};

export default CarouselBSExample;
