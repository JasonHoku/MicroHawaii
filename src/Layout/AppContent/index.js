import React, { Fragment } from "react";

import {TransitionGroup} from "react-transition-group";


class AppContent extends React.Component {
  render() {
    return (
      <Fragment>
        <TransitionGroup
          component="span"
          transitionName="fade-appear"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        ></TransitionGroup>
      </Fragment>
    );
  }
}

export default AppContent;
