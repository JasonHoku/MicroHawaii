import React, { Fragment, Component } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import {
  Col,
  Row,
  Button,
  Card,
  Nav,
  NavLink,
  NavItem,
  DropdownMenu,
  DropdownItem,
  CustomInput,
  InputGroup,
  InputGroupAddon,
  Input,
  Table,
  UncontrolledButtonDropdown,
  DropdownToggle,
} from "reactstrap";

import JwPagination from "jw-react-pagination";

import { Elastic } from "react-burgers";

import cx from "classnames";

import PageTitle from "../../../Layout/AppMain/PageTitle";

import avatar1 from "../../../assets/utils/images/avatars/1.jpg";
import avatar2 from "../../../assets/utils/images/avatars/2.jpg";
import avatar3 from "../../../assets/utils/images/avatars/3.jpg";
import avatar4 from "../../../assets/utils/images/avatars/4.jpg";
import avatar5 from "../../../assets/utils/images/avatars/5.jpg";
import avatar6 from "../../../assets/utils/images/avatars/8.jpg";
import avatar7 from "../../../assets/utils/images/avatars/9.jpg";
import avatar8 from "../../../assets/utils/images/avatars/10.jpg";

import bg15 from "../../../assets/utils/images/dropdown-header/city5.jpg";
import {
  faStar,
  faCalendarAlt,
  faAngleLeft,
  faAngleDown,
  faSearch,
  faAngleRight,
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faTags,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const customLabels = {
  first: <FontAwesomeIcon icon={faAngleDoubleLeft} />,
  last: <FontAwesomeIcon icon={faAngleDoubleRight} />,
  previous: <FontAwesomeIcon icon={faAngleLeft} />,
  next: <FontAwesomeIcon icon={faAngleRight} />,
};

export default class Mailbox extends Component {
  constructor() {
    super();
    var exampleItems = [...Array(30).keys()].map((i) => ({
      id: i + 1,
      name: "Item " + (i + 1),
    }));
    this.onChangePage = this.onChangePage.bind(this);
    this.state = {
      exampleItems,
      pageOfItems: [],
      active: false,
    };
  }

  onChangePage(pageOfItems) {
    this.setState({ pageOfItems });
  }

  render() {
    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <div>
            <div className={cx("app-inner-layout", {
                "open-mobile-menu": this.state.active,
              })}>
              <div className="app-inner-layout__header bg-heavy-rain">
                <PageTitle heading="Mailbox Layout Example"
                  subheading="Create stunning UIs for your pages with these layout components."
                  icon="pe-7s-power icon-gradient bg-mixed-hopes"/>
              </div>
              <div className="app-inner-layout__wrapper">
                <Card className="app-inner-layout__content">
                  <div>
                    <div className="app-inner-layout__top-pane">
                      <div className="pane-left">
                        <div className="mobile-app-menu-btn">
                          <Elastic width={26} lineHeight={2} lineSpacing={5} color="#6c757d" active={this.state.active}
                            onClick={() =>
                              this.setState({ active: !this.state.active })
                            }/>
                        </div>
                        <h4 className="mb-0"> Inbox</h4>
                        <UncontrolledButtonDropdown>
                          <DropdownToggle color="link">
                            <FontAwesomeIcon icon={faAngleDown} />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-xl rm-pointers">
                            <div className="dropdown-menu-header">
                              <div className="dropdown-menu-header-inner bg-night-fade">
                                <div className="menu-header-image opacity-1"
                                  style={{
                                    backgroundImage: "url(" + bg15 + ")",
                                  }}/>
                                <div className="menu-header-content text-dark">
                                  <h5 className="menu-header-title">
                                    Settings
                                  </h5>
                                  <h6 className="menu-header-subtitle">
                                    Manage all of your options
                                  </h6>
                                </div>
                              </div>
                            </div>
                            <div className="grid-menu grid-menu-xl grid-menu-2col">
                              <Row className="no-gutters">
                                <Col sm="6">
                                  <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                    <i className="lnr-license btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                    Primary
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                    <i className="lnr-map btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                    Secondary
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                    <i className="lnr-music-note btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                    Success
                                  </Button>
                                </Col>
                                <Col sm="6">
                                  <Button className="btn-icon-vertical btn-square btn-transition" outline color="link">
                                    <i className="lnr-heart btn-icon-wrapper btn-icon-lg mb-3"> {" "} </i>
                                    Info
                                  </Button>
                                </Col>
                              </Row>
                            </div>
                            <Nav vertical>
                              <NavItem className="nav-item-divider" />
                              <NavItem className="nav-item-btn text-center">
                                <Button size="sm" className="btn-shadow" color="primary">
                                  Submit
                                </Button>
                              </NavItem>
                            </Nav>
                          </DropdownMenu>
                        </UncontrolledButtonDropdown>
                      </div>
                      <div className="pane-right">
                        <InputGroup>
                          <InputGroupAddon addonType="prepend">
                            <div className="input-group-text">
                              <FontAwesomeIcon icon={faSearch} />
                            </div>
                          </InputGroupAddon>
                          <Input placeholder="Search..." />
                        </InputGroup>
                      </div>
                    </div>
                    <div className="bg-white">
                      <Table responsive className="text-nowrap table-lg mb-0" hover>
                        <tbody>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox1" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar1} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Jason Hoku Levien
                                    </div>
                                    <div className="widget-subheading">
                                      Last seen online 15 minutes ago
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              Nullam dictum felis eu pede mollis pretium.
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              5 mins ago
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox12" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      John Smith
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              But I must explain to you how all this mistaken
                              idea of denouncing pleasure ...
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              12 Dec
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox13" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Eliot Huber
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              But I must explain to you how all this mistaken
                              idea of denouncing pleasure ...
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              7 Dec
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox14" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar4} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Ella-Rose Henry
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              Create stunning UIs for your pages with these
                              layout components...
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              7 Dec
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox15" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar5} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Vinnie Wagstaff
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              Etiam sit amet orci eget eros faucibus...
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              23 Nov
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox16" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar6} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Jason Hoku Levien
                                    </div>
                                    <div className="widget-subheading">
                                      Last seen online 15 minutes ago
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              Nullam dictum felis eu pede mollis pretium.
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              5 mins ago
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox17" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar7} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Eliot Huber
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              But I must explain to you how all this mistaken
                              idea of denouncing pleasure ...
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              12 Dec
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox18" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar2} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Eliot Huber
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              But I must explain to you how all this mistaken
                              idea of denouncing pleasure ...
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              7 Dec
                            </td>
                          </tr>
                          <tr>
                            <td className="text-center" style={{ width: "78px" }}>
                              <CustomInput type="checkbox" id="eCheckbox19" label="&nbsp;"/>
                            </td>
                            <td className="text-left pl-1">
                              <FontAwesomeIcon icon={faStar} />
                            </td>
                            <td>
                              <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left mr-3">
                                    <img width={42} className="rounded-circle" src={avatar4} alt=""/>
                                  </div>
                                  <div className="widget-content-left">
                                    <div className="widget-heading">
                                      Ella-Rose Henry
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="text-left">
                              Create stunning UIs for your pages with these
                              layout components...
                            </td>
                            <td>
                              <FontAwesomeIcon className="opacity-4" icon={faTags}/>
                            </td>
                            <td className="text-right">
                              <FontAwesomeIcon className="opacity-4 mr-2" icon={faCalendarAlt}/>
                              7 Dec
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                      <div className="app-inner-layout__bottom-pane d-block text-center">
                        <JwPagination pageSize={5} items={this.state.exampleItems} onChangePage={this.onChangePage} labels={customLabels}/>
                      </div>
                    </div>
                  </div>
                </Card>
                <Card className="app-inner-layout__sidebar">
                  <Nav vertical>
                    <NavItem className="pt-4 pl-3 pr-3 pb-3">
                      <Button block color="primary" className="btn-pill btn-shadow">
                        Write New Email
                      </Button>
                    </NavItem>
                    <NavItem className="nav-item-header">My Account</NavItem>
                    <NavItem>
                      <NavLink href="#">
                        <i className="nav-link-icon pe-7s-chat"> </i>
                        <span>Inbox</span>
                        <div className="ml-auto badge badge-pill badge-info">
                          8
                        </div>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">
                        <i className="nav-link-icon pe-7s-wallet"> </i>
                        <span>Sent Items</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">
                        <i className="nav-link-icon pe-7s-config"> </i>
                        <span>All Messages</span>
                        <div className="ml-auto badge badge-success">New</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav-item-divider" />
                    <NavItem>
                      <NavLink href="#">
                        <i className="nav-link-icon pe-7s-box2"> </i>
                        <span>Trash</span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink href="#">
                        <i className="nav-link-icon pe-7s-coffee"> </i>
                        <span>Others</span>
                        <div className="ml-auto badge badge-warning">512</div>
                      </NavLink>
                    </NavItem>
                    <NavItem className="nav-item-divider" />
                    <NavItem className="nav-item-header">
                      Online Friends
                    </NavItem>
                    <NavItem className="text-center p-2">
                      <div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-primary badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar1} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-focus badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar2} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-warning badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar3} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-danger badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar4} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-info badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar5} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-success badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar6} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-secondary badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar7} alt="" />
                          </div>
                        </div>
                        <div className="avatar-icon-wrapper">
                          <div className="badge badge-warning badge-dot badge-dot-lg" />
                          <div className="avatar-icon">
                            <img src={avatar8} alt="" />
                          </div>
                        </div>
                      </div>
                    </NavItem>
                    <NavItem className="nav-item-btn text-center">
                      <Button size="sm" className="btn-wide btn-pill" color="success">
                        Start New Conversation
                      </Button>
                    </NavItem>
                    <NavItem className="nav-item-divider" />
                    <NavItem className="nav-item-header">
                      Tags
                      <small className="ml-1">Important</small>
                    </NavItem>
                    <NavItem>
                      <DropdownItem className="d-flex align-items-center">
                        <div className="badge ml-0 mr-3 badge-dot badge-dot-xl badge-success">
                          Dark
                        </div>
                        Important
                      </DropdownItem>
                      <DropdownItem className="d-flex align-items-center">
                        <div className="badge ml-0 mr-3 badge-dot badge-dot-xl badge-danger">
                          Dark
                        </div>
                        Favourites
                      </DropdownItem>
                      <DropdownItem className="d-flex align-items-center">
                        <div className="badge ml-0 mr-3 badge-dot badge-dot-xl badge-warning">
                          Dark
                        </div>
                        Actions
                      </DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem className="d-flex align-items-center">
                        <div className="badge ml-0 mr-3 badge-dot badge-dot-xl badge-primary">
                          Dark
                        </div>
                        Other Tags
                      </DropdownItem>
                    </NavItem>
                  </Nav>
                </Card>
              </div>
            </div>
          </div>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
