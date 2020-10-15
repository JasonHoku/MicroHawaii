import React, { Component, Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";


import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples


 

import ProjectElements from "./projects";



//  

export default class Projects extends Component {
  render() {
    return ( 
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>

          
            <ProjectElements />
                 </CSSTransitionGroup>
      </Fragment>
    )
    
  }
}
