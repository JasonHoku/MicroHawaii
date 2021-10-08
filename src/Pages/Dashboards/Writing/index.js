import React, { Component, Fragment } from "../../../../node_modules/react";
import {TransitionGroup} from "react-transition-group";



// Examples


import WritingElements from "./writing";




//

export default class GalleryPage extends Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>


            <WritingElements />
                 </TransitionGroup>
      </Fragment>
    )

  }
}
