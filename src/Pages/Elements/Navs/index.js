import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import NavsVertical from "./Examples/NavVertical";
import NavsHorizontal from "./Examples/NavHorizontal";
import NavsGrid from "./Examples/NavGrid";

export default class NavigationExample extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Navigation Menus"
            subheading="Navigation menus are one of the basic building blocks for any web or mobile app."
            icon="pe-7s-photo-gallery icon-gradient bg-mean-fruit"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Grid Menus" key="1">
              <NavsGrid />
            </TabPane>
            <TabPane tab="Vertical Menus" key="2">
              <NavsVertical />
            </TabPane>
            <TabPane tab="Horizontal Menus" key="3">
              <NavsHorizontal />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
