import React, { Component, Fragment } from "../../../../node_modules/react";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples



import GalleryElements from "./gallery";



//  

export default class GalleryPage extends Component {
  render() {
    return ( 
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>

          
            <GalleryElements />
                 </CSSTransitionGroup>
      </Fragment>
    )
    
  }
}
