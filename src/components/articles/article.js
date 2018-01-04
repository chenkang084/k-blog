import React from "react";
import ReactDOM from "react-dom";

const html = require("../articles/1.html");
export default class Article extends React.Component {
  componentDidMount() {
    // document.getElementById("mytest").innerHTML = html;
  }

  render() {
    // console.log(html);

    return <div id="mytest">Article111</div>;
  }
}
