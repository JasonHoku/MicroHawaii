import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "./polyfills";

import "core-js";

import "core-js/features/set";

import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import { BrowserRouter as Router } from "react-router-dom";

import "./App.scss";
import Main from "./Pages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import "react-toastify/dist/ReactToastify.min.css";
import CheckVersions from "./Pages/Main/checkVersions";

const store = configureStore();
const rootElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Main />
      <CheckVersions />
    </Router>
  </Provider>,
  rootElement
);
function iOS() {
  return (
    [
      "iPad Simulator",
      "iPhone Simulator",
      "iPod Simulator",
      "iPad",
      "iPhone",
      "iPod",
    ].includes(navigator.platform) ||
    // iPad on iOS 13 detection
    (navigator.userAgent.includes("Mac") && "ontouchend" in document)
  );
}
if (iOS) {
  serviceWorker.unregister();
} else {
  serviceWorker.register();
}
reportWebVitals();
