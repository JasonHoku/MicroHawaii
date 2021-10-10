import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { setEnableMobileMenu } from "../../reducers/ThemeOptions";

import { IoIosInformationCircleOutline, IoIosCog } from "react-icons/io";

import { GiAtom } from "react-icons/gi";

import { GoMailRead } from "react-icons/go";

import { SiGooglecalendar, SiShopify } from "react-icons/si";

import { GiPaintBrush } from "react-icons/gi";

import { Link } from "react-router-dom";

import { VscAccount } from "react-icons/vsc";

class Nav extends Component {
  state = {};

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  render() {
    return (
      <Fragment>
        <h5 className="app-sidebar__heading">Index</h5>
        <Link onClick={this.toggleMobileSidebar} to="/home">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span
                className="metismenu-item"
                style={{ position: "relative", top: "-3px", left: "-15px" }}
              >
                <svg className="spin" height="25px" width="25px">
                  <GiAtom />
                </svg>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                Homepage
              </span>
            </button>
          </h4>
        </Link>
        <Link onClick={this.toggleMobileSidebar} to="/calendar">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span
                className="metismenu-item"
                style={{ position: "relative", top: "-3px", left: "-15px" }}
              >
                <SiGooglecalendar />
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                Schedule
              </span>
            </button>
          </h4>
        </Link>
        <Link onClick={this.toggleMobileSidebar} to="/gallery">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span
                className="metismenu-item"
                style={{ position: "relative", top: "-3px", left: "-15px" }}
              >
                <GiPaintBrush />
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                Designs
              </span>
            </button>
          </h4>
        </Link>
        <Link onClick={this.toggleMobileSidebar} to="/shop">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span className="spin" style={{ position: "relative", top: "-3px", left: "-15px" }}>
                <SiShopify />
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                E-Shop
              </span>
            </button>
          </h4>
        </Link>
        <h3 className="app-sidebar__heading">Info</h3>
        <Link onClick={this.toggleMobileSidebar} to="/services">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span
                className="metismenu-item"
                style={{ position: "relative", top: "-3px", left: "-15px" }}
              >
                <svg className="spin" height="25px" width="25px">
                  <IoIosCog />
                </svg>
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                Services
              </span>
            </button>
          </h4>
        </Link>
        <Link onClick={this.toggleMobileSidebar} to="/projects">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span
                className="metismenu-item"
                style={{ position: "relative", top: "-3px", left: "-15px" }}
              >
                <IoIosInformationCircleOutline />
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                About Us
              </span>
            </button>
          </h4>
        </Link>
        <Link onClick={this.toggleMobileSidebar} to="/contact">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span
                className="metismenu-item"
                style={{ position: "relative", top: "-3px", left: "-15px" }}
              >
                <GoMailRead />
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                Contact
              </span>
            </button>
          </h4>
        </Link>{" "}
        <h5 className="app-sidebar__heading">Account</h5>
        <Link onClick={this.toggleMobileSidebar} to="/account">
          <h4>
            <button className="gradientBtn" style={{ width: "100%" }}>
              <span
                className="metismenu-item"
                style={{ position: "relative", top: "-3px", left: "-15px" }}
              >
                <VscAccount />
                &nbsp;&nbsp;&nbsp;
              </span>
              <span className="sidebarLinks" style={{ position: "relative", top: "1px" }}>
                Login
              </span>
            </button>
          </h4>
        </Link>
        {/*
        <h5 className="app-sidebar__heading">Forms</h5>
        <MetisMenu content={FormsNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>

        <h5 className="app-sidebar__heading">Charts</h5>
        <MetisMenu content={ChartsNav} onSelected={this.toggleMobileSidebar} activeLinkFromLocation
          className="vertical-nav-menu" iconNamePrefix="" classNameStateIcon="pe-7s-angle-down"/>
   */}{" "}
      </Fragment>
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
