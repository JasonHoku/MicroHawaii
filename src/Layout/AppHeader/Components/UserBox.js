import React, { Fragment } from "react";

// import Ionicon from 'react-ionicons';

import { IoIosCalendar } from "react-icons/io";

import PerfectScrollbar from "react-perfect-scrollbar";

import {
  DropdownToggle,
  DropdownMenu,
  Nav,
  Col,
  Row,
  Button,
  NavItem,
  NavLink,
  UncontrolledTooltip,
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
                <UncontrolledButtonDropdown>
                  <DropdownToggle color="link" className="p-0">
                    <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                    <FontAwesomeIcon
                      className="ml-2"
                      icon={faAngleDown}
                    />
                  </DropdownToggle>
                  <DropdownMenu right className="rm-pointers dropdown-menu-lg">
                    <div className="dropdown-menu-header">
                      <div className="dropdown-menu-header-inner bg-info">
                        <div className="menu-header-image opacity-2"
                          style={{
                            backgroundImage: "url(" + city3 + ")",
                          }}/>
                        <div className="menu-header-content text-left">
                          <div className="widget-content p-0">
                            <div className="widget-content-wrapper">
                              <div className="widget-content-left mr-3">
                                <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                              </div>
                              <div className="widget-content-left">
                                <div className="widget-heading">
                                  Jason Hoku Levien
                                </div>
                                <div className="widget-subheading opacity-9">
                                  Software Developer, Hawaii
                                </div>
                              </div>
                          
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="scroll-area-xs"
                      style={{
                        height: "150px",
                      }}>
                      <PerfectScrollbar>
                        <Nav vertical>
                          <NavItem>
                            <NavLink href=".#">
                              Site Home
                            </NavLink>
                          </NavItem>
                       
                          <NavItem>
                            <NavLink href="#/dashboards/services">
                              About
                            </NavLink>
                          </NavItem>
                          <NavItem>
                            <NavLink href="#/dashboards/projects">
                              Projects
                            </NavLink>
                          </NavItem>
                          <Nav vertical> 
                      <NavItem className="nav-item-btn text-center">
                        <Button size="sm" className="btn-wide" color="primary" href="./#/dashboards/contact">
                          Contact
                        </Button>
                      </NavItem></Nav> 
                      </Nav> 
                        </PerfectScrollbar>
                        </div>
                  </DropdownMenu>
                </UncontrolledButtonDropdown>
              </div>
              <div className="widget-content-left  ml-3 header-user-info">
                <div className="widget-heading">Jason Hoku Levien</div>
                <div className="widget-subheading">Founder, Developer</div>
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
