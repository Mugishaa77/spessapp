import React from 'react';
import Slider from 'react-slick';
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
      <h2> Image Slider</h2>
      <Slider {...settings}>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Slide+1" alt="Slide 1" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Slide+2" alt="Slide 2" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Slide+3" alt="Slide 3" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Slide+4" alt="Slide 4" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Slide+5" alt="Slide 5" />
        </div>
        <div>
          <img src="https://via.placeholder.com/600x400?text=Slide+6" alt="Slide 6" />
        </div>
      </Slider>
    </div>
  );
}

export default ImageSlider;
