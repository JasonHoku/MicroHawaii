import React, { Fragment } from "react";

import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Popover,
  Nav,
  NavLink,
  Col,
  Row,
  NavItem,
  UncontrolledButtonDropdown,
  Button,
} from "reactstrap";

import PerfectScrollbar from "react-perfect-scrollbar";

import bg2 from "../../../assets/utils/images/dropdown-header/abstract2.jpg";
import bg10 from "../../../assets/utils/images/dropdown-header/abstract10.jpg";
import 'font-awesome/css/font-awesome.min.css';
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class MegaMenu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false,
      popoverOpen: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
      popoverOpen: !this.state.popoverOpen,
    });
  }

  state = {};

  render() {
    return (
      <Fragment>&nbsp;&nbsp;&nbsp;&nbsp;
        <Nav className="header-megamenu">
          <NavItem>
            <NavLink href="#" onClick={this.toggle} id="PopoverMegaMenu">
              <i className="nav-link-icon pe-7s-folder"> </i>
              Directory
              <FontAwesomeIcon className="ml-2 opacity-5" icon={faAngleDown} />
            </NavLink>
          </NavItem>
          <Popover className="rm-max-width" placement="bottom-start" fade={false} trigger="legacy"
            isOpen={this.state.popoverOpen} target="PopoverMegaMenu" toggle={this.toggle}>
            <div className="dropdown-mega-menu">
              <div className="grid-menu grid-menu-3col">
                <Row className="no-gutters">
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">Main Portals</NavItem>
                      <NavItem>
                        <NavLink href="./#/dashboards/home/">
                          <i className="nav-link-icon  fa fa-home"> </i>
                          <span>Home</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="./#/dashboards/services/">
                          <i className="nav-link-icon fa fa-question-circle-o"> </i>
                          <span>About</span>
                          <div className="ml-auto">
                            
                          </div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="./#/dashboards/shop/">
                          <i className="nav-link-icon fa fa-shopping-cart"> </i>
                          <span>Shop</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="./#/dashboards/contact/">
                          <i className="nav-link-icon fa fa-envelope"> </i>
                          <span>Contact</span>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">Favorites</NavItem>
                      <NavItem>
                      <NavLink href="./#/dashboards/gallery/"><i className="nav-link-icon fa fa-picture-o"> </i>Visual Arts</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink href="./#/dashboards/music/"><i className="nav-link-icon fa fa-music"> </i>
                          Audio Arts
                        </NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink href="./#/dashboards/writing/"> <i className="nav-link-icon fa fa-pencil"> </i>Writing</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink href="./#/dashboards/projects/"> <i className="nav-link-icon fa fa-code"> </i>Game Development
                          <div className="ml-auto badge badge-success">New</div>    </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">
                        Services &amp; Information
                      </NavItem>
                      <NavItem>
                      <NavLink href="./#/dashboards/services/"><i className="nav-link-icon fa fa-magic"> </i>Professional Services </NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink href="./#/dashboards/projects/"> <i className="nav-link-icon fa fa-users"> </i>Projects</NavLink>
                      </NavItem>
                      <NavItem>
                      <NavLink href="https://github.com/JasonHoku">
                        <i className="nav-link-icon fa fa-database"> </i>GitHub
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://www.paypal.com/paypalme/JasonLevien" target="_blank"> <i className="nav-link-icon fa fa-star"> </i>Donate</NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </div>
            </div>
          </Popover>
        
    
        </Nav>&nbsp;&nbsp;&nbsp;&nbsp;
        <div></div>
       <div>
   MicroHawaii <small> <br></br>Services &amp; Provisions</small> </div>
      </Fragment>
    );
  }
}

export default MegaMenu;
