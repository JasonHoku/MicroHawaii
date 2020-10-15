import React, { Fragment, Component } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Card, CardTitle, CardBody } from "reactstrap";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Splitter from "m-react-splitters";

export default class SplitLayout extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <div>
            <div className="app-inner-layout rm-sidebar">
              <div className="app-inner-layout__header-boxed pb-0">
                <div className="app-inner-layout__header text-white bg-plum-plate">
                  <PageTitle heading="Split Layout"
                    subheading="Build chat layouts or any other kind of layout easily with ArchitectUI."
                    icon="pe-7s-umbrella icon-gradient bg-sunny-morning"/>
                </div>
              </div>
              <div className="app-inner-layout__wrapper">
                <div className="app-inner-layout__content p-3">
                  <Splitter position="horizontal" primaryPaneMaxHeight="80%" primaryPaneMinHeight={0}
                    primaryPaneHeight="400px" dispatchResize={true} postPoned={false}>
                    <Splitter position="vertical" primaryPaneMaxWidth="80%" primaryPaneMinWidth="20%"
                      primaryPaneWidth="400px" dispatchResize={true} postPoned={false}>
                      <div className="p-2 he-100">
                        <Card color="primary" className="card-border he-100">
                          <CardBody className="center-elem">
                            <CardTitle className="text-white mx-auto mb-0 font-size-lg text-capitalize font-weight-normal">
                              Left Split Panel
                            </CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                      <div className="p-2 he-100">
                        <Card className="card-border he-100">
                          <CardBody className="center-elem">
                            <CardTitle className="mx-auto mb-0 font-size-lg text-capitalize font-weight-normal">
                              Right Split Panel
                            </CardTitle>
                          </CardBody>
                        </Card>
                      </div>
                    </Splitter>
                    <div className="p-2 he-100">
                      <Card color="dark" className="card-border he-100">
                        <CardBody className="center-elem">
                          <CardTitle className="text-white mx-auto mb-0 font-size-lg text-capitalize font-weight-normal">
                            Bottom Full Width Split Panel
                          </CardTitle>
                        </CardBody>
                      </Card>
                    </div>
                  </Splitter>
                </div>
              </div>
            </div>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
