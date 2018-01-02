import React from "react";
import ReactDOM from "react-dom";
import { axiosService } from "../../services/axios.service";
export default class weiStore extends React.Component {
  componentDidMount() {
    const screenH = window.innerHeight,
      weiStoreDom = document.getElementById("weiStore");

    weiStoreDom.style.height = screenH - 66 - 20 + "px";
  }

  render() {
    return (
      <div>
        {this.weiStore}
        <iframe
          id="weiStore"
          width="100%"
          src="https://weidian.com/item.html?itemID=2193413486&wfr=wx&ifr=itemdetail"
        />
      </div>
    );
  }
}
