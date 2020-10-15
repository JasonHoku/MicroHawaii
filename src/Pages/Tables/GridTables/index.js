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

import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";

import PageTitle from "../../../Layout/AppMain/PageTitle";

const products = [
  {
    id: "453",
    name: "Dummy Product 1",
    price: "$ 19",
    orderid: "32556",
  },
  {
    id: "74",
    name: "Dummy Product 2",
    price: "$ 67",
    orderid: "32556",
  },
  {
    id: "123",
    name: "Dummy Product 3",
    price: "$ 329",
    orderid: "32556",
  },
  {
    id: "32",
    name: "Dummy Product 4",
    price: "$ 23",
    orderid: "32556",
  },
];

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true,
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true,
    filter: textFilter(),
  },
  {
    dataField: "orderid",
    text: "Order ID",
    sort: true,
    align: "center",
  },
  {
    dataField: "status",
    isDummyField: false,
    align: "center",
    text: "Status",
    formatter: (cellContent, row) => {
      return (
        <div className="d-block w-100 text-center">
          <span className="badge badge-success"> Completed</span>
        </div>
      );
    },
  },
  {
    dataField: "actions",
    isDummyField: true,
    align: "center",
    text: "Actions",
    formatter: (cellContent, row) => {
      return (
        <div>
          <div className="d-block w-100 text-center">
            <UncontrolledButtonDropdown>
              <DropdownToggle caret className="btn-icon btn-icon-only btn btn-link" color="link">
                <i className="lnr-menu-circle btn-icon-wrapper" />
              </DropdownToggle>
              <DropdownMenu right className="rm-pointers dropdown-menu-hover-link">
                <DropdownItem header>Header</DropdownItem>
                <DropdownItem>
                  <i className="dropdown-icon lnr-inbox"> </i>
                  <span>Menus</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="dropdown-icon lnr-file-empty"> </i>
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem>
                  <i className="dropdown-icon lnr-book"> </i>
                  <span>Actions</span>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <i className="dropdown-icon lnr-picture"> </i>
                  <span>Dividers</span>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledButtonDropdown>
          </div>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc",
  },
];

const GridTables = (props) => {
  return (
    <Fragment>
      <PageTitle
        heading="Grid Tables"
        subheading="Basic example of a React table with sort, search and filter functionality."
        icon="pe-7s-notebook icon-gradient bg-mixed-hopes"
      />
      <CSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Row>
          <Col md="12">
            <Card className="main-card mb-3">
              <CardBody>
                <div className="table-responsive">
                  <BootstrapTable
                    bootstrap4
                    keyField="id"
                    data={products}
                    columns={columns}
                    filter={filterFactory()}
                    defaultSorted={defaultSorted}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </CSSTransitionGroup>
    </Fragment>
  );
};

export default GridTables;
