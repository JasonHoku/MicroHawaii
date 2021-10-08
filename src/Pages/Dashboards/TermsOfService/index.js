import React, { Component, Fragment } from "../../../../node_modules/react";
import {TransitionGroup} from "react-transition-group";



// Examples



import Terms from "./terms";



//

export default class Privacy extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>


            <Terms />
                 </TransitionGroup>
      </Fragment>
    )

  }
}
