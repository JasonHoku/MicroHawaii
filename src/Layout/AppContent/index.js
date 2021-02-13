import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";


class AppContent extends React.Component {
  render() {
    return (
      <Fragment>
        <CSSTransitionGroup
          component="span"
          transitionName="fade-appear"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        ></CSSTransitionGroup>
      </Fragment>
    );
  }
}

export default AppContent;
