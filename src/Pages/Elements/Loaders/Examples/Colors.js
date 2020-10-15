import React, { Component, Fragment } from "react";
import Loader from "react-loaders";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Row, Col, Card, CardBody, CardTitle, Container } from "reactstrap";

class LoadersColorsExample extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Container fluid>
            <Row>
              <Col md="12">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Colors</CardTitle>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#3f6ad8" type="ball-pulse" />
                      </div>
                      <p>ball-pulse</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#78C3FB" type="ball-grid-pulse" />
                      </div>
                      <p>ball-grid-pulse</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#444054" type="ball-clip-rotate" />
                      </div>
                      <p>ball-clip-rotate</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#794c8a" type="ball-scale-multiple" />
                      </div>
                      <p>ball-scale-multiple</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#f65ca2" type="square-spin" />
                      </div>
                      <p>square-spin</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#fd7e14" type="ball-pulse-rise" />
                      </div>
                      <p>ball-pulse-rise</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#f7b924" type="ball-rotate" />
                      </div>
                      <p>ball-rotate</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#3ac47d" type="cube-transition" />
                      </div>
                      <p>cube-transition</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#16E0BD" type="ball-zig-zag" />
                      </div>
                      <p>ball-zig-zag</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#28b0cd" type="ball-zig-zag-deflect" />
                      </div>
                      <p>ball-zig-zag-deflect</p>
                    </div>
                    <div className="font-icon-wrapper float-left mr-3 mb-3">
                      <div className="loader-wrapper d-flex justify-content-center align-items-center">
                        <Loader color="#c4cfda" type="ball-triangle-path" />
                      </div>
                      <p>ball-triangle-path</p>
                    </div>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default LoadersColorsExample;
