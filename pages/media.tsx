import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Carousel} from 'antd';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowDown} from "@fortawesome/free-solid-svg-icons"

import FloatButtonComp from 'components/floatButton';
import Header from '../components/header';
import Banner from '../components/banner';
import INVASION from '../public/invasion.png';
import ALAN from '../public/alanwake.png';
import DCU from '../public/dcu.png';
import CAPCOM from '../public/capcom.png';
import MW3 from '../public/MW3.png';
import REM2 from '../public/REM2.png';
import APEX from '../public/apex.png';
import F4 from '../public/F4.png';
import DUNE from '../public/dune.png';
import Footer from 'components/footer';

import "../styles/globals.css";


export default function Media () {

  
  return (
    <div className="media">
      <Head>
        <title>
          GMRseat Media Content
        </title>
        <meta name="description" content="GMRseat Media page including Tiktok clips, Youtube shorts, podcasts and more."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <FloatButtonComp/>
      <div className="flex h-full w-full">
        <div className="max-w-5xl mx-auto py-4">
          <Header/>
          <Banner/>
          <div className="flex justify-center content-center overflow-hidden">
            <div className="z-20 hover:z-0 hover:brightness-[.4] 
              brightness-[.9] transition-translate duration-500 ease-in-out">
            <Link id='mainImg' href="https://www.youtube.com/watch?v=s-Rw5aTB6Z8&t=233s">
              <Image src={INVASION} alt="Comics Explained" id="mando"
                className="object-cover rounded-sm transition-translate duration-500 ease-in-out"/>
            </Link>
            </div>
            <div className="absolute flex flex-col justify-center content-center items-center 
              text-3xl sm:text-lg font-Megrim font-extrabold text-stone-50 sm:w-[390px] md:w-[150px] 
              md:h-[150px] p-2 sm:mt-[100px] mt-[210px] opacity-80 z-10 rounded-full transition-transform 
              md:scale-95 duration-200 ease-in-out hover:bg-opacity-60 hover:bg-black hover:scale-100 hover:opacity-100 hover:z-30">
              <Link href="https://www.youtube.com/watch?v=s-Rw5aTB6Z8&t=233s">
                <h1>Click Here</h1>
                <div className="flex flex-col justify-center content-center items-center opacity-30 ">
                  <FontAwesomeIcon icon={faArrowDown} className='ml-2 h-8 w-8 text-stone-50' />
                </div>
              </Link>

            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex flex-row justify-center items-center mb-10">
              <div className="flex justify-center pr-6 overflow-hidden cursor-default">
                <Link href="https://gmrseat.com/post/alan-wake-2" aria-details='Alan Wake 2 Blog'>
                  <Image src={ALAN} alt="Alan Wake 2" 
                    className="h-64 w-52 object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                </Link>
                <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                  bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                  A Sequel to Horror
                </h1>
              </div>
              <div className="flex justify-center pr-6 overflow-hidden cursor-default">
                <Link href="https://gmrseat.com/post/the-flash-flashpoints-moral-dilemma" aria-details='The Flash'>
                  <Image src={DCU} alt="DCU" width={200} 
                    className="h-64 w-52  object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                </Link>
                <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                  bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                  James Gunns DCU
                </h1>
              </div>
              <div className="flex justify-center pr-6 overflow-hidden cursor-default">
                <Link href="https://www.youtube.com/watch?v=GsTU5tTCSkQ" aria-details='Capcom Spotlight'>
                  <Image src={CAPCOM} alt="Capcom Spotlight" width={200} 
                    className="h-64 w-52  object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                </Link>
                <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                  bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                  Capcom Spotlight
                </h1>
              </div>
            </div>
            <hr className="border-[#992715de] mb-5"/>
            <h1 className="text-black dark:text-white underline decoration-[#992715de] font-bold 
              text-2xl font-MontserratAlternates mb-8 mt-8">
              Trending:
            </h1>
            <div className="flex flex-row justify-center items-center m-5">
              <iframe src="https://embed.podcasts.apple.com/us/podcast/final-fantasy-xvi-review-kinda-funny-gamescast/id957171516?i=1000617854028"
                allow="autoplay *; encrypF4-media *; fullscreen *; clipboard-write" 
                height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
                sandbox="allow-forms allow-popups allow-same-origin 
                allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
              </iframe>
              <iframe src="https://embed.podcasts.apple.com/us/podcast/diablo-iv-with-jon-gabrus/id1466286684?i=1000617498868"
                allow="autoplay *; encrypF4-media *; fullscreen *; clipboard-write" 
                height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
                sandbox="allow-forms allow-popups allow-same-origin 
                allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
              </iframe>
            </div>
            <div className=" flex flex-col md:flex-row w-[600px] md:w-full scale-90 md:scale-100 md:mr-0 mr-16">
              <div className="flex flex-col justify-start pr-5 ml-[40px] items-center w-[580px]">
                <Carousel autoplay autoplaySpeed={3000} effect="fade" className="w-[580px] h-[250px] mb-5">
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="https://www.youtube.com/watch?v=C_6J06wdgXY" 
                      aria-details='MW3 promo' target="_blank">
                      <Image src={MW3} width={580} height={250} alt="Guardians of the MW3 3 movie promo"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Call of Duty: MW3 Trailer
                    </h3>
                  </div>
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="https://www.youtube.com/watch?v=-9fqU-2Igs8" 
                      aria-details='Remnant 2 walkthrough' target="_blank">
                      <Image src={REM2} width={580} height={250} alt="Remnant 2"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Remnant II 
                    </h3>
                  </div>
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="https://gmrseat.com/post/apex-legends-season-17-arsenal" 
                      aria-details='Apex Legends Season 17: Arsenal' target="_blank">
                      <Image src={APEX} width={580} height={250} alt="Apex Legends Season 17: Arsenal"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Apex Legends: Season 17
                    </h3>
                  </div>
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="https://www.youtube.com/watch?v=eunXKx4aN_Y" 
                      aria-details='Emergency Awesome' target="_blank">
                      <Image src={F4} width={580} height={250} alt="Emergency Awesome"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Emergency Awesome: Fantastic 4
                    </h3>
                  </div>
                </Carousel>
                <div id="scroll" className="flex flex-row overflow-y-scroll 
                  md:grid-cols-2 gap-4 mr-4 pb-12 sm:pb-2 w-[580px] scale-95">
                  <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2"  
                    allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                    width="180" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/X7HNixeDIxA">
                  </iframe>  
                  <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2" src="https://www.youtube.com/embed/A0QxwLH_iPE" 
                    allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen={false} title="YouTube video player" width="180" height="250">
                  </iframe>
                  <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2"  
                    allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                    width="180" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/wzGb4cM1_lo">
                  </iframe>    
                  <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2" src="https://www.youtube.com/embed/fLmu19go2cs" 
                    allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen={false} title="YouTube video player" width="180" height="250">
                  </iframe>  
                  <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2"  
                    allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                    width="180" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/gyFxUYulM4U">
                  </iframe> 
                </div>
              </div>
              <div className="md:flex flex-col h-full hidden">
                <div className="flex justify-center pr-3 pl-3 overflow-hidden pt-5 h-full cursor-pointer">
                  <Link href="https://www.youtube.com/watch?v=Way9Dexny3w" 
                    aria-details='Dune: Part 2' target="_blank">
                    <Image src={DUNE} width={320} height={600} alt="Dune: Part 2" 
                      className="object-cover rounded-sm transition-translate duration-500 ease-in-out hover:brightness-50"/>
                  </Link>
                <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                  duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[350px]">
                <Link href="https://www.youtube.com/watch?v=Way9Dexny3w" 
                  aria-details='Dune: Part 2' target="_blank">
                    Watch the trailer here
                  </Link>
                  </h3>
                </div>
              </div>
            </div>

            <h1 className="text-black dark:text-white underline decoration-[#992715de] font-bold px-2
              md:text-2xl text-xl font-MontserratAlternates pt-6 sm:pt-1 md:pt-0 mb-8 md:mb-6">
              [GMR] Exclusive:
            </h1>
            <div className="flex flex-col">
              <div className="mb-2 sm:py-2 sm:px-1 md:pr-9">
                <div className="flex md:w-[1070px] w-full md:flex-row flex-col sm:justify-center relative shrink md:shrink-0">
                  <section className="flex flex-col items-center sm:w-full md:w-[750px]">
                    <figure className=" flex flex-col content-center items-center sm:w-full md:w-[750px]">
                      <iframe src="https://www.youtube.com/embed/SIbVAK-O3TI" 
                        allowFullScreen={false} width="672" height="350" title="YouTube video player"
                        allow="accelerometer; clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share "
                        className="h-64 w-[400px] sm:w-full sm:h-72 md:w-[670px] md:h-[350px] p-2">
                      </iframe>
                        <figcaption className="flex justify-center flex-row pb-1 
                        sm:w-[350px] w-[95%]">
                          <h3 className="flex justify-center items-center">
                            <Link href="https://www.youtube.com/@GMRseat"
                              className="text-2xl sm:text-xl font-extrabold flex justify-center items-center flex-col
                              font-MontserratAlternates text-white dark:text-black"
                              aria-details='GMRxSeat Youtubue Channel' target="_blank">
                              <p className="text-black dark:text-white">GMRxSeat Content</p> <span className="text-[#992715de]">(<span className="text-black dark:text-white">@</span>GMRxSeat)</span>
                            </Link>
                          </h3>
                        </figcaption>
                    </figure>
                    <div id="scroll" className="flex flex-row overflow-x-scroll overflow-scroll
                      md:grid-cols-2 gap-4 pb-5 sm:pb-2 pt-5 w-[670px] scale-95 md:bg-[#bab8b76c] dark:bg-[#3a3a3a6c] dark:bg-opacity-10">
                      <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2"  
                        allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                        width="180" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/X7Iz4wYu0y8">
                      </iframe>  
                      <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2" src="https://www.youtube.com/embed/WNKv8uxHlEA" 
                        allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen={false} title="YouTube video player" width="180" height="250">
                      </iframe>
                      <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2" src="https://www.youtube.com/embed/AGk9iv2AVPw" 
                        allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen={false} title="YouTube video player" width="180" height="250">
                      </iframe>  
                      <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2"  
                        allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                        width="180" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/1mG-QMtF-YE">
                      </iframe>    
                      <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2"  
                        allow="accelerometer; play clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                        width="180" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/dF2xZ-_jXGI">
                      </iframe> 
                    </div>
                  </section>
                  {/* <GoogleAdSense publisherId={}/> */}
                  <figure className=" flex justify-center items-center flex-col overflow-hidden md:mb-6 object-contain overflow-y-hidden sm:h-0 sm:hidden">
                    <blockquote cite="https://www.tiktok.com/@gmrseat/video/7256873646797409578" data-video-id="7256873646797409578" 
                      className="tiktok-embed sm:max-w-full max-w-[420px] min-w-[325px]"> 
                      <iframe className="scale-90 sm:scale-95 border-t-2 border-[#992715de] border-l-2 sm:w-full"  
                        allow="accelerometer; muF4; mute; clipboard-write; encrypF4-media; gyroscope; picture-in-picture; web-share" 
                        width="375" height="650" title="YouTube video player" allowFullScreen={false} src="https://www.tiktok.com/@gmrseat/video/7256873646797409578">
                      </iframe>   
                    </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
    </div>
  );
};