import React from "react";
import { connect } from "react-redux";
import cx from "classnames";

import LaddaButton, { ZOOM_IN } from "react-ladda";

import { Button, UncontrolledTooltip } from "reactstrap";

import { toast, Slide } from "react-toastify";

import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PageTitle extends React.Component {
  state = {
    expZoomIn: false,
  };

  toggle(name) {
    this.setState({
      [name]: !this.state[name],
      progress: 0.5,
    });
  }

  notify22 = () =>
    (this.toastId = toast("You can add whatever element in this section.", {
      transition: Slide,
      closeButton: true,
      autoClose: 5000,
      position: "bottom-center",
      type: "default",
    }));

  render() {
    let {
      enablePageTitleIcon,
      enablePageTitleSubheading,

      heading,
      icon,
      subheading,
    } = this.props;
    return (
      <div className="app-page-title">
        <div className="page-title-wrapper">
          <div className="page-title-heading">
            <div className={cx("page-title-icon bg-happy-fisher", {
                "d-none": !enablePageTitleIcon,
              })}>
              <i className={icon} />
            </div>
            <div>
              {heading}
              <div className={cx("page-title-subheading", {
                  "d-none": !enablePageTitleSubheading,
                })}>
                {subheading}
              </div>
            </div>
          </div>
          <div className="page-title-actions">
       
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  enablePageTitleIcon: state.ThemeOptions.enablePageTitleIcon,
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitle);
