import React, { Component } from "react";
import Slider from "react-slick";

export default class ImageSlick extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2
    };
    return (
      <div>
        <h2> Lazy Load</h2>
        <Slider {...settings}>
          <div>
            <img src={"/abstract01.jpg"} />
          </div>
          <div>
            <img src={"/abstract02.jpg"} />
          </div>
          <div>
            <img src={"/abstract03.jpg"} />
          </div>
          <div>
            <img src={"/abstract04.jpg"} />
          </div>
        </Slider>
      </div>
    );
  }
}