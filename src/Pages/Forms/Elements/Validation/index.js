import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitle from "../../../../Layout/AppMain/PageTitle";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples

import FormValidationExample from "./Examples/FormValidation";
import FormsFeedback from "./Examples/Feedback";

class FormElementsValidation extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Form Validation"
            subheading="Inline validation is very easy to implement using the ArchitectUI Framework."
            icon="lnr-picture text-danger"/>
          <Tabs defaultActiveKey="1"
            renderTabBar={() => <ScrollableInkTabBar />}
            renderTabContent={() => <TabContent />}>
            <TabPane tab="Advanced" key="1">
              <FormValidationExample />
            </TabPane>
            <TabPane tab="Feedback" key="2">
              <FormsFeedback />
            </TabPane>
          </Tabs>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default FormElementsValidation;
