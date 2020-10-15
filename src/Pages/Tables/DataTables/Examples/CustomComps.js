import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import {
  Row,
  Col,
  Card,
  CardBody,
  UncontrolledButtonDropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

import ReactTable from "react-table";
import PageTitle from "../../../../Layout/AppMain/PageTitle";

import avatar2 from "../../../../assets/utils/images/avatars/2.jpg";

import { makeData } from "./utils";

export default class DataTableCustomComps extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }

  render() {
    const { data } = this.state;

    return (
      <Fragment>
        <CSSTransitionGroup component="div" transitionName="TabsAnimation" transitionAppear={true}
          transitionAppearTimeout={0} transitionEnter={false} transitionLeave={false}>
          <div>
            <PageTitle heading="Data Tables"
              subheading="Choose between regular React Bootstrap tables or advanced dynamic ones."
              icon="pe-7s-medal icon-gradient bg-tempting-azure"/>
          </div>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <ReactTable data={data}
                    columns={[
                      {
                        columns: [
                          {
                            Header: "First Name",
                            accessor: "firstName",
                          },
                          {
                            Header: "Last Name",
                            id: "lastName",
                            accessor: (d) => d.lastName,
                          },
                        ],
                      },
                      {
                        columns: [
                          {
                            Header: "Profile Progress",
                            accessor: "progress",
                            Cell: (row) => (
                              <div
                                className="progress-bar-sm progress"
                                style={{
                                  width: "100%",
                                  backgroundColor: "#dadada",
                                }}>
                                <div
                                  className="progress-bar"
                                  style={{
                                    width: `${row.value}%`,
                                    backgroundColor:
                                      row.value > 66
                                        ? "#3ac47d"
                                        : row.value > 33
                                        ? "#fd7e14"
                                        : "#d92550",
                                    borderRadius: "2px",
                                    transition: "all .2s ease-out",
                                  }}
                                />
                              </div>
                            ),
                          },
                          {
                            Header: "Status",
                            accessor: "status",
                            Cell: (row) => (
                              <span>
                                <span
                                  style={{
                                    color:
                                      row.value === "relationship"
                                        ? "#d92550"
                                        : row.value === "complicated"
                                        ? "#fd7e14"
                                        : "#3ac47d",
                                    transition: "all .3s ease",
                                  }}>
                                  &#x25cf;
                                </span>{" "}
                                {row.value === "relationship"
                                  ? "In a relationship"
                                  : row.value === "complicated"
                                  ? `It's complicated`
                                  : "Single"}
                              </span>
                            ),
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight" />
                </CardBody>
              </Card>
            </Col>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardBody>
                  <ReactTable data={data}
                    columns={[
                      {
                        columns: [
                          {
                            Header: "Name",
                            accessor: "firstName",
                            Cell: (row) => (
                              <div>
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <div className="widget-content-left">
                                        <img width={52} className="rounded-circle" src={avatar2} alt=""/>
                                      </div>
                                    </div>
                                    <div className="widget-content-left flex2">
                                      <div className="widget-heading">
                                        {row.value}
                                      </div>
                                      <div className="widget-subheading opacity-10">
                                        <span className="pr-2">
                                          <b className="text-danger">12</b>{" "}
                                          Leads
                                        </span>
                                        <span>
                                          <b className="text-success">$56,24</b>{" "}
                                          Totals
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            ),
                          },
                          {
                            Header: "Age",
                            accessor: "age",
                          },
                          {
                            Header: "Visits",
                            accessor: "visits",
                          },
                          {
                            Header: "Popular Tag",
                            accessor: "lastName",
                          },
                        ],
                      },
                      {
                        columns: [
                          {
                            Header: "Actions",
                            accessor: "actions",
                            Cell: (row) => (
                              <div className="d-block w-100 text-center">
                                <UncontrolledButtonDropdown>
                                  <DropdownToggle caret className="btn-icon btn-icon-only btn btn-link" color="link">
                                    <i className="lnr-menu-circle btn-icon-wrapper" />
                                  </DropdownToggle>
                                  <DropdownMenu className="rm-pointers dropdown-menu-hover-link">
                                    <DropdownItem header>Header</DropdownItem>
                                    <DropdownItem>
                                      <i className="dropdown-icon lnr-inbox"> {" "} </i>
                                      <span>Menus</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <i className="dropdown-icon lnr-file-empty"> {" "} </i>
                                      <span>Settings</span>
                                    </DropdownItem>
                                    <DropdownItem>
                                      <i className="dropdown-icon lnr-book">\ {" "} </i>
                                      <span>Actions</span>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                      <i className="dropdown-icon lnr-picture"> {" "} </i>
                                      <span>Dividers</span>
                                    </DropdownItem>
                                  </DropdownMenu>
                                </UncontrolledButtonDropdown>
                              </div>
                            ),
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
