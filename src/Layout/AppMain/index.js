import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import LandingPage from "../../Pages/home";
import { ToastContainer } from "react-toastify";

const Applications = lazy(() => import("../../Pages/Applications"));
const Dashboards = lazy(() => import("../../Pages/Dashboards"));

const AppMain = () => {
  return (
    <Fragment>
      <Suspense
        fallback={
          <div className="loader-container">
            <div className="loader-container-inner">
              <div className="text-center">
                <Loader type="ball-pulse" />
              </div>
              <h6 className="mt-3">
                Loading Application Tools
                <small>Welcome to MicroHawaii</small>{" "}
              </h6>
            </div>
          </div>
        }
      >
        <Route path="/apps" component={Applications} />
      </Suspense>

      {/* Dashboards */}

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
                <small style={{ color: "white" }}>Welcome to MicroHawaii</small>
              </h2>
            </div>
          </div>
        }
      >
        <Route path="/dashboards" component={Dashboards} />
      </Suspense>

      <Route exact path="/" component={LandingPage} />
      <ToastContainer />
    </Fragment>
  );
};

export default AppMain;
