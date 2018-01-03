import React from "react";
import ReactDOM from "react-dom";
import CustomSlider from "../slider/slider";
// import Collapse from "../collapse/collapse";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <CustomSlider />
        <div style={{height:"100px"}}>test</div>
      </div>
    );
  }
}
