import React, { Component, Fragment } from "react";
import { Button, Container, ButtonGroup } from "reactstrap";

import LaddaButton, {
  EXPAND_LEFT,
  EXPAND_RIGHT,
  EXPAND_UP,
  EXPAND_DOWN,
  SLIDE_LEFT,
  SLIDE_RIGHT,
  SLIDE_UP,
  SLIDE_DOWN,
  ZOOM_IN,
  ZOOM_OUT,
} from "react-ladda";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

class ButtonsStandardDashed extends Component {
  state = {
    expLeft: false,
    expRight: false,
    expUp: false,
    expDown: false,
    expContract: false,
    expOverlay: false,
    expSlideLeft: false,
    expSlideRight: false,
    expSlideUp: false,
    expSlideDown: false,
    expZoomIn: false,
    expZoomOut: false,
  };

  constructor(props) {
    super(props);

    this.state = {
      cSelected: [],
    };

    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);
    this.onCheckboxBtnClick = this.onCheckboxBtnClick.bind(this);
  }

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }

  onRadioBtnClick(rSelected) {
    this.setState({ rSelected });
  }

  onCheckboxBtnClick(selected) {
    const index = this.state.cSelected.indexOf(selected);
    if (index < 0) {
      this.state.cSelected.push(selected);
    } else {
      this.state.cSelected.splice(index, 1);
    }
    this.setState({ cSelected: [...this.state.cSelected] });
  }

  render() {
    return (
      <Fragment>
        <Container fluid>
          <Row>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Color States</CardTitle>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="primary">
                    Primary
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="secondary">
                    Secondary
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="success">
                    Success
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="info">
                    Info
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="warning">
                    Warning
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="danger">
                    Danger
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="focus">
                    Focus
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="alternate">
                    Alt
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="light">
                    Light
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="dark">
                    Dark
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" color="link">
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Active State</CardTitle>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="primary">
                    Primary
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="secondary">
                    Secondary
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="success">
                    Success
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="info">
                    Info
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="warning">
                    Warning
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="danger">
                    Danger
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="focus">
                    Focus
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="alternate">
                    Alt
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="light">
                    Light
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="dark">
                    Dark
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" active color="link">
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Disabled State</CardTitle>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="primary">
                    Primary
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="secondary">
                    Secondary
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="success">
                    Success
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="info">
                    Info
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="warning">
                    Warning
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="danger">
                    Danger
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="focus">
                    Focus
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="alternate">
                    Alt
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="light">
                    Light
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="dark">
                    Dark
                  </Button>
                  <Button outline className="mb-2 mr-2 btn-dashed" disabled color="link">
                    link
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Block Level</CardTitle>
                  <Button outline block className="mb-2 mr-2 btn-dashed" size="lg" color="primary">
                    Block Large
                  </Button>
                  <Button outline block className="mb-2 mr-2 btn-dashed" color="primary">
                    Block Normal
                  </Button>
                  <Button outline block className="mb-2 mr-2 btn-dashed" size="sm" color="primary">
                    Block Small
                  </Button>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Wider</CardTitle>
                  <div className="text-center">
                    <Button outline className="btn-wide mb-2 mr-2 btn-dashed" size="lg" color="primary">
                      Wider Large
                    </Button>
                    <Button outline className="btn-wide mb-2 mr-2 btn-dashed" color="primary">
                      Wider Normal
                    </Button>
                    <Button outline className="btn-wide mb-2 mr-2 btn-dashed" size="sm" color="primary">
                      Wider Small
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Sizing</CardTitle>
                  <div className="text-center">
                    <Button outline className="mb-2 mr-2 btn-dashed" size="lg" color="primary">
                      Large
                    </Button>
                    <Button outline className="mb-2 mr-2 btn-dashed" color="primary">
                      Normal
                    </Button>
                    <Button outline className="mb-2 mr-2 btn-dashed" size="sm" color="primary">
                      Small
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Checkbox Buttons</CardTitle>
                  <div className="text-center">
                    <ButtonGroup size="sm" className="mb-2">
                      <Button outline className="btn-dashed" color="primary"
                        onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                        One
                      </Button>
                      <Button outline className="btn-dashed" color="primary"
                        onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>
                        Two
                      </Button>
                      <Button outline className="btn-dashed" color="primary"
                        onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup className="mb-2">
                      <Button outline className="btn-dashed" color="warning"
                        onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                        One
                      </Button>
                      <Button outline className="btn-dashed" color="warning"
                        onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>
                        Two
                      </Button>
                      <Button outline className="btn-dashed" color="warning"
                        onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup size="lg" className="mb-2">
                      <Button outline className="btn-dashed" color="dark"
                        onClick={() => this.onCheckboxBtnClick(1)} active={this.state.cSelected.includes(1)}>
                        One
                      </Button>
                      <Button outline className="btn-dashed" color="dark"
                        onClick={() => this.onCheckboxBtnClick(2)} active={this.state.cSelected.includes(2)}>
                        Two
                      </Button>
                      <Button outline className="btn-dashed" color="dark"
                        onClick={() => this.onCheckboxBtnClick(3)} active={this.state.cSelected.includes(3)}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <p>Selected: {JSON.stringify(this.state.cSelected)}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="6">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Radio Buttons</CardTitle>
                  <div className="text-center">
                    <ButtonGroup size="sm" className="mb-2">
                      <Button outline className="btn-dashed" color="primary"
                        onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
                        One
                      </Button>
                      <Button outline className="btn-dashed" color="primary"
                        onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
                        Two
                      </Button>
                      <Button outline className="btn-dashed" color="primary"
                        onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup className="mb-2">
                      <Button outline className="btn-dashed" color="success"
                        onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
                        One
                      </Button>
                      <Button outline className="btn-dashed" color="success"
                        onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
                        Two
                      </Button>
                      <Button outline className="btn-dashed" color="success"
                        onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <ButtonGroup size="lg" className="mb-2">
                      <Button outline className="btn-dashed" color="alternate"
                        onClick={() => this.onRadioBtnClick(1)} active={this.state.rSelected === 1}>
                        One
                      </Button>
                      <Button outline className="btn-dashed" color="alternate"
                        onClick={() => this.onRadioBtnClick(2)} active={this.state.rSelected === 2}>
                        Two
                      </Button>
                      <Button outline className="btn-dashed" color="alternate" 
                        onClick={() => this.onRadioBtnClick(3)} active={this.state.rSelected === 3}>
                        Three
                      </Button>
                    </ButtonGroup>
                    <div className="divider" />
                    <p>Selected: {this.state.rSelected}</p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Loading Buttons</CardTitle>
                  <Row className="text-center">
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-primary" loading={this.state.expLeft}
                        onClick={() => this.toggle("expLeft")} data-style={EXPAND_LEFT}>
                        Expand Left
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-secondary" loading={this.state.expRight}
                        onClick={() => this.toggle("expRight")} data-style={EXPAND_RIGHT}>
                        Expand Right
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-focus" loading={this.state.expZoomIn}
                        onClick={() => this.toggle("expZoomIn")} data-style={ZOOM_IN}>
                        Zoom In
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-alternate" loading={this.state.expZoomOut}
                        onClick={() => this.toggle("expZoomOut")} data-style={ZOOM_OUT}>
                        Zoom Out
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-light" loading={this.state.expSlideLeft}
                        onClick={() => this.toggle("expSlideLeft")} data-style={SLIDE_LEFT}>
                        Slide Left
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-dark" loading={this.state.expSlideRight}
                        onClick={() => this.toggle("expSlideRight")} data-style={SLIDE_RIGHT}>
                        Slide Right
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-danger" loading={this.state.expSlideUp}
                        onClick={() => this.toggle("expSlideUp")} data-style={SLIDE_UP}>
                        Slide Up
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-warning" loading={this.state.expSlideDown}
                        onClick={() => this.toggle("expSlideDown")} data-style={SLIDE_DOWN}>
                        Slide Down
                      </LaddaButton>
                    </Col>
                  </Row>
                  <Row className="text-center">
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-success" loading={this.state.expUp}
                        onClick={() => this.toggle("expUp")} data-style={EXPAND_UP}>
                        Expand Up
                      </LaddaButton>
                    </Col>
                    <Col md="3">
                      <LaddaButton className="mb-2 mr-2 btn btn-dashed btn-outline-info" loading={this.state.expDown}
                        onClick={() => this.toggle("expDown")} data-style={EXPAND_DOWN}>
                        Expand Down
                      </LaddaButton>
                    </Col>
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default ButtonsStandardDashed;
