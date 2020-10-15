import React from "react";
import { connect } from "react-redux";
import cx from "classnames";

import LaddaButton, { ZOOM_IN } from "react-ladda";

import { Button, UncontrolledTooltip } from "reactstrap";

import { toast, Slide } from "react-toastify";

import { faBatteryThreeQuarters } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class PageTitleAlt2 extends React.Component {
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
      autoClose: 5,
      position: "bottom-center",
      type: "default",
    }));

  render() {
    let {
      enablePageTitleSubheading,

      heading,
      subheading,
    } = this.props;
    return (
      <div className="app-page-title">
        
          <div className="page-title-heading">
           
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
    );
  }
}

const mapStateToProps = (state) => ({
  enablePageTitleSubheading: state.ThemeOptions.enablePageTitleSubheading,
});

const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PageTitleAlt2);
