'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

const Hero = () => {
  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 2,
      spacing: 15,
    },
  });
  return (
    <div className="h-vh mt-10">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide number-slide1 h-[520px] bg-slate-500 shadow-xl rounded-md">
          <div className="relative top-96 w-full h-full flex flex-col items-end px-20">
            <h1 className="text-white mt-10">Title</h1>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 h-[520px] bg-slate-500 shadow-xl rounded-md">
          <div className="relative top-96 w-full h-full flex flex-col items-end px-20">
            <h1 className="text-white mt-10">Title</h1>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 h-[520px] bg-slate-500 shadow-xl rounded-md">
          <div className="relative top-96 w-full h-full flex flex-col items-end px-20">
            <h1 className="text-white mt-10">Title</h1>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 h-[520px] bg-slate-500 shadow-xl rounded-md">
          <div className="relative top-96 w-full h-full flex flex-col items-end px-20">
            <h1 className="text-white mt-10">Title</h1>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 h-[520px] bg-slate-500 shadow-xl rounded-md">
          <div className="relative top-96 w-full h-full flex flex-col items-end px-20">
            <h1 className="text-white mt-10">Title</h1>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1 h-[520px] bg-slate-500 shadow-xl rounded-md">
          <div className="relative top-96 w-full h-full flex flex-col items-end px-20">
            <h1 className="text-white mt-10">Title</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
