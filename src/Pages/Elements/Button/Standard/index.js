import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import PageTitle from "../../../../Layout/AppMain/PageTitle";


// Examples
import ButtonsStandardSolid from "./Examples/Solid";
import ButtonsStandardOutline from "./Examples/Outline";
import ButtonsStandardOutline2x from "./Examples/Outline2x";
import ButtonsStandardDashed from "./Examples/Dashed";
import ButtonsStandardGradients from "./Examples/Gradients";

export default class ButtonsStandard extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <PageTitle heading="Standard Buttons"
            subheading="Wide selection of buttons that feature different styles for backgrounds, borders and hover options!"
            icon="pe-7s-plane icon-gradient bg-tempting-azure" />
          <Tabs defaultActiveKey="1" renderTabBar={() => <ScrollableInkTabBar />} renderTabContent={() => <TabContent />}>
            <TabPane tab="Solid" key="1">
              <ButtonsStandardSolid />
            </TabPane>
            <TabPane tab="Outline" key="2">
              <ButtonsStandardOutline />
            </TabPane>
            <TabPane tab="Outline 2x" key="3">
              <ButtonsStandardOutline2x />
            </TabPane>
            <TabPane tab="Dashed" key="4">
              <ButtonsStandardDashed />
            </TabPane>
            <TabPane tab="Gradients" key="5">
              <ButtonsStandardGradients />
            </TabPane>
          </Tabs>
        </TransitionGroup>
      </Fragment>
    );
  }
}
