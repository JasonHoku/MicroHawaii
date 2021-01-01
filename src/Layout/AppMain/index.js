import { Route, Redirect } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import LandingPage from "../../Pages/home";
import { ToastContainer } from "react-toastify";

const UserPages = lazy(() => import("../../Pages/UserPages"));
const Applications = lazy(() => import("../../Pages/Applications"));
const Dashboards = lazy(() => import("../../Pages/Dashboards"));
// const Dashboards = lazy(() => import("../../Pages/Dashboards"));

const Widgets = lazy(() => import("../../Pages/Widgets"));
const Elements = lazy(() => import("../../Pages/Elements"));
const Components = lazy(() => import("../../Pages/Components"));
const Forms = lazy(() => import("../../Pages/Forms"));
const Tables = lazy(() => import("../../Pages/Tables"));

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
              <div className="text-center">
                <Loader type="line-scale-party" />
              </div>
              <h6 className="mt-3">
                Loading Dashboard Tools
                <small>Welcome to MicroHawaii</small>
              </h6>
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
