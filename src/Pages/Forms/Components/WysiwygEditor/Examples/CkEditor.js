import React, { Component, Fragment } from "react";

// import CKEditor from "react-ckeditor-component";
import CKEditor from "ckeditor4-react";

import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody, CardTitle } from "reactstrap";

export default class FormCkEditorEditor extends Component {
  constructor(props) {
    super(props);

    //State initialization
    this.state = {
      content: "Hello World",
    };
    this.setContent = this.setContent.bind(this);
  }

  //------ Test for race condition ------ //
  setContent() {
    this.setState({
      content: "Hello World " + Math.random(),
    });
  }

  onChange(evt) {}

  onBlur(evt) {}

  afterPaste(evt) {}

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <Row>
            <Col md="12">
              <Card>
                <CardBody>
                  <CardTitle>CkEditor</CardTitle>
                  <CKEditor data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
