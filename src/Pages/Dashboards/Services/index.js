import React, { Component, Fragment } from "react";

import {TransitionGroup} from "react-transition-group";



// Examples




import CRMDashboard2 from "./ServicesPage";



//

export default class Services extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>


            <CRMDashboard2 />
                 </TransitionGroup>
      </Fragment>
    )

  }
}
