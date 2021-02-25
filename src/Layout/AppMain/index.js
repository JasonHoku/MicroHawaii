import { Route } from "react-router-dom";
import React, { Suspense, lazy, Fragment } from "react";
import Loader from "react-loaders";

import LandingPage from "../../Pages/home";
import { ToastContainer } from "react-toastify";

import App from "../../Pages/Dashboards/Home/Examples/backgroundeffect";

const Dashboards = lazy(() => import("../../Pages/Dashboards"));

const AppMain = () => {
  return (
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
