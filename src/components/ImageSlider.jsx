import React from 'react';
import Slider from 'react-slick';
import space from '../images/space.jfif';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = () => {
  const settings = {
    dots: true, // Enables the dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay speed to 3000ms
  };

  return (
    <div>
      
      <Slider {...settings}>
        <div>
          <img src={space} alt="Slide 1" />
        </div>
        <div>
          <img src={space} alt="Slide 1" />
        </div>
        <div>
          <img src={space} alt="Slide 1" />
        </div>
        <div>
          <img src={space} alt="Slide 1" />
        </div>
        <div>
          <img src={space} alt="Slide 1" />
        </div>
        <div>
          <img src={space} alt="Slide 1" />
        </div>
       
      </Slider>
    </div>
  );
}

export default ImageSlider;
