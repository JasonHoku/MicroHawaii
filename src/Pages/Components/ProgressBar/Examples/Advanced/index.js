import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import { Progress } from "react-sweet-progress";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  Container,
} from "reactstrap";

import Circle from "react-circle";

export default class ProgressBarAdvancedExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      percent: props.percent || 55,
    };
  }

  onDecClick = () => {
    this.setState({
      percent: this.state.percent - 10 > 0 ? this.state.percent - 10 : 0,
    });
  };

  onIncClick = () => {
    this.setState({
      percent: this.state.percent + 10 < 100 ? this.state.percent + 10 : 100,
    });
  };

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Container fluid>
            <Row>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Colors</CardTitle>
                    <Progress className="mb-3" percent={this.state.percent} theme={this.props.theme}
                      width={this.props.width} strokeWidth={this.props.strokeWidth}/>

                    <Progress className="mb-3" percent={this.state.percent} status="success"
                      theme={this.props.theme} width={this.props.width} strokeWidth={this.props.strokeWidth}/>

                    <Progress percent={this.state.percent} status="error" theme={this.props.theme}
                      width={this.props.width} strokeWidth={this.props.strokeWidth}/>
                    <div className="text-center mt-3">
                      <ButtonGroup>
                        <Button onClick={this.onDecClick} color="primary">
                          -
                        </Button>
                        <Button onClick={this.onIncClick} color="primary">
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Colors</CardTitle>
                    <Progress percent={this.state.percent} width={this.props.width} strokeWidth={this.props.strokeWidth}
                      theme={{
                        error: {
                          symbol: this.state.percent + "%",
                          trailColor: "pink",
                          color: "red",
                        },
                        default: {
                          symbol: this.state.percent + "%",
                          trailColor: "lightblue",
                          color: "blue",
                        },
                        active: {
                          symbol: this.state.percent + "%",
                          trailColor: "yellow",
                          color: "orange",
                        },
                        success: {
                          symbol: this.state.percent + "%",
                          trailColor: "lime",
                          color: "green",
                        },
                      }}/>
                    <div className="text-center mt-3">
                      <ButtonGroup>
                        <Button onClick={this.onDecClick} color="primary">
                          -
                        </Button>
                        <Button onClick={this.onIncClick} color="primary">
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Progress Circle Alternate</CardTitle>
                    <Row className="text-center mb-3">
                      <Col>
                        <Circle animate={true} // Boolean: Animated/Static progress
                          animationDuration="1s" // String: Length of animation
                          responsive={false} // Boolean: Make SVG adapt to parent size
                          size="100" // String: Defines the size of the circle.
                          lineWidth="25" // String: Defines the thickness of the circle's stroke.
                          progress="25" // String: Update to change the progress and percentage.
                          progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
                          bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                          textColor="#6b778c" // String: Color of percentage text color.
                          textStyle={{
                            font: "bold 4rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                          }}
                          percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                          roundedStroke={true} // Boolean: Rounded/Flat line ends
                          showPercentage={true} // Boolean: Show/hide percentage.
                          showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                        />
                      </Col>
                      <Col>
                        <Circle
                          animate={true} // Boolean: Animated/Static progress
                          animationDuration="1s" // String: Length of animation
                          responsive={false} // Boolean: Make SVG adapt to parent size
                          size="100" // String: Defines the size of the circle.
                          lineWidth="25" // String: Defines the thickness of the circle's stroke.
                          progress="25" // String: Update to change the progress and percentage.
                          progressColor="#d92550" // String: Color of "progress" portion of circle.
                          bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                          textColor="#d92550" // String: Color of percentage text color.
                          textStyle={{
                            font: "bold 3rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                          }}
                          percentSpacing={10} // Number: Adjust spacing of "%" symbol and number.
                          roundedStroke={true} // Boolean: Rounded/Flat line ends
                          showPercentage={true} // Boolean: Show/hide percentage.
                          showPercentageSymbol={true} // Boolean: Show/hide only the "%" symbol.
                        />
                      </Col>
                      <Col>
                        <Circle
                          className="ml-3"
                          animate={true} // Boolean: Animated/Static progress
                          animationDuration="1s" // String: Length of animation
                          responsive={false} // Boolean: Make SVG adapt to parent size
                          size="60" // String: Defines the size of the circle.
                          lineWidth="20" // String: Defines the thickness of the circle's stroke.
                          progress="56" // String: Update to change the progress and percentage.
                          progressColor="rgb(76, 154, 255)" // String: Color of "progress" portion of circle.
                          bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                          textColor="#6b778c" // String: Color of percentage text color.
                          percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                          roundedStroke={true} // Boolean: Rounded/Flat line ends
                          showPercentage={false} // Boolean: Show/hide percentage.
                          showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                        />
                      </Col>
                      <Col>
                        <Circle
                          className="ml-3"
                          animate={true} // Boolean: Animated/Static progress
                          animationDuration="1s" // String: Length of animation
                          responsive={false} // Boolean: Make SVG adapt to parent size
                          size="70" // String: Defines the size of the circle.
                          lineWidth="30" // String: Defines the thickness of the circle's stroke.
                          progress="47" // String: Update to change the progress and percentage.
                          progressColor="#f7b924" // String: Color of "progress" portion of circle.
                          bgColor="#ecedf0" // String: Color of "empty" portion of circle.
                          textColor="#ccc" // String: Color of percentage text color.
                          textStyle={{
                            font: "bold 6rem Helvetica, Arial, sans-serif", // CSSProperties: Custom styling for percentage.
                          }}
                          percentSpacing={5} // Number: Adjust spacing of "%" symbol and number.
                          roundedStroke={true} // Boolean: Rounded/Flat line ends
                          showPercentage={true} // Boolean: Show/hide percentage.
                          showPercentageSymbol={false} // Boolean: Show/hide only the "%" symbol.
                        />
                      </Col>
                    </Row>
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Circles</CardTitle>
                    <Row className="text-center mb-3">
                      <Col>
                        <Progress percent={this.state.percent} theme={this.props.theme} type="circle"
                          width={90} strokeWidth={this.props.strokeWidth}/>
                      </Col>
                      <Col>
                        <Progress percent={this.state.percent} status="success" theme={this.props.theme}
                          type="circle" width={92} strokeWidth={this.props.strokeWidth}/>
                      </Col>
                      <Col>
                        <Progress percent={this.state.percent} status="error" theme={this.props.theme}
                          type="circle" width={90} strokeWidth={this.props.strokeWidth}/>
                      </Col>
                    </Row>
                    <div className="text-center mt-3">
                      <ButtonGroup>
                        <Button onClick={this.onDecClick} color="primary">
                          -
                        </Button>
                        <Button onClick={this.onIncClick} color="primary">
                          +
                        </Button>
                      </ButtonGroup>
                    </div>
                  </CardBody>
                </Card>
                <Card className="main-card mb-3">
                  <CardBody>
                    <CardTitle>Circle variations</CardTitle>
                    <Row className="text-center">
                      <Col>
                        <Progress type="circle" width={52} percent={62} />
                      </Col>
                      <Col>
                        <Progress type="circle" width={72} percent={23} />
                      </Col>
                      <Col>
                        <Progress type="circle" strokeWidth={2} percent={70} status="error" width={92}/>
                      </Col>
                      <Col>
                        <Progress type="circle" percent={34} width={112} />
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
