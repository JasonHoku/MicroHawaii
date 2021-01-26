import react from "react";
import React, { Fragment } from "react";
import { useHistory } from "react-navi";
import { Route, Redirect } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import "../Layout/AppHeader/Components/analytics";
class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.handleClickX = this.handleClick.bind(this);

    this.state = {
      sideBarVar: "1",
    };
  }

  handleClick() {}

  render() {
    return (
      <Fragment>
        <div
          className="landingContent"
          onClick={() => (window.location.hash = "/dashboards/home")}
        >
          <br />
          <br />
          <CSSTransitionGroup
            component="div"
            transitionName="MainAnimation"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div>
              <h1>MicroHawaii.com</h1>
            </div>
          </CSSTransitionGroup>
          <br />
          <div>
            <CSSTransitionGroup
              component="div"
              transitionName="MainAnimation3"
              transitionAppear={true}
              transitionEnter={false}
              transitionLeave={false}
            >
              <div>
                <h3>Unleash Your Web</h3>
              </div>
            </CSSTransitionGroup>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <CSSTransitionGroup
            component="div"
            transitionName="MainAnimation4"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}
          >
            <div>
              <h4>Click To Enter</h4>
            </div>
          </CSSTransitionGroup>
          <br />
          <br />
          <br /> <br /> <br /> <br />
        </div>
      </Fragment>
    );
  }
}

export default LandingPage;
