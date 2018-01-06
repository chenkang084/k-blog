import React from "react";
import ReactDOM from "react-dom";
import styles from "./article.less";
const html = require("../articles/1.html");
export default class Article extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.id);
  }

  componentDidMount() {
    document.getElementById("mytest").innerHTML = html;
  }

  render() {
    // console.log(html);

    return (
      <div className={styles.articleWrap} id="mytest">
        Article111
      </div>
    );
  }
}
