import React, { Component, Fragment } from "react";

import {TransitionGroup} from "react-transition-group";

import CRMDashboard2 from "./Examples/Variation2";


export default class HomeDashboard extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <CRMDashboard2 />
        </TransitionGroup>
      </Fragment>
    );
  }
}
