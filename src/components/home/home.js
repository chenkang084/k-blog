import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import styles from "./home.less";
console.log(styles);

export default class Home extends React.Component {
  render() {
    var settings = {
      dots: true,
      infinite: true,
      // autoplay: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
            <h3 className={styles.test}>1</h3>
          </div>
          <div>
            <h3 className={styles.test}>2</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
