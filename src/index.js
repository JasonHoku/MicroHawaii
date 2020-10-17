import "./polyfills";
import React from "react";
import ReactDOM from "react-dom";

import { Router, Switch, Route } from "react-router-dom";


import * as serviceWorker from "./serviceWorker";

import { HashRouter } from "react-router-dom";
import './App.scss';
import './App.js';
import Main from "./Pages/Main";
import configureStore from "./config/configureStore";
import { Provider } from "react-redux";
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const store = configureStore();
const rootElement = document.getElementById("root");

const renderApp = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Component />
      </HashRouter>
    </Provider>,
    rootElement
  );
};

renderApp(Main);

if (module.hot) {
  module.hot.accept("./Pages/Main", () => {
    const NextApp = require("./Pages/Main").default;
    renderApp(NextApp);

    
  });
}
serviceWorker.unregister();

