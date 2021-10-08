import React, { Component, Fragment } from "react";

import {TransitionGroup} from "react-transition-group";



// Examples




import ProjectElements from "./projects";



//

export default class Projects extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>


            <ProjectElements />
                 </TransitionGroup>
      </Fragment>
    )

  }
}
