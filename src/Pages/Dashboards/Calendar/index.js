import React, { Component, Fragment } from "../../../../node_modules/react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";

import { Card, CardBody, Col, Row } from "reactstrap";

import Tabs, { TabPane } from "rc-tabs";
import TabContent from "rc-tabs/lib/SwipeableTabContent";
import ScrollableInkTabBar from "rc-tabs/lib/ScrollableInkTabBar";

// Examples
import { Helmet } from "react-helmet";

import CalendarElements from "./calendar";

//

export default class CalendarPage extends Component {
  render() {
    return (
      <Fragment>
        <Helmet>
          <title>MicroHawaii.com Events</title>
          <meta
            name="description"
            content="Discover and get involved with events."
          />
          <meta name="theme-color" content="#008f68" />
          <link
            rel="canonical"
            href="https://microhawaii.com/dashboards/calendar"
          />
        </Helmet>
        <CSSTransitionGroup
          component="div"
          transitionName="TabsAnimation"
          transitionAppear={true}
          transitionAppearTimeout={0}
          transitionEnter={false}
          transitionLeave={false}
        >
          <Card>
            <Row>
              <Col className="colJustText">
                <br />
                <CardBody
                  style={{
                    justifyContent: "center",
                    alignContent: "center",
                    textAlign: "center",
                  }}
                >
                  <p>
                    MicroHawaii's Active Hours Are:{" "}
                    <b>(GMT-10) Mon-Fri 10a-4p</b>
                  </p>
                </CardBody>
              </Col>
              <Col>
                <br />
                <CardBody
                  style={{
                    justifyContent: "left",
                    alignContent: "left",
                    textAlign: "left",
                  }}
                >
                  <p>
                    Reach out through the{" "}
                    <a href="/dashboards/contact">contact page</a> to reserve a
                    meeting.
                  </p>
                </CardBody>
              </Col>
            </Row>
            <div style={{ height: "75px" }}>
              <CalendarElements />
            </div>
          </Card>
        </CSSTransitionGroup>
      </Fragment>
    );
  }
}
