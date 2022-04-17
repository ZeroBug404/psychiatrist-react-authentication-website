import React from "react";
import { Carousel } from "react-bootstrap";
import slider1 from '../../../images/slider/slider1.jpg'
import slider2 from '../../../images/slider/slider2.jpg'
import slider3 from '../../../images/slider/slider3.jpg'

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption className="text-dark">
          <h3 style={{fontSize: '45px'}}>There is Always A Better Way</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption className="text-dark">
          <h3 style={{fontSize: '45px'}}>Get Your Issue Sorted</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider3}
          alt="Third slide"
        />

        <Carousel.Caption >
          <h3 style={{fontSize: '45px'}} className="text-dark">Award Winning Psychiatrist </h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
