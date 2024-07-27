// components/SliderBanner.js
import Image from 'next/image';
import React from 'react';
import Slider from 'react-slick';


const SliderBanner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="flex justify-center items-center">
          <Image className="w-full h-[300px]" src={'/banner1.avif'} alt="Banner 1" width={800} height={500}  />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-full h-auto" src="/images/banner2.jpg" alt="Banner 2" />
        </div>
        <div className="flex justify-center items-center">
          <img className="w-full h-auto" src="/images/banner3.jpg" alt="Banner 3" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
