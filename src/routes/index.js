import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from "../components/home/home";
import Nav from "../components/nav/nav";
import Test from "../components/home/test";
const BasicExample = () => (
  <div>
    {/* <Nav /> */}
    <Router history={browserHistory}>
      <Route path="/" component={Nav}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  </div>
);

export default BasicExample;
