import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";


// Examples
import Basic2Example from "./Examples/Basic";
import Colors2Example from "./Examples/Colors";

export default class WidgetsChartBoxes2 extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Chart Boxes II"
            subheading="Unlimited styles are available for our chart boxes. Check out our dashboard examples for more."
            icon="pe-7s-plug icon-gradient bg-arielle-smile"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Basic" key="1">
              <Basic2Example />
            </TabPane>
            <TabPane tab="Colors" key="2">
              <Colors2Example />
            </TabPane>
          </Tabs>
        </TransitionGroup>
      </Fragment>
    );
  }
}
