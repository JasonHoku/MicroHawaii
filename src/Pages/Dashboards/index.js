import React, { Fragment, lazy } from "react";
import { Route } from "react-router-dom";

import Contact from "./Contact/";
import ShopPage from "./Shop/";
import GalleryPage from "./Gallery/";
import Music from "./Music/";
import Writing from "./Writing/";
import Projects from "./Projects/";
import HomeDashboard from "./Home/";
import Services from "./Services/";
import CalendarPage from "./Calendar/";

const Account = lazy(() => import("./Account/"));
const Privacy = lazy(() => import("./PrivacyPolicy/"));
const Terms = lazy(() => import("./TermsOfService/"));

// Layout
// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppSidebar from "../../Layout/AppSidebar/";
import AppFooter from "../../Layout/AppFooter/";

// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";
const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <AppHeader />
    <div className="app-main">
      <AppSidebar />
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/home`} component={HomeDashboard} />
          <Route path={`${match.url}/services`} component={Services} />
          <Route path={`${match.url}/shop`} component={ShopPage} />
          <Route path={`${match.url}/gallery`} component={GalleryPage} />
          <Route path={`${match.url}/writing`} component={Writing} />
          <Route path={`${match.url}/music`} component={Music} />
          <Route path={`${match.url}/contact`} component={Contact} />
          <Route path={`${match.url}/projects`} component={Projects} />
          <Route path={`${match.url}/privacy`} component={Privacy} />
          <Route path={`${match.url}/termsofservice`} component={Terms} />
          <Route path={`${match.url}/calendar`} component={CalendarPage} />
          <Route path={`${match.url}/account`} component={Account} />
        </div>
        <AppFooter />
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
