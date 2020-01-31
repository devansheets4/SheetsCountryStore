import React from "react";
import { Switch, Route } from "react-router-dom";
import LandingPage from "./landingpage";
import Access from "./access";
import Gear from "./gear";
import Deli from "./deli";
import About from "./about";

const Main = () => (
  <Switch>
    <Route exact path="/" component={LandingPage} />
    <Route exact path="/access" component={Access} />
    <Route exact path="/gear" component={Gear} />
    <Route exact path="/deli" component={Deli} />
    <Route exact path="/about" component={About} />
  </Switch>
);

export default Main;
