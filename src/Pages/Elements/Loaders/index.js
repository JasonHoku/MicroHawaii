import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";


// Examples
import LoadersBasicExample from "./Examples/Basic";
import LoadersColorsExample from "./Examples/Colors";
import LoadersAdvancedExample from "./Examples/Advanced";

export default class LoadersExample extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
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
        </TransitionGroup>
      </Fragment>
    );
  }
}
