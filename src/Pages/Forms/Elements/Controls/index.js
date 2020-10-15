import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import FormsDefault from "./Examples/FormBasic";
import InputGroups from "./Examples/InputGroup/InputGroups";

class FormElementsControls extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Form Controls"
            subheading="Wide selection of forms controls, using the Bootstrap 4 code base, but built with React."
            icon="pe-7s-display1 icon-gradient bg-premium-dark"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Basic" key="1">
              <FormsDefault />
            </TabPane>
            <TabPane tab="Input Groups" key="2">
              <InputGroups />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default FormElementsControls;
