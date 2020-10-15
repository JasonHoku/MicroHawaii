import React, { Component, Fragment } from "react";
import { Button, Container } from "reactstrap";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class BadgesExamples extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Container fluid>
            <Row>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>With Buttons</CardTitle>
                    <Button className="mb-2 mr-2" color="primary">
                      Primary
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="secondary">
                      Secondary
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="success">
                      Success
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="info">
                      Info
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="warning">
                      Warning
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="danger">
                      Danger
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="focus">
                      Focus
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="alternate">
                      Alt
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="light">
                      Light
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="dark">
                      Dark
                      <span className="badge badge-pill badge-light">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 1
                      <span className="badge badge-pill badge-primary">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 2
                      <span className="badge badge-pill badge-success">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 3
                      <span className="badge badge-pill badge-danger">6</span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 4
                      <span className="badge badge-pill badge-warning">6</span>
                    </Button>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Badge Dots</CardTitle>
                    <Row className="text-center">
                      <Col md="4">
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-primary">
                          Primary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-secondary">
                          Secondary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-success">
                          Success
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-info">
                          Info
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-warning">
                          Warning
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-danger">
                          Danger
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-focus">
                          Focus
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-alternate">
                          Alt
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-sm badge-dark">
                          Dark
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-2 mr-2 badge badge-dot badge-primary">
                          Primary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-secondary">
                          Secondary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-success">
                          Success
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-info">
                          Info
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-warning">
                          Warning
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-danger">
                          Danger
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-focus">
                          Focus
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-alternate">
                          Alt
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dark">
                          Dark
                        </div>
                      </Col>
                      <Col md="4">
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-primary">
                          Primary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-secondary">
                          Secondary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-success">
                          Success
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-info">
                          Info
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-warning">
                          Warning
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-danger">
                          Danger
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-focus">
                          Focus
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-alternate">
                          Alt
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-lg badge-dark">
                          Dark
                        </div>
                      </Col>
                    </Row>
                    <div className="divider" />
                    <Row>
                      <Col md="12">
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-primary">
                          Primary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-secondary">
                          Secondary
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-success">
                          Success
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-info">
                          Info
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-warning">
                          Warning
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-danger">
                          Danger
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-focus">
                          Focus
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-alternate">
                          Alt
                        </div>
                        <div className="mb-2 mr-2 badge badge-dot badge-dot-xl badge-dark">
                          Dark
                        </div>
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Badge Dots Buttons</CardTitle>
                    <Button className="mb-2 mr-2" color="primary">
                      Primary
                      <span className="badge badge-secondary badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="secondary">
                      Secondary
                      <span className="badge badge-primary badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="success">
                      Success
                      <span className="badge badge-success badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="info">
                      Info
                      <span className="badge badge-info badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="warning">
                      Warning
                      <span className="badge badge-warning badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="danger">
                      Danger
                      <span className="badge badge-focus badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="focus">
                      Focus
                      <span className="badge badge-danger badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="alternate">
                      Alt
                      <span className="badge badge-alternate badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="light">
                      Light
                      <span className="badge badge-success badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="dark">
                      Dark
                      <span className="badge badge-primary badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 1
                      <span className="badge badge-primary badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 2
                      <span className="badge badge-success badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 3
                      <span className="badge badge-danger badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                    <Button className="mb-2 mr-2" color="link">
                      Link 4
                      <span className="badge badge-warning badge-dot badge-dot-lg"> {" "} </span>
                    </Button>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Icon Buttons with Badges</CardTitle>
                    <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> {" "} </i>
                      <span className="badge badge-warning badge-dot badge-dot-sm"> {" "} </span>
                    </button>
                    <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="lnr-license btn-icon-wrapper font-size-xlg"> {" "} </i>
                      <span className="badge badge-primary badge-dot badge-dot"> {" "} </span>
                    </button>
                    <button className="mb-2 mr-4 btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="lnr-map btn-icon-wrapper font-size-xlg"> {" "} </i>
                      <span className="badge badge-success badge-dot badge-dot-lg"> {" "} </span>
                    </button>
                    <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="pe-7s-settings btn-icon-wrapper font-size-xlg"> {" "} </i>
                      <span className="badge badge-pill badge-warning">2</span>
                    </button>
                    <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="lnr-license btn-icon-wrapper font-size-xlg"> {" "} </i>
                      <span className="badge badge-pill badge-primary">3</span>
                    </button>
                    <button className="mb-2 mr-2 btn-icon btn-icon-only btn btn-link btn-sm">
                      <i className="lnr-map btn-icon-wrapper font-size-xlg"> {" "} </i>
                      <span className="badge badge-pill badge-success">5</span>
                    </button>
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Icon Buttons Grids I</CardTitle>
                    <div className="grid-menu grid-menu-3col">
                      <Row className="no-gutters">
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical btn-square btn-transition" outline color="primary">
                            <i className="lnr-license btn-icon-wrapper"> </i>
                            <span className="badge badge-primary badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                            Primary
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical btn-square btn-transition" outline color="secondary">
                            <i className="lnr-map btn-icon-wrapper"> </i>
                            <span className="badge badge-success badge-dot badge-dot-inside"> {" "} </span>
                            Secondary
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical btn-square btn-transition" outline color="success">
                            <i className="lnr-music-note btn-icon-wrapper"> </i>
                            <span className="badge badge-danger badge-dot badge-dot-inside"> {" "} </span>
                            Success
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical btn-square  br-tr btn-transition" outline color="info" >
                            <i className="lnr-heart btn-icon-wrapper"> </i>
                            <span className="badge badge-warning badge-dot badge-dot-inside"> {" "} </span>
                            Info
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical btn-square  br-bl btn-transition" outline color="warning">
                            <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                            <span className="badge badge-primary badge-dot badge-dot-inside"> {" "} </span>
                            Warning
                          </Button>
                        </Col>
                        <Col xl="4" sm="6">
                          <Button className="btn-icon-vertical btn-square btn-transition" outline color="danger">
                            <i className="lnr-lighter btn-icon-wrapper"> </i>
                            <span className="badge badge-success badge-dot badge-dot-inside"> {" "} </span>
                            Danger
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Icon Buttons Grids II</CardTitle>
                    <div className="grid-menu grid-menu-2col">
                      <Row className="no-gutters">
                        <Col sm="6">
                          <Button className="btn-icon-vertical btn-transition" outline color="link">
                            <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                            <span className="badge badge-info badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                            Primary
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button className="btn-icon-vertical btn-transition " outline color="link">
                            <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                            <span className="badge badge-info badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                            Secondary
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button className="btn-icon-vertical btn-transition " outline color="link">
                            <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                            <span className="badge badge-alternate badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                            Success
                          </Button>
                        </Col>
                        <Col sm="6">
                          <Button className="btn-icon-vertical btn-transition " outline color="link">
                            <i className="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                            <span className="badge badge-warning badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                            Info
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Icon Buttons Grids III</CardTitle>
                    <Row>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="primary">
                          <i className="lnr-license btn-icon-wrapper"> </i>
                          <span className="badge badge-primary badge-dot badge-dot-sm badge-dot-inside"> {" "} </span>
                          Primary
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="secondary">
                          <i className="lnr-map btn-icon-wrapper"> </i>
                          <span className="badge badge-success badge-dot badge-dot-sm badge-dot-inside"> {" "} </span>
                          Secondary
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="success">
                          <i className="lnr-music-note btn-icon-wrapper"> </i>
                          <span className="badge badge-danger badge-dot badge-dot-inside"> {" "} </span>
                          Success
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="info">
                          <i className="lnr-heart btn-icon-wrapper"> </i>
                          <span className="badge badge-warning badge-dot badge-dot-inside"> {" "} </span>
                          Info
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="warning">
                          <i className="lnr-magic-wand btn-icon-wrapper"> </i>
                          <span className="badge badge-info badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                          Warning
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="danger">
                          <i className="lnr-lighter btn-icon-wrapper"> </i>
                          <span className="badge badge-dark badge-dot badge-dot-lg badge-dot-inside"> {" "} </span>
                          Danger
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="focus">
                          <i className="lnr-dice btn-icon-wrapper"> </i>
                          <span className="badge badge-focus badge-dot badge-dot-sm badge-dot-inside"> {" "} </span>
                          Focus
                        </Button>
                      </Col>
                      <Col xl="4" sm="6">
                        <Button className="btn-icon-vertical mb-3 btn-transition btn-block" outline color="dark">
                          <i className="lnr-location btn-icon-wrapper"> </i>
                          <span className="badge badge-alternate badge-dot badge-dot-inside"> {" "}</span>
                          Dark
                        </Button>
                      </Col>
                    </Row>
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

export default BadgesExamples;
