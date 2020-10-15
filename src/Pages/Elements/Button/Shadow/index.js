import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import ButtonsShadowSolid from "./Examples/Solid";
import ButtonsShadowOutline from "./Examples/Outline";
import ButtonsShadowOutline2x from "./Examples/Outline2x";
import ButtonsShadowDashed from "./Examples/Dashed";
import ButtonsShadowGradients from "./Examples/Gradients";

export default class ButtonsShadow extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Shadow Buttons"
            subheading="These buttons are examples of buttons with drop shadows attached."
            icon="pe-7s-monitor icon-gradient bg-malibu-beach" />
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
                <TabPane tab="Solid" key="1">
                    <ButtonsShadowSolid />
                </TabPane>
                <TabPane tab="Outline" key="2">
                    <ButtonsShadowOutline />
                </TabPane>
                <TabPane tab="Outline 2x" key="3">
                    <ButtonsShadowOutline2x />
                </TabPane>
                <TabPane tab="Dashed" key="4">
                    <ButtonsShadowDashed />
                </TabPane>
                <TabPane tab="Gradients" key="5">
                <   ButtonsShadowGradients />
                </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
