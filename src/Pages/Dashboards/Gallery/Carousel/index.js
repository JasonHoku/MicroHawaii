import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

import CarouselDefault from "./Carousel";
import CustomExample from "./CustomTag";

const CarouselBSExample = (props) => {
  return (
    <Fragment>
      <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>

<Col xs="12" sm="9" md="9" xl="7">
            <Card>
              <CardBody>
                  <CarouselDefault />
              </CardBody>
            </Card>
            </Col>

      </TransitionGroup>
    </Fragment>
  );
};

export default CarouselBSExample;
