import React, { Fragment, lazy, useState } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { withRouter } from "react-router-dom";

import CheckVersions from "./checkVersions";

import ResizeDetector from "react-resize-detector";

import AppMain from "../../Layout/AppMain";

import packageJson from "../../meta.json";

import "firebase/storage";
import "firebase/firestore";

import firebase from "firebase/app";

import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";

var appVersion = packageJson.version;

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closedSmallerSidebar: false,
      hasLoaded: 1,
    };
  }

  decideVersionCheck() {
    if (this.state.hasLoaded === 1) {
      return (<CheckVersions />), this.setState({ hasLoaded: 2 });
    } else {
      return null;
    }
  }

  componentDidMount() {
    window.addEventListener("hashchange", this.toggle1, false);
    {
      this.decideVersionCheck();
    }
  }

  componentWillUnmount() {
    document.removeEventListener("hashchange", this.toggle1.bind(this), false);
  }

  async toggle1() {
    let concData = [];
    let concData2 = [];
    let concData3 = [];
    window.scrollTo(0, 0);
    try {
      const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE,
        authDomain: "microhawaii-5f97b.firebaseapp.com",
        databaseURL: "https://microhawaii-5f97b-default-rtdb.firebaseio.com",
        projectId: "microhawaii-5f97b",
        storageBucket: "microhawaii-5f97b.appspot.com",
        messagingSenderId: "775965301611",
        appId: "1:775965301611:web:5858ed50ba444371e74a2e",
        measurementId: "G-H00S7BSD3H",
      };
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      const snapshot = await firebase.firestore().collection("version").get();

      snapshot.forEach(async function (doc) {
        concData = doc.data();
        console.log(concData.version);
        if (concData.version) {
          if (!localStorage.getItem("appVersion")) {
            localStorage.setItem("appVersion", concData.version);
          } else if (localStorage.getItem("appVersion") != concData.version) {
            if (caches) {
              caches.keys().then(function (names) {
                for (let name of names) caches.delete(name);
              });
              localStorage.setItem("appVersion", concData.version);
            }
            window.location.reload(true);
          }
        }
      });
    } catch (error) {}
  }

  render() {
    if (appVersion) {
      if (!localStorage.getItem("appVersion")) {
        localStorage.setItem("appVersion", appVersion);
      }
    }
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
