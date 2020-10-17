import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import PageTitleAlt2 from "../../../Layout/AppMain/PageTitleAlt2";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import CRMDashboard1 from "./Examples/Variation1";
import CRMDashboard2 from "./Examples/Variation2";


import { Router, Switch, Route } from "react-router-dom";


//  

export default class HomeDashboard extends Component {
  render() {
    return ( 
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>

          
            <CRMDashboard2 />
                 </CSSTransitionGroup>
      </Fragment>
    )
    
  }
}
