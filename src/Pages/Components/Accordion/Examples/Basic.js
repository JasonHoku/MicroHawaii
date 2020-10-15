import React, { Component } from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  CardTitle,
  Collapse,
  Fade,
  Row,
} from "reactstrap";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

class AccordionsBasicExample extends Component {
  constructor(props) {
    super(props);
    this.onEntering = this.onEntering.bind(this);
    this.onEntered = this.onEntered.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
    this.toggle = this.toggle.bind(this);
    this.toggleAccordion = this.toggleAccordion.bind(this);
    this.toggleCustom = this.toggleCustom.bind(this);
    this.toggleFade = this.toggleFade.bind(this);
    this.state = {
      collapse: false,
      accordion: [true, false, false],
      custom: [true, false],
      status: "Closed",
      fadeIn: true,
      timeout: 300,
    };
  }

  onEntering() {
    this.setState({ status: "Opening..." });
  }

  onEntered() {
    this.setState({ status: "Opened" });
  }

  onExiting() {
    this.setState({ status: "Closing..." });
  }

  onExited() {
    this.setState({ status: "Closed" });
  }

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleAccordion(tab) {
    const prevState = this.state.accordion;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      accordion: state,
    });
  }

  toggleCustom(tab) {
    const prevState = this.state.custom;
    const state = prevState.map((x, index) => (tab === index ? !x : false));

    this.setState({
      custom: state,
    });
  }

  toggleFade() {
    this.setState({ fadeIn: !this.state.fadeIn });
  }

  render() {
    return (
      <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
        transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
        <Row>
          <Col md="6">
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Collapse</CardTitle>
                <Collapse isOpen={this.state.collapse} onEntering={this.onEntering} onEntered={this.onEntered}
                  onExiting={this.onExiting} onExited={this.onExited}>
                  <p>
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident.
                  </p>
                  <p>
                    Donec molestie odio id nisi malesuada, mattis tincidunt
                    velit egestas. Sed non pulvinar risus. Aenean elementum
                    eleifend nunc, pellentesque dapibus arcu hendrerit
                    fringilla. Aliquam in nibh massa. Cras ultricies lorem non
                    enim volutpat, a eleifend urna placerat. Fusce id luctus
                    urna. In sed leo tellus. Mauris tristique leo a nisl
                    feugiat, eget vehicula leo venenatis. Quisque magna metus,
                    luctus quis sollicitudin vel, vehicula nec ipsum. Donec
                    rutrum commodo lacus ut condimentum. Integer vel turpis
                    purus. Etiam vehicula, nulla non fringilla blandit, massa
                    purus faucibus tellus, a luctus enim orci non augue. Aenean
                    ullamcorper nisl urna, non feugiat tortor volutpat in.
                    Vivamus lobortis massa dolor, eget faucibus ipsum varius
                    eget. Pellentesque imperdiet, turpis sed sagittis lobortis,
                    leo elit laoreet arcu, vehicula sagittis elit leo id nisi.
                  </p>
                </Collapse>
                <h6 className="text-center">
                  Current state: {this.state.status}
                </h6>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.toggle}>
                  Toggle
                </Button>
              </CardFooter>
            </Card>
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Fade</CardTitle>
                <Fade timeout={this.state.timeout} in={this.state.fadeIn} tag="h5" className="mt-3">
                  This content will fade in and out as the button is pressed...
                </Fade>
              </CardBody>
              <CardFooter>
                <Button color="primary" onClick={this.toggleFade}>
                  Toggle Fade
                </Button>
              </CardFooter>
            </Card>
          </Col>
          <Col md="6">
            <div id="accordion" className="accordion-wrapper mb-3">
              <Card>
                <CardHeader id="headingOne">
                  <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(0)}
                    aria-expanded={this.state.accordion[0]} aria-controls="collapseOne">
                    <h5 className="m-0 p-0">Collapsible Group Item #1</h5>
                  </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[0]} data-parent="#accordion" id="collapseOne" aria-labelledby="headingOne">
                  <CardBody>
                    1. Anim pariatur cliche reprehenderit, enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader className="b-radius-0" id="headingTwo">
                  <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(1)}
                    aria-expanded={this.state.accordion[1]} aria-controls="collapseTwo">
                    <h5 className="m-0 p-0">Collapsible Group Item #2</h5>
                  </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[1]} data-parent="#accordion" id="collapseTwo">
                  <CardBody>
                    2. Anim pariatur cliche reprehenderit, enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </CardBody>
                </Collapse>
              </Card>
              <Card>
                <CardHeader id="headingThree">
                  <Button block color="link" className="text-left m-0 p-0" onClick={() => this.toggleAccordion(2)}
                    aria-expanded={this.state.accordion[2]} aria-controls="collapseThree">
                    <h5 className="m-0 p-0">Collapsible Group Item #3</h5>
                  </Button>
                </CardHeader>
                <Collapse isOpen={this.state.accordion[2]} data-parent="#accordion" id="collapseThree">
                  <CardBody>
                    3. Anim pariatur cliche reprehenderit, enim eiusmod high
                    life accusamus terry richardson ad squid. 3 wolf moon
                    officia aute, non cupidatat skateboard dolor brunch. Food
                    truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                    tempor, sunt aliqua put a bird on it squid single-origin
                    coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </CardBody>
                </Collapse>
              </Card>
            </div>
            <Card className="main-card mb-3">
              <CardBody>
                <CardTitle>Simple</CardTitle>
                <div id="exampleAccordion" data-children=".item">
                  <div className="item">
                    <Button className="m-0 p-0" color="link" onClick={() => this.toggleCustom(0)}
                      aria-expanded={this.state.custom[0]} aria-controls="exampleAccordion1">
                      Toggle item
                    </Button>
                    <Collapse isOpen={this.state.custom[0]} data-parent="#exampleAccordion" id="exampleAccordion1">
                      <p className="mb-3">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed pretium lorem non vestibulum scelerisque. Proin a
                        vestibulum sem, eget tristique massa. Aliquam lacinia
                        rhoncus nibh quis ornare.
                      </p>
                    </Collapse>
                  </div>
                  <div className="item">
                    <Button className="m-0 p-0" color="link" onClick={() => this.toggleCustom(1)}
                      aria-expanded={this.state.custom[1]} aria-controls="exampleAccordion2">
                      Toggle item 2
                    </Button>
                    <Collapse isOpen={this.state.custom[1]} data-parent="#exampleAccordion" id="exampleAccordion2">
                      <p className="mb-3">
                        Donec at ipsum dignissim, rutrum turpis scelerisque,
                        tristique lectus. Pellentesque habitant morbi tristique
                        senectus et netus et malesuada fames ac turpis egestas.
                        Vivamus nec dui turpis. Orci varius natoque penatibus et
                        magnis dis parturient montes, nascetur ridiculus mus.
                      </p>
                    </Collapse>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CSSTransitionGroup>
    );
  }
}

export default AccordionsBasicExample;
