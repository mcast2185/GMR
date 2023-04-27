"use client";

import { useEffect, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Image from 'next/image';


import slide_image_1 from "../public/elden.png";
import slide_image_2 from "../public/GOW.png";
import slide_image_3 from "../public/horizon.png";
import slide_image_4 from "../public/remake.png";
import slide_image_5 from "../public/Pokemon.png";
import slide_image_6 from "../public/hogwarts.png";

import "../styles/carousel.module.css";

// make sure that we understand exactly where we need to enter... being the blog post
// we need to dive into what is making the resolution so slow.
// revert back to last "next project" and see what made the rendering smoothen out
// if need be we will not fast upload the blogs however we need an alternative 
// deploying from a DB and styling as well as arranging content will drastically slow down the launch
// of the website but we need to consider whether or not it is worth it.
// what we have come to understand is that jpeg is for photos while png is for fine art... 
// text heavy images and for images with few colors... 
// the images used in studio must be altered as well as the images that are being used in our public folder
// if possible we need to also render images with a set H and W and adjust the UI the fit the content
// instead of compromising for what is. 
// once we fix the nature of the issue, we need to replace the blogs link button on our menu bar for 
// our products page in which we should promote on our home screen as well as our others page
// if prepping for our launch is the key, lets secure the content on both ends of etsy and printful
// so to only leave our social media in stand by... consider kelly as a source for content as she plays
// overwatch and has reach to a platform that would otherwise be untouched by me

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
    <div className="container">
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
          <div className="flex justify-center ">
            <Image priority src={slide_image_4} alt="Resident evil 4 remake rating of 4.7/5" 
              className='img hover:scale-105 hover:brightness-75 duration-500 
              h-[250px] w-[180px] transition-transform ease-in-out object-contain overflow-hidden'/>
            <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-40 rounded-md absolute
              -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-1">
              4.7/5: 
              </p> 
              <span className="rating" aria-label='4.7 out of 5' role="img"/>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
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
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
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
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="flex justify-center">
            <Image priority src={slide_image_3} alt="Horizon Forbidden West rating of 4/5" 
              className='img hover:scale-105 hover:brightness-75 h-[250px] w-[180px]
              duration-500 transition-transform ease-in-out object-contain overflow-hidden'/>
            <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-[139px] rounded-md absolute
              -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-2">
              4/5: 
              </p> 
              <span className="rating" aria-label='4 out of 5' role="img"/>
            </div> 
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <Image priority src={slide_image_5} alt="Pokemon Legends Arceus rating of 3.9/5" 
              className='img hover:scale-105 hover:brightness-75 duration-500 h-[250px] w-[180px]
              transition-transform ease-in-out object-contain overflow-hidden'/>
            <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-[138px] rounded-md absolute
              -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-1">
              3.9/5: 
              </p> 
              <span className="rating" aria-label='3.9 out of 5' role="img"/>
            </div> 
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="flex justify-center">
            <Image priority src={slide_image_6} alt="4.4/5" 
              className='img hover:scale-105 hover:brightness-75 duration-500 h-[250px] w-[180px]
              transition-transform ease-in-out object-contain overflow-hidden'/>
            <div className="bg-[#3c3c3c] bg-opacity-80 h-9 w-[158px] rounded-md absolute
              -pb-3 mr-2 ml-2 top-[140px] flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-1">
              4.4/5: 
              </p> 
              <span className="rating" aria-label='4.4 out of 5' role="img"/>
            </div> 
            </div>
        </SwiperSlide>

        <div className="slider-controller">
          <div className="flex h-14 w-28 items-center content-center" >
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
  )}
  return (
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#992715de]">
          Just a moment...
        </p>
      </div>)
};

export default Carousel;