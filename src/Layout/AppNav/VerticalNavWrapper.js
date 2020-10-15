import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import MetisMenu from "react-metismenu";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";
import {
  MainNav,
  AboutNav,
  ComponentsNav,
  FormsNav,
  AdminNav,
  ChartsNav,
} from "./NavItems";

class Nav extends Component {
  state = {};

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Navi</h5>
        <MetisMenu content={MainNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

        <h5 className="app-sidebar__heading">About</h5>
        <MetisMenu content={AboutNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

        <h5 className="app-sidebar__heading">Admin</h5>
        <MetisMenu content={AdminNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
{/* 
        <h5 className="app-sidebar__heading">Forms</h5>
        <MetisMenu content={FormsNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

        <h5 className="app-sidebar__heading">Charts</h5>
        <MetisMenu content={ChartsNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
   */}   </Fragment>
    );
  }

  isPathActive(path) {
    return this.props.location.pathname.startsWith(path);
  }
}
const mapStateToProps = (state) => ({
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
