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
    <div className="relative overflow-hidden ">
      <Slider {...settings}>
        <div className="relative flex justify-center items-center h-[600px]  ">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              className="w-full h-full object-cover brightness-50"
              src="/banner1.avif"
              alt="Banner 1"
              width={1200}
              height={600}
            />
          </div>
          <div className="relative top-1/2  z-10 text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Cleaning Services</h1>
            <p className="text-xl">Your trusted partner in cleanliness</p>
          </div>
        </div>
        <div className="relative flex justify-center items-center h-[600px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="w-full h-full object-cover brightness-50"
              src="/images/banner2.jpg"
              alt="Banner 2"
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Eco-Friendly Solutions</h1>
            <p className="text-xl">Sustainable and effective</p>
          </div>
        </div>
        <div className="relative flex justify-center items-center h-[600px]">
          <div className="absolute inset-0 overflow-hidden">
            <img
              className="w-full h-full object-cover brightness-50"
              src="/images/banner3.jpg"
              alt="Banner 3"
            />
          </div>
          <div className="relative z-10 text-center text-white">
            <h1 className="text-4xl font-bold mb-2">Expert Team</h1>
            <p className="text-xl">Skilled professionals at your service</p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SliderBanner;
