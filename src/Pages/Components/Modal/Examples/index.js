import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import {
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Rodal from "rodal";

import ModalExample from "./Modal";
import ModalBackdrop from "./ModalBackdrop";
import ModalCustomCloseButton from "./ModalCustomCloseButton";
import ModalCustomCloseIcon from "./ModalCustomCloseIcon";
import ModalCustomTimeout from "./ModalCustomTimeout";
import ModalExternal from "./ModalExternal";
import ModalFadeless from "./ModalFadeless";
import ModalNested from "./ModalNested";

class ModalsExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      animation: "zoom",
    };
  }

  show(animation) {
    this.setState({
      animation,
      visible: true,
    });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    let types = [
      "zoom",
      "fade",
      "flip",
      "door",
      "rotate",
      "slideUp",
      "slideDown",
      "slideLeft",
      "slideRight",
    ];
    let buttons = types.map((value, index) => {
      let style = {
        animationDelay: index * 100 + "ms",
        WebkitAnimationDelay: index * 100 + "ms",
      };
      return (
        <Button key={index} className="mb-2 mr-2" color="primary" onClick={this.show.bind(this, value)} style={style}>
          {value} Modal
        </Button>
      );
    });
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row className="text-center">
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Bootstrap 4 Modals</CardTitle>
                  <ModalExample />
                  <ModalCustomCloseButton />
                  <ModalCustomCloseIcon />
                  <ModalCustomTimeout />
                  <ModalExternal />
                  <ModalFadeless />
                  <ModalNested />
                  <div className="divider" />
                  <ModalBackdrop />
                </CardBody>
              </Card>
              <Card className="main-card mb-3">
                <CardBody>
                  <CardTitle>Animated Modals</CardTitle>
                  {buttons}
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Rodal visible={this.state.visible} onClose={this.hide.bind(this)} animation={this.state.animation} showMask={false}>
            <ModalHeader>Modal title</ModalHeader>
            <ModalBody>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat.
              </p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </ModalBody>
            <ModalFooter>
              <Button color="link" onClick={this.hide.bind(this)}>
                Cancel
              </Button>
              <Button color="primary" onClick={this.hide.bind(this)}>
                Do Something
              </Button>
            </ModalFooter>
          </Rodal>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default ModalsExample;
