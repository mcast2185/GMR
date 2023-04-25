"use client";

import { useEffect, useState } from 'react';
import {Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Image from 'next/image';


import slide_image_1 from "../public/elden.png";
import slide_image_2 from "../public/GOW.png";
import slide_image_3 from "../public/horizon.png";
import slide_image_4 from "../public/mcu.png";
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
          <div className="h-auto w-auto flex 
            items-center !md:invisible !sm:invisible scale-95">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible 
              bg-opacity-80 h-9 duration-500 transition-transform ease-in-out w-40 rounded-md 
              absolute pl-1 pr-0 mr-0 ml-1 top-36 flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3]  text-base !pt-0">
              4.8/5: 
              </p> 
              <span className="rating" aria-label='4.8 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_1} alt="4.8/5" height={400} width={300} 
            className='img hover:scale-95 hover:brightness-75 duration-500 
              transition-transform ease-in-out object-cover overflow-hidden'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible scale-95">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible 
              bg-opacity-80 h-9 duration-500 transition-transform ease-in-out w-40 
              rounded-md absolute pl-1 pr-0 mr-0 ml-1 top-36 flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-1">
              4.8/5: 
              </p> 
              <span className="rating" aria-label='4.8 out of 5' role="img"/>
            </div> 
          <Image priority src={slide_image_2} alt="4.8/5" height={400} width={300} 
            className='img hover:scale-95 hover:brightness-75 duration-500 
            transition-transform ease-in-out object-cover overflow-hidden'/>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible scale-95">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible 
              bg-opacity-80 h-9 duration-500 transition-transform ease-in-out w-36 rounded-md 
              absolute pl-1 pr-0 mr-0 ml-3 top-36 flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-2">
              4/5: 
              </p> 
              <span className="rating" aria-label='4 out of 5' role="img"/>
            </div> 
          <Image priority src={slide_image_3} alt="4/5" height={400} width={300} 
            className='img hover:scale-95 hover:brightness-75 
            duration-500 transition-transform ease-in-out object-cover overflow-hidden'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible scale-95">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible 
              bg-opacity-80 h-9 duration-500 transition-transform ease-in-out w-28 rounded-md 
              absolute pl-1 pr-0 mr-0 ml-7 top-36 flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-1">
              2.6/5: 
              </p> 
              <span className="rating" aria-label='2.6 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_4} alt="2.6/5" height={400} width={300} 
            className='img hover:scale-95 hover:brightness-75 duration-500 
            transition-transform ease-in-out object-cover overflow-hidden'/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible scale-95">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible 
              bg-opacity-80 h-9 duration-500 transition-transform ease-in-out w-36 rounded-md 
              absolute pl-1 pr-0 mr-0 ml-3 top-36 flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-1">
              3.9/5: 
              </p> 
              <span className="rating" aria-label='3.9 out of 5' role="img"/>
            </div> 
          <Image priority src={slide_image_5} alt="3.9/5" height={400} width={300} 
            className='img hover:scale-95 hover:brightness-75 duration-500 
            transition-transform ease-in-out object-cover overflow-hidden'/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible scale-95">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible 
              bg-opacity-80 h-9 duration-500 transition-transform ease-in-out w-40 rounded-md 
              absolute pl-1 pr-0 mr-0 ml-1 top-36 flex flex-row justify-center items-center scale-90">
              <p className="text-[#d3d3d3] text-base pl-1">
              4.4/5: 
              </p> 
              <span className="rating" aria-label='4.4 out of 5' role="img"/>
            </div> 
          <Image priority src={slide_image_6} alt="4.4/5" height={400} width={300} 
            className='img hover:scale-95 hover:brightness-75 duration-500 
            transition-transform ease-in-out object-cover overflow-hidden'/>
            </div>
        </SwiperSlide>

        <div className="slider-controller">
          <div className="flex h-14 w-28 items-center content-center" >
            <div className="swiper-pagination"></div>
          </div>
        </div>
        {/* <div className="slider-controller">
          <div className="flex h-14 w-28 items-center content-center" >
            <div className="swiper-button-prev slider-arrow-left ">
            </div>
            <div className="swiper-button-next slider-arrow-right">
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div> */}
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