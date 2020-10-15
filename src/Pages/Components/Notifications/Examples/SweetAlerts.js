import React, { Component, Fragment } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import SweetAlert from "sweetalert-react";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody, Button, CardTitle } from "reactstrap";

export default class SweetAlerts extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      show: false,
    };
  }

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>Success</CardTitle>
                  <Button color="success" onClick={() => this.setState({ show: true })}>
                    Show Alert
                  </Button>
                  <SweetAlert title="Good job!" confirmButtonColor="" show={this.state.show}
                    text="You clicked the button!" type="success" onConfirm={() => this.setState({ show: false })}/>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>Danger</CardTitle>
                  <Button color="danger" onClick={() => this.setState({ message34: true })}>
                    Show Alert
                  </Button>
                  <SweetAlert title="Good job!" confirmButtonColor="" show={this.state.message34}
                    text="You clicked the button!" type="error" onConfirm={() => this.setState({ message34: false })}/>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>Info</CardTitle>
                  <Button color="info" onClick={() => this.setState({ message32: true })}>
                    Show Alert
                  </Button>
                  <SweetAlert title="Good job!" confirmButtonColor="" show={this.state.message32}
                    text="You clicked the button!" type="info" onConfirm={() => this.setState({ message32: false })}/>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>Warning</CardTitle>
                  <Button color="warning" onClick={() => this.setState({ message33: true })}>
                    Show Alert
                  </Button>
                  <SweetAlert title="Good job!" confirmButtonColor="" show={this.state.message33}
                    text="You clicked the button!" type="warning" onConfirm={() => this.setState({ message33: false })}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>Basic</CardTitle>
                  <Button color="primary" onClick={() => this.setState({ message1: true })}>
                    Show Alert
                  </Button>
                  <SweetAlert title="" confirmButtonColor="" show={this.state.message1}
                    text="Here's a message!" onConfirm={() => this.setState({ message1: false })}/>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>Title & Text</CardTitle>
                  <Button color="primary" onClick={() => this.setState({ message2: true })}>
                    Show Alert
                  </Button>
                  <SweetAlert title="Here's a message!" confirmButtonColor="" show={this.state.message2}
                    text="It's pretty, isn't it?" onConfirm={() => this.setState({ message2: false })}/>
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>HTML Description</CardTitle>
                  <Button color="primary" onClick={() => this.setState({ message4: true })}>
                    Show Alert
                  </Button>
                  <SweetAlert title="HTML example" show={this.state.message4} confirmButtonColor="" html
                    text={renderToStaticMarkup(
                      <div>
                        You can use <strong>bold text</strong>,
                        <a href="https://colorlib.com/" onClick={(e) => e.preventDefault()}>
                          links
                        </a>
                        and other HTML tags
                      </div>
                    )}
                    onConfirm={() => this.setState({ message4: false })}
                  />
                </CardBody>
              </Card>
            </Col>
            <Col md="3">
              <Card className="mb-3 text-center">
                <CardBody>
                  <CardTitle>Auto Close Timer</CardTitle>
                  <Button color="primary"
                    onClick={() => {
                      this.setState({ message7: true });
                      setTimeout(() => {
                        this.setState({ message7: false });
                      }, 2000);
                    }}>
                    Show Alert
                  </Button>
                  <SweetAlert title="Auto close alert" confirmButtonColor="" show={this.state.message7}
                    text="I will close in 2 seconds." onConfirm={() => this.setState({ message7: true })}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
