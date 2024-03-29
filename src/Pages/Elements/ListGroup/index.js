import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import PageTitle from "../../../Layout/AppMain/PageTitle";


// Examples
import ListGroupExampleBasic from "./Examples/Basic/";
import ListGroupExampleAdvanced from "./Examples/Advanced";

export default class ListGroupExample extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="List Groups"
            subheading="These can be used with other components and elements to create stunning and unique new elements for your UIs."
            icon="pe-7s-paint icon-gradient bg-sunny-morning"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />} >
            <TabPane tab="Advanced" key="1">
              <ListGroupExampleAdvanced />
            </TabPane>
            <TabPane tab="Basic" key="2">
              <ListGroupExampleBasic />
            </TabPane>
          </Tabs>
        </TransitionGroup>
      </Fragment>
    );
  }
}
