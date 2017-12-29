import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from "../components/home/home";
import Nav from "../components/nav/nav";
import Test from "../components/home/test";

function yourHandler(params) {
  console.log(params);
  const content = document.getElementById("router-content");
  if (!content.className) {
    content.className = "animated bounceInRight";
    setTimeout(() => {
      content.className = "";
    }, 1000);
  }
}

const appRouters = () => (
  <div>
    <Router history={browserHistory}>
      <Route path="/" component={Nav} onChange={yourHandler}>
        <IndexRoute component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/test" component={Test} />
      </Route>
    </Router>
  </div>
);

export default appRouters;
