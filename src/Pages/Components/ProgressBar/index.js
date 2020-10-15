import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import ProgressBarExample from "./Examples/Basic/";
import ProgressBarAdvancedExample from "./Examples/Advanced/";

export default class ProgressBarsExamples extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Progress Bar"
            subheading="You can use the progress bars on their own or in combination with other widgets."
            icon="pe-7s-filter icon-gradient bg-grow-early"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Basic" key="1">
              <ProgressBarExample />
            </TabPane>
            <TabPane tab="Advanced" key="2">
              <ProgressBarAdvancedExample />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
