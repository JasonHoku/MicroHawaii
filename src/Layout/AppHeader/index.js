import React, { Fragment } from "react";
import cx from "classnames";
import axios from "axios";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import HeaderLogo from "../AppLogo";

import SearchBox from "./Components/SearchBox";
import MegaMenu from "./Components/MegaMenu";
import UserBox from "./Components/UserBox";
import HeaderRightDrawer from "./Components/HeaderRightDrawer";
import { Button } from "reactstrap";

import Login from "../../Login/Login"
import SendToGoogleAnalytics from "./Components/analytics"

import HeaderDots from "./Components/HeaderDots";

import LoginRedirect from "../../Login/LoginRedirect";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      response: [],
    };
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
              <span> <Router>
            <Switch>
            <Route path="/#/dashboards/home/connect/google/redirect" component={LoginRedirect} />
            <Route exact path="/" component={Login} />
              <Login />
       </Switch></Router>

                &nbsp;

                &nbsp;
              </span>

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

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
