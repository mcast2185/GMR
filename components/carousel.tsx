"use client";

import { useEffect, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Image from 'next/image';

import slide_image_1 from "../public/elden.png";
import slide_image_2 from "../public/GOW.png";
import slide_image_3 from "../public/ffxvi.png";
import slide_image_4 from "../public/remake.png";
import slide_image_5 from "../public/zelda.png";
import slide_image_6 from "../public/REM.png";

import "../styles/globals.css";


const Carousel = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", ()=> setIsLoaded(true));
      return () => window.removeEventListener("load", ()=> setIsLoaded);
    };
  });

  if (isLoaded == true) {
    return (
      <div className="container sm:pl-[3rem] sm:pr-[3rem] md:px-[21rem] md:pl-[21rem] sm:mt-[3.5vh]">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5}}
            pagination={{el: ".swiper-pagination", clickable: true}}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              enabled: true
            }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="swiper_container">

          <SwiperSlide>
            <div className="flex justify-center">
              <figure>
                <Image priority src={slide_image_4} alt="Resident evil 4 remake rating of 4.7/5" 
                  className='img hover:scale-105 hover:brightness-75 duration-500 
                  h-[175px] w-[168px] transition-transform ease-in-out object-contain overflow-hidden'/>
                <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-40 rounded-md absolute
                   mr-2 md:ml-2 sm:ml-[.2] top-[140px] flex flex-row justify-center items-center md:scale-90 sm:scale-x-[.8] sm:scale-y-[.9]">
                  <p className="text-[#d3d3d3] text-base pl-1">
                  4.7/5: 
                  </p> 
                  <span className="rating" aria-label='4.7 out of 5' role="img"/>
                </div>
              </figure>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center">
              <figure>
                <Image priority src={slide_image_1} alt="Elden Ring rating of 4.8/5" 
                  className='img hover:scale-105 hover:brightness-75 duration-500 h-[250px] w-[180px]
                    transition-transform ease-in-out object-contain overflow-hidden'/>
                <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-40 rounded-md absolute
                  -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
                  <p className="text-[#d3d3d3]  text-base pl-1">
                  4.8/5: 
                  </p> 
                  <span className="rating" aria-label='4.8 out of 5' role="img"/>
                </div>
              </figure>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center">
              <figure>
                <Image priority src={slide_image_2} alt="God of War Ragnarok rating of 4.8/5" 
                  className='img hover:scale-105 hover:brightness-75 duration-500 h-[250px] w-[180px]
                  transition-transform ease-in-out object-contain overflow-hidden'/>
                <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-40 rounded-md absolute
                  -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
                  <p className="text-[#d3d3d3] text-base pl-1">
                  4.8/5: 
                  </p> 
                  <span className="rating" aria-label='4.8 out of 5' role="img"/>
                </div> 
              </figure>
            </div>
          </SwiperSlide>
          
          <SwiperSlide>
            <div className="flex justify-center">
              <figure>
                <Image priority src={slide_image_3} alt="Final Fantasy 16 rating of 4.2/5" 
                  className='img hover:scale-105 hover:brightness-75 h-[250px] w-[180px]
                  duration-500 transition-transform ease-in-out object-contain overflow-hidden'/>
                <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-[156px] rounded-md absolute
                  -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
                  <p className="text-[#d3d3d3] text-base pl-2">
                  4.2/5: 
                  </p> 
                  <span className="rating" aria-label='4.2 out of 5' role="img"/>
                </div> 
              </figure>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center">
              <figure>
                <Image priority src={slide_image_5} alt="Legend of Zelda: Tears of the Kingdom rating of 4.4/5" 
                  className='img hover:scale-105 hover:brightness-75 duration-500 h-[250px] w-[180px]
                  transition-transform ease-in-out object-contain overflow-hidden'/>
                <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-[158px] rounded-md absolute
                  -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
                  <p className="text-[#d3d3d3] text-base pl-1">
                  4.4/5: 
                  </p> 
                  <span className="rating" aria-label='4.4 out of 5' role="img"/>
                </div> 
              </figure>
              </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex justify-center">
              <figure>
                <Image priority src={slide_image_6} alt="Remnant 2" 
                  className='img hover:scale-105 hover:brightness-75 duration-500 h-[250px] w-[180px]
                  transition-transform ease-in-out object-contain overflow-hidden'/>
                <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-[137px] rounded-md absolute
                  -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
                  <p className="text-[#d3d3d3] text-base pl-1">
                  3.8/5: 
                  </p> 
                  <span className="rating" aria-label='3.8 out of 5' role="img"/>
                </div> 
              </figure>
              </div>
          </SwiperSlide>

          <div className="slider-controller ">
            <div className="flex h-14 w-28 items-center content-center" >
              <div className="swiper-pagination"></div>
            </div>
          </div>
        </Swiper>
      </div>
    );
  }
  return (
    <div role="status">
      <p className="text-center text-lg animate-pulse text-[#992715de]">
        Just a moment...
      </p>
    </div>
  );
};


export default Carousel;