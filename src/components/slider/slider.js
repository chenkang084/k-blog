import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import styles from "./slider.less";
// console.log(styles);

export default class CustomSlider extends React.Component {
  defaultSettings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  sliderList = [
    { img: "../../assets/imgs/sliders/1.jpg" },
    { img: "../../assets/imgs/sliders/2.jpg" }
  ];

  render() {
    return (
      <div id="home-slider-container">
        <Slider {...this.defaultSettings}>
          <div className={styles.sliderImgContainer}>
            <div
              style={{
                background: "url(../../assets/imgs/sliders/1.jpg) no-repeat",
                width: "100%",
                height: "600px",
                backgroundSize: "cover"
              }}
            />
          </div>
          <div className={styles.sliderImgContainer}>
            <div
              style={{
                background: "url(../../assets/imgs/sliders/2.jpg) no-repeat",
                width: "100%",
                height: "600px",
                backgroundSize: "cover"
              }}
            />
          </div>
        </Slider>
      </div>
    );
  }
}
