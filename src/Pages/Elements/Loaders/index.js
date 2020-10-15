import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import LoadersBasicExample from "./Examples/Basic";
import LoadersColorsExample from "./Examples/Colors";
import LoadersAdvancedExample from "./Examples/Advanced";

export default class LoadersExample extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Loading Indicators"
            subheading="Use these loading indicators in combination with other elements to show current app status to users."
            icon="pe-7s-moon icon-gradient bg-amy-crisp"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Basic" key="1">
              <LoadersBasicExample />
            </TabPane>
            <TabPane tab="Colors" key="2">
              <LoadersColorsExample />
            </TabPane>
            <TabPane tab="Advanced" key="3">
              <LoadersAdvancedExample />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
