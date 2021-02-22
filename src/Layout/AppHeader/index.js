import React, { Fragment } from "react";
import cx from "classnames";
import axios from "axios";
import { connect } from "react-redux";
import { findDOMNode } from "react-dom";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import HeaderLogo from "../AppLogo";

import SearchBox from "./Components/SearchBox";
import MegaMenu from "./Components/MegaMenu";
import UserBox from "./Components/UserBox";
import HeaderRightDrawer from "./Components/HeaderRightDrawer";
import { Button } from "reactstrap";

import Login from "../../Login/Login";
import SendToGoogleAnalytics from "./Components/analytics";

import HeaderDots from "./Components/HeaderDots";

import LoginRedirect from "../../Login/LoginRedirect";

import {
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

var REACT_APP_UAANALYTICS = process.env.REACT_APP_UAANALYTICS;

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
    this.onClickGA = this.onClickGA.bind(this);
  }

  componentDidMount() {
    document.addEventListener(
      "click",
      this.closePopupOnClick.bind(this),
      false
    );
    document.addEventListener("click", this.onClickGA.bind(this), false);
    ReactGA.initialize(REACT_APP_UAANALYTICS);
  }
  componentWillUnmount() {
    document.removeEventListener(
      "click",
      this.closePopupOnClick.bind(this),
      false
    );
    document.removeEventListener("click", this.onClickGA.bind(this), false);
  }

  onClickGA(event) {
    ReactGA.pageview(window.location.href + window.location);
    const domNode = findDOMNode(event.target);
    ReactGA.outboundLink(
      {
        label: "Clicked :" + domNode.outerHTML,
      },
      function () {
        try {
        } catch (error) {}
      }
    );
  }

  closePopupOnClick(event) {
    let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
    if (enableMobileMenuSmall) {
      if (this.state.mobileActive === true) {
        console.log(String(event.target.id));
        if (
          String(event.target.id) === "[object SVGAnimatedString]" ||
          String(event.target.id) === "MobileMenuID" ||
          String(event.target.id) === "btn-icon-wrapper" ||
          String(event.target.id) === "MobileMenuID" ||
          String(event.target.id) === "MobileMenuIcon"
        ) {
          console.log("Yes");
        } else {
          console.log(String(event.target.id));
          this.toggleMobileSmall();
        }
      } else {
        this.setState({ mobileActive: false });
      }
      this.setState({ mobileActive: true });
    } else {
    }
  }

  toggleMobileSmall() {
    let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
    setEnableMobileMenuSmall(!enableMobileMenuSmall);
    this.setState({ mobileActive: false });
  }
  render() {
    let {
      headerBackgroundColor,
      enableMobileMenuSmall,
      enableHeaderShadow,
    } = this.props;
    return (
      <Fragment>
        <CSSTransitionGroup
          component="div"
          className={cx("app-header", headerBackgroundColor, {
            "header-shadow": enableHeaderShadow,
          })}
          transitionName="HeaderAnimation"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnter={false}
          transitionLeave={false}
        >
          <HeaderLogo />
          <SendToGoogleAnalytics />
          <div
            className={cx("app-header__content", {
              "header-mobile-open": enableMobileMenuSmall,
            })}
          >
            <div className="app-header-left">
              <SearchBox />
              <MegaMenu />
            </div>
            <div className="app-header-right">
              <Router>
                <Switch>
                  <Route
                    path="/#/dashboards/home/connect/google/redirect"
                    component={LoginRedirect}
                  />
                  <Route path="/" component={Login} />
                  <Login />
                </Switch>
              </Router>
              &nbsp; &nbsp;
              <UserBox />
              <HeaderRightDrawer />
            </div>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  enableHeaderShadow: state.ThemeOptions.enableHeaderShadow,
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  headerBackgroundColor: state.ThemeOptions.headerBackgroundColor,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
