import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginRedirect from "./LoginRedirect";
import LoginAct from "./Login.js";

// Pages

// Layout

// Theme Options

const Login = () => {
  return (
    <Router>
      <Switch>    
          <Route path="*" component={LoginAct} />
      </Switch>
    </Router>
  );
};

export default Login;
