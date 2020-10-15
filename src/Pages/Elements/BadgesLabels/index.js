import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import BadgesExamples from "./Examples/badges";
import LabelsExamples from "./Examples/labels";
import AvatarsExamples from "./Examples/avatars";

export default class BadgesLabels extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Badges & Labels"
            subheading="Badges and labels are used to offer extra small pieces of info for your content."
            icon="pe-7s-voicemail icon-gradient bg-arielle-smile"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Badges" key="1">
              <BadgesExamples />
            </TabPane>
            <TabPane tab="Labels" key="2">
              <LabelsExamples />
            </TabPane>
            <TabPane tab="Avatars" key="3">
              <AvatarsExamples />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
