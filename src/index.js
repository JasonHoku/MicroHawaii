import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./polyfills";

import React from "react";
import ReactDOM from "react-dom";

import { Router, Switch, Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom";
import "./App.scss";
import "./App.js";
import Main from "./Pages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import LoginRedirect from "./Login/LoginRedirect";
import reportWebVitals from "./reportWebVitals";

const store = configureStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
      <Route path="/connect/google/redirect" component={LoginRedirect} />
    </HashRouter>
  </Provider>,
  rootElement
);

serviceWorker.register();

reportWebVitals();
