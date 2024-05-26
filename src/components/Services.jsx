import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import item1 from "../assets/1.jpg";
import item2 from "../assets/3.jpg";

function Services() {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        showArrows={false}
        autoPlay
        showThumbs={false}
        showStatus={false}
        // showIndicators={false}
        interval={4000}
      >
        <div>
          <img src={item1} alt="Item1" />
          <p>Item1</p>
        </div>
        <div>
          <img src={item2} alt="Item2" />
          <p>Item2</p>
        </div>
      </Carousel>
    </div>
  );
}

export default Services;
