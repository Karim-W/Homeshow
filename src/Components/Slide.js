import React from "react";
import "react-slideshow-image/dist/styles.css";
import { Slide } from "react-slideshow-image";
import Carousel from 'react-bootstrap/Carousel';
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../Styles/slides.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

function Slides(props) {
  var slideshow = props.items;
  console.log(slideshow);

  return (
      <div className="slideItem">
    <Carousel fade>
    <Carousel.Item>
      <img
        className="slideImage"
        src={slideshow[0].url}
        alt="First slide"
      />
      <Carousel.Caption>
      <h3 className="slideText">{slideshow[0].title}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="slideImage"
        src={slideshow[1].url}
        alt="First slide"
      />
      <Carousel.Caption>
      <h3 className="slideText">{slideshow[1].title}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="slideImage"
        src={slideshow[2].url}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 className="slideText">{slideshow[2].title}</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    
  </Carousel> 
  </div>   
  );
}

export default Slides;
