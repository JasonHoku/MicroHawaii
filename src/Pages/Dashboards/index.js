import React, { Fragment } from "react";
import { Route } from "react-router-dom";

// Pages

import HomeDashboard from "./Home/";
import WilliamPage from "./William";
import JohnPage from "./John";
import DavePage from "./Dave";
import ShopPage from "./Shop/";
import GalleryPage from "./Gallery/"; 
import Writing from "./Writing/"; 
import Music from "./Music/"; 
import Contact from "./Contact/"; 
import Projects from "./Projects/"; 
// Layout

import AppHeader from "../../Layout/AppHeader/";
import AppFooter from "../../Layout/AppFooter/";

import AppSidebar from "../../Layout/AppSidebar/";
// Theme Options
import ThemeOptions from "../../Layout/ThemeOptions/";


const Dashboards = ({ match }) => (
  <Fragment>
    <ThemeOptions />
    <div className="app-main">
      <AppSidebar />  
      <div className="app-main__outer">
        <div className="app-main__inner">
          <Route path={`${match.url}/home`} component={HomeDashboard} />
          <Route path={`${match.url}/william`} component={WilliamPage} />
          <Route path={`${match.url}/john`} component={JohnPage} />
          <Route path={`${match.url}/dave`} component={DavePage} />
          <Route path={`${match.url}/shop`} component={ShopPage} />
          <Route path={`${match.url}/gallery`} component={GalleryPage} />
          <Route path={`${match.url}/writing`} component={Writing} />
          <Route path={`${match.url}/music`} component={Music} />
          <Route path={`${match.url}/contact`} component={Contact} />
          <Route path={`${match.url}/projects`} component={Projects} />
        </div>
      </div>
    </div>
  </Fragment>
);

export default Dashboards;
