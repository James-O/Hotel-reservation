import React from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block",width:"4%", height:"8%", background: "#4C3BCF", marginRight:"3.6%", marginTop:"17.5%", padding:"10px", borderRadius:"10px"}}
        onClick={onClick}
      />
    );
  }

function SliderTwo() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <SampleNextArrow />,
  };
  return (
    <div className="slider-container container mb-5">
      <Slider {...settings}>
        <div className="row d-flex">
          <div className="col-md-7">
            <h1>Testimonials</h1>
            <p className="h5 text-black-50">
                Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="h5 text-black-50 my-5">
                Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-flex gap-2">
                <img src="images/passport1.PNG" className="rounded-pill" alt="#"/>
                <div>
                    <h3>Charlotte Hale</h3>
                    <span>CEO, Delos inc</span>
                </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src="images/testimonial1.PNG" className="w-100 rounded" alt="Testimonials"/>
          </div>
        </div>
        <div className="row d-flex">
          <div className="col-md-7">
            <h1>Testimonials</h1>
            <p className="h5 text-black-50">
                Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="h5 text-black-50 my-5">
                Here are what some of our amazing customers are saying about our hotels & tours. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="d-flex gap-2">
                <img src="images/passport2.PNG" className="rounded-pill" alt="#"/>
                <div>
                    <h3>Adams Chuppy</h3>
                    <span>Founder EventsNYC</span>
                </div>
            </div>
          </div>
          <div className="col-md-5">
            <img src="images/testimonial2.PNG" className="w-100 rounded" alt="Testimonials"/>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default SliderTwo;