import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import PageTitle from "../../../../Layout/AppMain/PageTitle";


// Examples

import FormValidationExample from "./Examples/FormValidation";
import FormsFeedback from "./Examples/Feedback";

class FormElementsValidation extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
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
        </TransitionGroup>
      </Fragment>
    );
  }
}

export default FormElementsValidation;
