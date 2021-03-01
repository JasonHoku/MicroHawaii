import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitleAlt2 from "../../../Layout/AppMain/PageTitleAlt2";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import CRMDashboard1 from "./Examples/Variation1";
import CRMDashboard2 from "./Examples/Variation2";

import { Helmet } from "react-helmet";


export default class HomeDashboard extends Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <PageTitleAlt2
            heading="MicroHawaii Design, Engineering &amp; Services | Website Application Development, Music, Graphic Arts, Apparel, Discussion &amp; Modern Arts Collective Non-Profit of West Maui, Hawaii"
            subheading="MicroHawaii Design, Engineering &amp; Services | Website Application Development, Music, Graphic Arts, Apparel, Discussion &amp; Modern Arts Collective Non-Profit of West Maui, Hawaii"
          />
          <CRMDashboard2 />
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
