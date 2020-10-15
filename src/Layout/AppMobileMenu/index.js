import React, { Fragment } from "react";
import { connect } from "react-redux";

import { Slider } from "react-burgers";

import cx from "classnames";

import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Button } from "reactstrap";

import {
  setEnableMobileMenu,
  setEnableMobileMenuSmall,
} from "../../reducers/ThemeOptions";

class AppMobileMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      mobile: false,
      activeSecondaryMenuMobile: false,
    };
  }

  toggleMobileSidebar = () => {
    let { enableMobileMenu, setEnableMobileMenu } = this.props;
    setEnableMobileMenu(!enableMobileMenu);
  };

  toggleMobileSmall = () => {
    let { enableMobileMenuSmall, setEnableMobileMenuSmall } = this.props;
    setEnableMobileMenuSmall(!enableMobileMenuSmall);
  };

  state = {
    openLeft: false,
    openRight: false,
    relativeWidth: false,
    width: 280,
    noTouchOpen: false,
    noTouchClose: false,
  };

  render() {
    return (
      <Fragment>
        <div> </div> <span> </span> <br ></br>
        <div className="app-header__mobile-menu"
        style={{
          fontSize: "large",
          color: "white",
          position: "fixed",
          textAlign: "left",
          top: "center",
          left: "-4px",
          opacity: 100,
        }} >
          <div onClick={this.toggleMobileSidebar}>
          <Slider width={55} lineHeight={6} lineSpacing={13} color="#ffffff"
                active={this.state.active} onClick={() => this.setState({ active: !this.state.active })}/>
             </div>
        </div>
     
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  closedSmallerSidebar: state.ThemeOptions.closedSmallerSidebar,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableMobileMenuSmall: state.ThemeOptions.enableMobileMenuSmall,
});

const mapDispatchToProps = (dispatch) => ({
  setEnableMobileMenu: (enable) => dispatch(setEnableMobileMenu(enable)),
  setEnableMobileMenuSmall: (enable) =>
    dispatch(setEnableMobileMenuSmall(enable)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppMobileMenu);
