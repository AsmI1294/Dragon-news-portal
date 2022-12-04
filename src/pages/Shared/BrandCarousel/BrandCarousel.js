import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from "../../../assets/brands/Brand1.png";
import Brand2 from "../../../assets/brands/Brand2.png";
const BrandCarousel = () => {
  return (
    <div>
      <Carousel className="my-2">
        <Carousel.Item>
          <img
            className="d-block w-100 fluid rounded"
            src={Brand1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 fluid rounded"
            src={Brand2}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
