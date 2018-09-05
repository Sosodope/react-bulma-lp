import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import Overview from "../Overview";
import Training from "./Training";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/overview" component={Overview} />
    <Route path="/training" component={Training} />
  </Switch>
);

export default Router;
