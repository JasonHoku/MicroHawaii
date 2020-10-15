import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import ButtonsHorizontalIcons from "./Examples/Horizontal";
import ButtonsVerticalIcons from "./Examples/Vertical";

export default class ButtonsIcons extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false}transitionLeave={false}>
          <PageTitle
            heading="Buttons with Icons"
            subheading="These buttons examples contain icons with or without labels attached."
            icon="pe-7s-hourglass icon-gradient bg-ripe-malin" />
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />}>
            <TabPane tab="Horizontal Icons" key="1">
              <ButtonsHorizontalIcons />
            </TabPane>
            <TabPane tab="Vertical Icons" key="2">
              <ButtonsVerticalIcons />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
