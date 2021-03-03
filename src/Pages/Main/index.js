import React, { Fragment, lazy, useState, useRef } from "react";
import { connect } from "react-redux";
import cx from "classnames";
import { withRouter } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Suspense } from "react";
import Loader from "react-loaders";

const Dashboards = lazy(() => retry(() => import("../../Pages/Dashboards")));

import LandingPage from "../../Pages/home";
import { ToastContainer } from "react-toastify";

import App from "../../Pages/Dashboards/Home/Examples/backgroundeffect";
import { unregister } from "../../serviceWorker";

import ResizeDetector from "react-resize-detector";

import packageJson from "../../meta.json";

import "firebase/storage";
import "firebase/firestore";

import firebase from "firebase/app";
import "firebase/performance";

function retry(fn, retriesLeft = 5, interval = 1000) {
  return new Promise((resolve, reject) => {
    fn()
      .then(resolve)
      .catch((error) => {
        setTimeout(() => {
          if (retriesLeft === 1) {
            // reject('maximum retries exceeded');
            reject(error);
            return;
          }

          // Passing on "reject" is the important part
          retry(fn, retriesLeft - 1, interval).then(resolve, reject);
        }, interval);
      });
  });
}

var appVersion = packageJson.version;
class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      closedSmallerSidebar: false,
      hasLoaded: 1,
      loadedData: "XX123",
      loadedDataArray: ["XX123", "st"],
    };
  }

  componentDidMount() {
    let concData = [];
    const loadsnapshot = async () => {
      const snapshot = await firebase.firestore().collection("linkTest").get();
      snapshot.forEach((doc) => {
        concData = concData.concat([doc.data()]);
      });
    };

    console.log(
      loadsnapshot().then(async () => {
        console.log(concData);

        this.setState({ loadedDataArray: concData });
      })
    );

    window.addEventListener("hashchange", this.toggle1, false);

    document.body.addEventListener("click", async function (e) {
      const cityRef = firebase
        .firestore()
        .collection("totalClicks")
        .doc("value");

      try {
        await firebase.firestore().runTransaction(async (t) => {
          const doc = await t.get(cityRef);

          const newPopulation = doc.data().population + 1;
          t.update(cityRef, { population: newPopulation });
        });
      } catch (e) {
        console.log("Transaction failure:", e);
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("hashchange", this.toggle1.bind(this), false);
  }

  async toggle1() {
    // Initialize document
    const cityRef = firebase.firestore().collection("totalHits").doc("value");

    try {
      await firebase.firestore().runTransaction(async (t) => {
        const doc = await t.get(cityRef);

        const newPopulation = doc.data().population + 1;
        t.update(cityRef, { population: newPopulation });
      });
    } catch (e) {
      console.log("Transaction failure:", e);
    }
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

      firebase.performance();
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
            unregister();
            window.location.reload(true);
          }
        }
      });
    } catch (error) {}
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
              <Fragment>
                <App />
                <Suspense
                  fallback={
                    <div className="loader-container">
                      <div className="loader-container-inner">
                        <div className="text-center loader">
                          <Loader
                            style={{
                              transform: "scale(5.5)",
                              top: "-100px",
                              position: "relative",
                              left: "10px",
                              float: "center",
                            }}
                            type="ball-clip-rotate-multiple"
                          />
                        </div>
                        <h2 className="mt-3" style={{ color: "white" }}>
                          Loading...
                          <small style={{ color: "white" }}>
                            Welcome to MicroHawaii
                          </small>
                        </h2>
                      </div>
                    </div>
                  }
                >
                  <Switch>
                    <Route path="/dashboards" component={Dashboards} />
                    <Route path="/" component={LandingPage} />
                  </Switch>
                </Suspense>
                <ToastContainer />
              </Fragment>
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
