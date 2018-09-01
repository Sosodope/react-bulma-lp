import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./../Home";
import Overview from "../Overview";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/overview" component={Overview} />
  </Switch>
);

export default Router;
