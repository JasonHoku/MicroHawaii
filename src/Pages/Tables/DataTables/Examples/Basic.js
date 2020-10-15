import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Row, Col, Card, CardBody } from "reactstrap";

import ReactTable from "react-table";
import PageTitle from "../../../../Layout/AppMain/PageTitle";

import { makeData } from "./utils";

export default class DataTableBasic extends React.Component {
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
                          },
                          {
                            Header: "Status",
                            accessor: "status",
                          },
                        ],
                      },
                      {
                        Header: "Stats",
                        columns: [
                          {
                            Header: "Visits",
                            accessor: "visits",
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={10}
                    className="-striped -highlight"
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
