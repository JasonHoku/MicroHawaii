import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import PageTitle from "../../../../Layout/AppMain/PageTitle";


// Examples

import FormGrid from "./Examples/FormGrid";
import FormGridFormRow from "./Examples/FormGridFormRow";

class FormElementsLayouts extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Form Layouts"
            subheading="Build whatever layout you need with our ArchitectUI framework."
            icon="pe-7s-graph text-success"/>
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Layout" key="1">
              <FormGridFormRow />
            </TabPane>
            <TabPane tab="Grid" key="2">
              <FormGrid />
            </TabPane>
          </Tabs>
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default FormElementsLayouts;
