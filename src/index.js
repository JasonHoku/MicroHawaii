import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./polyfills";

import React from "react";
import ReactDOM from "react-dom";

import { Route } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom";
import "./App.scss";
import Main from "./Pages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import LoginRedirect from "./Login/LoginRedirect";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import CheckVersions from "./Pages/Main/checkVersions";

const store = configureStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Main />
      <CheckVersions />
      <Route path="/connect/google/redirect" component={LoginRedirect} />
    </HashRouter>
  </Provider>,
  rootElement
);

serviceWorker.register();

reportWebVitals();
