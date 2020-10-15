import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import BasicExample from "./Examples/Basic";
import ColorsExample from "./Examples/Colors";
import GridsExample from "./Examples/Grids";
import AlignmentExample from "./Examples/Alignment";
import ProgressExample from "./Examples/Progress";

export default class WidgetsChartBoxes extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Chart Boxes"
            subheading="These boxes can be used to show numbers and data in a breautiful user friendly way."
            icon="pe-7s-star icon-gradient bg-ripe-malin"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Basic" key="1">
              <BasicExample />
            </TabPane>
            <TabPane tab="Colors" key="2">
              <ColorsExample />
            </TabPane>
            <TabPane tab="Grids" key="3">
              <GridsExample />
            </TabPane>
            <TabPane tab="Alignments" key="4">
              <AlignmentExample />
            </TabPane>
            <TabPane tab="Progress Circle" key="5">
              <ProgressExample />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
