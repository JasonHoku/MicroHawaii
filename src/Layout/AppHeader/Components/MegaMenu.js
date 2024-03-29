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
      <Fragment>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <Nav className="header-megamenu">
          <NavItem>
            <NavLink href="#" onClick={this.toggle} id="PopoverMegaMenu">
              <i className="nav-link-icon pe-7s-folder"> </i>
              Directory
             ↓
            </NavLink>
          </NavItem>
          <Popover
            className="rm-max-width"
            placement="bottom-start"
            fade={false}
            trigger="legacy"
            isOpen={this.state.popoverOpen}
            target="PopoverMegaMenu"
            toggle={this.toggle}
          >
            <div className="dropdown-mega-menu">
              <div className="grid-menu grid-menu-3col">
                <Row className="no-gutters">
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">
                        Main Portals
                      </NavItem>
                      <NavItem>
                        <NavLink href="/home/">
                          <i className="nav-link-icon  fa fa-home"> </i>
                          <span>Home</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/services/">
                          <i className="nav-link-icon fa fa-question-circle-o">
                            {" "}
                          </i>
                          <span>About</span>
                          <div className="ml-auto"></div>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/shop/">
                          <i className="nav-link-icon fa fa-shopping-cart"> </i>
                          <span>Shop</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/contact/">
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
                        <NavLink href="/writing/">
                          {" "}
                          <i className="nav-link-icon fa fa-pencil"> </i>Writing
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/projects/">
                          {" "}
                          <i className="nav-link-icon fa fa-code"> </i>Software
                          Development
                          <div className="ml-auto badge badge-success">
                            New
                          </div>{" "}
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                  <Col xl="4" sm="6">
                    <Nav vertical>
                      <NavItem className="nav-item-header">
                        Services &amp; Information
                      </NavItem>
                      <NavItem>
                        <NavLink href="/services/">
                          <i className="nav-link-icon fa fa-magic"> </i>
                          Professional Services{" "}
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="/projects/">
                          {" "}
                          <i className="nav-link-icon fa fa-users"> </i>Projects
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href="https://github.com/JasonHoku">
                          <i className="nav-link-icon fa fa-database"> </i>
                          GitHub
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </Col>
                </Row>
              </div>
            </div>
          </Popover>
        </Nav>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <div></div>
        <div className="MobileMenuID">
             MicroHawaii{" "}
          <small  className="MobileMenuID">
            <br></br>Software Expertise &amp; Training
          </small>
        </div>
      </Fragment>
    );
  }
}

export default MegaMenu;
