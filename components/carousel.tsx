"use client"

import React, { useEffect, useState } from 'react';
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


let original: string = "";
let url: string = "";



const Carousel = () => {
  const [display, setDisplay] = useState(true);
  
  // useEffect(()=> {
  //   const originalURL: string = window.location.origin + "/";

  //   const effect = () => {
  //     original = originalURL;
  //     url = window.document.documentURI;
      
  //     console.log(display);
  //   };

  //   if (window.document.URL === originalURL) {
  //     effect();
  //     setDisplay(true);
      
  //     console.log(window.document.URL, " === ", originalURL);
  //   };
    
  //   if (window.document.URL !== originalURL) {
  //     effect();
  //     setDisplay(false);
      
  //     console.log(window.document.URL, " !== ", originalURL);
  //   };

  //   effect();
  // });

  
  return (
    <>
    {/* {display === true ? */}
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
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible bg-opacity-80 h-16 w-40 rounded-md absolute pt-2 pr-0 mr-0 -bottom-20 right-36 flex flex-row justify-center items-center">
              <p className="text-[#d3d3d3]  text-base pl-1">
              4.8/5: 
              </p> 
              <span className="rating" aria-label='4.8 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_1} alt="4.8/5" height={400} width={300} className='img'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible bg-opacity-80 h-16 w-40 rounded-md absolute pt-2 pr-0 mr-0 -bottom-20 right-36 flex flex-row justify-center items-center">
              <p className="text-[#d3d3d3]  text-base pl-1">
              4.8/5: 
              </p> 
              <span className="rating" aria-label='4.8 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_2} alt="4.8/5" height={400} width={300} className='img'/>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible p-0 m-0">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible bg-opacity-80 h-16 w-36 rounded-md absolute pt-2 pr-1 -bottom-20 right-36 flex flex-row justify-center items-center">
              <p className="text-[#d3d3d3]  text-base pl-2">
              4/5: 
              </p> 
              <span className="rating" aria-label='4 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_3} alt="4/5" height={400} width={300} className='img'/>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible bg-opacity-80 h-16 w-32 rounded-md absolute pt-2 pr-4 -bottom-20 right-36 flex flex-row justify-center items-center">
              <p className="text-[#d3d3d3]  text-base pl-1">
              2.6/5: 
              </p> 
              <span className="rating" aria-label='2.6 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_4} alt="2.6/5" height={400} width={300} className='img'/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible bg-opacity-80 h-16 w-36 rounded-md absolute pt-2 pr-1 -bottom-20 right-36 flex flex-row justify-center items-center">
              <p className="text-[#d3d3d3]  text-base pl-1">
              3.9/5: 
              </p> 
              <span className="rating" aria-label='3.9 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_5} alt="3.9/5" height={400} width={300} className='img'/>
            </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="h-auto w-auto flex items-center !md:invisible !sm:invisible">
            <div className="bg-[#3c3c3c] !md:invisible !sm:invisible bg-opacity-80 h-16 w-40 rounded-md absolute pt-2 pr-0 -bottom-20 right-36 flex flex-row justify-center items-center">
              <p className="text-[#d3d3d3]  text-base pl-1">
              4.4/5: 
              </p> 
              <span className="rating" aria-label='4.4 out of 5' role="img"/>
            </div>
          <Image priority src={slide_image_6} alt="4.4/5" height={400} width={300} className='img'/>
            </div>
        </SwiperSlide>

        <div className="slider-controller">
          <div className="flex h-14 w-28 items-center content-center" >
            <div className="swiper-button-prev slider-arrow-left ">
            </div>
            <div className="swiper-button-next slider-arrow-right">
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
      </Swiper>
    </div>
    {/* : <>{console.log(" Carousel did not appear")}</>} */}
    </>
  )
};

export default Carousel;