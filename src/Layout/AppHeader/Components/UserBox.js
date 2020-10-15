import React, { Fragment } from "react";

// import Ionicon from 'react-ionicons';

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  Button,
  NavItem,
  NavLink,
  UncontrolledButtonDropdown,
} from "reactstrap";

import { toast, Bounce } from "react-toastify";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import city3 from "../../../assets/utils/images/dropdown-header/city3.jpg";
import avatar1 from "../../../assets/utils/images/avatars/1.jpg";

class UserBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
  }

  notify2 = () =>
    (this.toastId = toast(
      "You don't have any new items in your calendar for today! Go out and play!",
      {
        transition: Bounce,
        closeButton: true,
        autoClose: 5000,
        position: "bottom-center",
        type: "success",
      }
    ));

  render() {
    return (
      <Fragment>
        <div className="header-btn-lg pr-0">
          <div className="widget-content p-0">
            <div className="widget-content-wrapper">
              <div className="widget-content-left">
             
              </div>
            
              <div className="widget-content-right header-user-info ml-3">
              
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default UserBox;
