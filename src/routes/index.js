import React from "react";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import Home from "../components/home/home";
import Nav from "../components/nav/nav";
import WeiStore from "../components/weiStore/weiStore";
import AboutUs from "../components/aboutUs/aboutUs";
import Article from "../components/articles/article";
import ArticleTemplate from "../components/articleTemplate/articleTemplate";

function handleRoute(params) {
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
  <Router history={browserHistory}>
    <Route path="/" component={Nav} onChange={handleRoute}>
      <IndexRoute component={Home} />
      <Route path="home" component={Home} />
      <Route path="weiStore" component={WeiStore} />
      <Route path="aboutUs" component={AboutUs} />
      <Route path="article/template" component={ArticleTemplate} />
    </Route>
  </Router>
);

export default appRouters;
