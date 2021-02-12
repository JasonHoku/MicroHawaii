import React, { Fragment } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { withRouter } from "react-router-dom";

import ResizeDetector from "react-resize-detector";

import AppMain from "../../Layout/AppMain";
import firebase from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyDnQ9BZMl5OChhJS1oqxPfq_oj16oREAGs",
  authDomain: "microhawaii-5f97b.firebaseapp.com",
  databaseURL: "https://microhawaii-5f97b-default-rtdb.firebaseio.com",
  projectId: "microhawaii-5f97b",
  storageBucket: "microhawaii-5f97b.appspot.com",
  messagingSenderId: "775965301611",
  appId: "1:775965301611:web:5858ed50ba444371e74a2e",
  measurementId: "G-H00S7BSD3H",
};
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closedSmallerSidebar: false,
    };
  }
  componentDidMount() {
    
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
}
    window.addEventListener("hashchange", this.toggle1, false);
  }

  componentWillUnmount() {
    document.removeEventListener("hashchange", this.toggle1.bind(this), false);
  }
  toggle1() {
    if (String(window.location.hash).includes("#/dashboards/mediums")) {
    } else {
      window.scrollTo(0, 0);
    }
  }
  render() {
    let {
      colorScheme,
      enableFixedHeader,
      enableFixedSidebar,
      enableFixedFooter,
      enableClosedSidebar,
      closedSmallerSidebar,
      enableMobileMenu,
      enablePageTabsAlt,
    } = this.props;

    return (
      <ResizeDetector
        handleWidth
        render={({ width }) => (
          <Fragment>
            <div
              style={{
                backgroundColor: "transparent",
                position: "sticky",
                margin: 0,
                padding: 0,
                width: "100%",
                height: "100vh",
              }}
              className={cx(
                "app-container app-theme-" + colorScheme,
                { "fixed-header": enableFixedHeader },
                { "fixed-sidebar": enableFixedSidebar || width < 1250 },
                { "fixed-footer": enableFixedFooter },
                { "closed-sidebar": enableClosedSidebar || width < 1250 },
                {
                  "closed-sidebar-mobile": closedSmallerSidebar || width < 1250,
                },
                { "sidebar-mobile-open": enableMobileMenu },
                { "body-tabs-shadow-btn": enablePageTabsAlt }
              )}
            >
              <AppMain />
            </div>
          </Fragment>
        )}
      />
    );
  }
}

const mapStateToProp = (state) => ({
  colorScheme: state.ThemeOptions.colorScheme,
  enableFixedHeader: state.ThemeOptions.enableFixedHeader,
  enableMobileMenu: state.ThemeOptions.enableMobileMenu,
  enableFixedFooter: state.ThemeOptions.enableFixedFooter,
  enableFixedSidebar: state.ThemeOptions.enableFixedSidebar,
  enableClosedSidebar: state.ThemeOptions.enableClosedSidebar,
  enablePageTabsAlt: state.ThemeOptions.enablePageTabsAlt,
});

export default withRouter(connect(mapStateToProp)(Main));
