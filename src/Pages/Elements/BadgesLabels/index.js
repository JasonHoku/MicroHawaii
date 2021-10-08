import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";


// Examples
import BadgesExamples from "./Examples/badges";
import LabelsExamples from "./Examples/labels";
import AvatarsExamples from "./Examples/avatars";

export default class BadgesLabels extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
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
        </TransitionGroup>
      </Fragment>
    );
  }
}
