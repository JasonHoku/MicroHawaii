import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import _ from "lodash";

import { Row, Col, Card, CardBody } from "reactstrap";
import PageTitle from "../../../../Layout/AppMain/PageTitle";

import ReactTable from "react-table";

import { makeData } from "./utils";

const columns = [
  {
    Header: "Name",
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
    Header: "Info",
    columns: [
      {
        Header: "Age",
        accessor: "age",
        aggregate: (vals) => _.round(_.mean(vals)),
        Aggregated: (row) => {
          return <span>{row.value} (avg)</span>;
        },
        filterMethod: (filter, row) =>
          filter.value === `${row[filter.id]} (avg)`,
      },
      {
        Header: "Visits",
        accessor: "visits",
        aggregate: (vals) => _.sum(vals),
        filterable: false,
      },
    ],
  },
];

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
                  <ReactTable data={data} columns={columns} defaultPageSize={10}
                    pivotBy={["firstName", "lastName"]}
                    filterable
                    SubComponent={(row) => {
                      return (
                        <div style={{ padding: "20px" }}>
                          <em>
                            You can put any component you want here, even
                            another React Table!
                          </em>
                          <br />
                          <br />
                          <ReactTable data={data} columns={columns} defaultPageSize={3}
                            showPagination={false}
                            SubComponent={(row) => {
                              return (
                                <div style={{ padding: "20px" }}>
                                  Sub Component!
                                </div>
                              );
                            }}
                          />
                        </div>
                      );
                    }}/>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
