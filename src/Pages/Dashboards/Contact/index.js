import React, { Component, Fragment } from "react";

import {TransitionGroup} from "react-transition-group";


// Examples


import ContactElements from "./contact";




//

export default class Contact extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>


            <ContactElements />
                 </TransitionGroup>
      </Fragment>
    )

  }
}
