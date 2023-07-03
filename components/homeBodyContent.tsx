'use client';

import React, {useRef, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useInView} from "framer-motion";
import { Post } from 'typings';
import Carousel from './carousel';
import { client } from 'lib/sanity.client';
// import ClientSideFetch from './clientSideFetch';

import ELDEN from '../public/elden.png';
import PS from "../public/ps.png"
import GOW from '../public/GOW.png';
import RE4 from '../public/remake.png';
import ZELDA from '../public/zelda.png';
import MARIO from '../public/mario.png';
import BOMB from '../public/bomb.png';
import SPIDER2 from '../public/spider2.png';
import KINDA from '../public/kinda.png';
import No3 from '../public/blackno3.png';
import WIND from '../public/wind.png';
import KRAVEN from '../public/kraven.png';
import KRAVEN2 from '../public/kraven2.png';
import CAPCOM from "../public/capcom.png";
import SPIDEY from "../public/spidey.png";
// import WAR from "../public/warworld.png";
import MK from "../public/mk.png";
import AVATAR from "../public/avatar.png";
import FloatButtonComp from './floatButton';

// GOOGLE_CLIENT_ID

import "../styles/component.css";
import BlogList from './blogList';
import { GoogleAdSense } from 'nextjs-google-adsense';

type Props = {
  posts: Post[];
};

// padding for the new setup
// no negative margins
// 


const HomeBodyContent = ({posts}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <div>
      <Carousel/>
      <hr className="border-[#992715de] mb-0 md:mb-10"/>
      <FloatButtonComp/>
      {/* scale-100 */}
      <main className="sm:w-[390px] md:w-full mx-1 md:mx-0">       
        <div className="flex flex-row  justify-between" >
          <div className="flex flex-col px-0 md:px-4 py-4 md:py-0 shrink md:shrink-0 sm:w-[390px] md:w-[720px] 
            justify-between cursor-default bg-transparent md:bg-[#bab8b76c] dark:bg-[#3a3a3a6c] dark:bg-opacity-10 md:shadow-md">
            <figure id="figure" className="md:px-4">
              <iframe src="https://www.youtube.com/embed/SwANQTAImGc"  
                allowFullScreen={false} height={350} width={660} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="youtubeVideo shrink md:shrink-0 sm:w-[385px] object-cover md:w-[660px] pt-3">
              </iframe>
            </figure>
            <div className="h-[300px] md:h-auto sm:max-w-[390px] md:max-w-[750px] mx-0 sm:pl-[.02rem] md:pl-0 md:mx-10 mb-4 md:mb-0 mt-4 md:mt-0 flex sm:justify-evenly md:justify-center overflow-x-clip">
              <div className="h-full sm:max-w-[390px] md:max-w-full ml-0 mx-auto shrink md:shrink-0 relative flex sm:scale-x-[.95] sm:scale-y-[.95]">
                <h1 className="text-[190px] cursor-default leading-relaxed 
                  space-y-2 pr-4 font-RubikMonoOne stroke-[18px] stroke-black pl-0 z-[-30] absolute md:bottom-[11.2rem] sm:bottom-[-12px]">
                  <span className="flex justify-center items-center mt-4">
                    <span className="stroke-[18px] mix-blend-difference text-5xl sm:text-[2.7rem] absolute sm:top-[-19.2rem] md:top-[-8rem] sm:left-[12.4rem] md:left-[27rem] text-[#4d4d4d] 
                     dark:text-white stroke-white hover:text-transparent hover:stroke-black z-30 transition-transform duration-800 ease-in-out">
                      <i>[GMR]</i>
                    </span>
                      <span className="stroke-[18px] bottom-0 sm:left-[-15.5px] md:left-[0px] sm:top-[-31.5px] md:top-[9.4rem] text-5xl absolute text-[#4d4d4d] 
                        dark:text-white stroke-white hover:text-transparent hover:stroke-black transition-transform duration-800 ease-in-out">
                        <i>seat</i>
                      </span>
                  </span>
                </h1>
                <div className="flex flex-row sm:justify-between sm:w-[390px] md:justify-center items-center 
                  pt-[3.7rem] md:pt-1 md:py-1 mb-4 mt-4 md:mt-2 md:mb-2 h-[150px] md:h-[300px] opacity-80">
                  <div className="flex justify-evenly sm:mr-[.2rem] sm:pr-[.2rem] md:pr-6 overflow-hidden cursor-default">
                    <Link href="https://www.youtube.com/watch?v=SwANQTAImGc">
                      <Image src={PS} alt="Playstation Showcase" 
                        className="h-64 w-56 sm:w-[72vw] sm:h-[29.5vh] object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                    </Link>
                    <h1 className="font-bold md:p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                      sm:scale-x-[.89] sm:scale-y-90 md:scale-100 bg-opacity-80 text-stone-50 mr-0 md:mr-2 
                      text-[.975rem] font-Quicksand absolute sm:flex sm:flex-wrap sm:content-center sm:h-[5vh] sm:w-[30vw] sm:p-[5px]">
                      Playstation Showcase
                    </h1>
                  </div>
                  <div className="flex justify-center pr-2 md:pr-6 overflow-hidden cursor-default">
                    <Link href="https://gmrseat.com/post/marvel-s-spider-man-2">
                      <Image src={SPIDEY} alt="Marvel's spider-man 2" width={200} 
                        className="h-64 w-56 sm:w-[72vw] sm:h-[29.5vh] object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                    </Link>
                    <h1 className="font-bold md:p-2 mt-40 rounded-sm bg-[#3c3c3c] sm:scale-x-[.89] sm:scale-y-90 md:scale-100
                      bg-opacity-80 text-stone-50 mr-0 md:mr-2 text-[.975rem] font-Quicksand absolute sm:flex sm:flex-wrap sm:content-center sm:h-[5vh] sm:w-[30vw] sm:p-[5px]">
                      Marvels Spider-man 2
                    </h1>
                  </div>
                  <div className="flex justify-center pr-2 md:pr-6 overflow-hidden cursor-default">
                    <Link href="https://www.youtube.com/watch?v=GsTU5tTCSkQ">
                      <Image src={CAPCOM} alt="Capcom Spotlight" width={200} 
                        className="h-64 w-56 sm:w-[72vw] sm:h-[29.5vh] object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                    </Link>
                    <h1 className="font-bold md:p-2 mt-40 rounded-sm bg-[#3c3c3c] sm:scale-x-[.89] sm:scale-y-90 md:scale-100
                      bg-opacity-80 text-stone-50 mr-0 md:mr-2 text-[.975rem] font-Quicksand absolute sm:flex sm:flex-wrap sm:content-center sm:h-[5vh] sm:w-[30vw] sm:p-[5px]">
                      Capcom Spotlight
                    </h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-64 md:h-80 max-w-xl md:max-w-2xl px-4 mt-2 md:mt-4 pb-5">
              <div className="max-w-xl md:max-w-2xl h-full flex mx-auto md:mx-0 
                justify-center md:justify-start overflow-hidden shrink md:shrink-0">
                <Link href="/media">
                  <Image className="h-full w-[450px] md:w-[670px] object-cover overflow-hidden
                    hover:scale-105 transition-transform duration-200 ease-in-out"
                    src={BOMB} alt="The Bombcast"/>
                </Link>
                <h1 className="font-semibold p-2 rounded-sm bg-[#3c3c3c] 
                  bg-opacity-80 text-stone-50 mr-0 md:mr-2 text-base md:text-xl font-MontserratAlternates absolute">
                  Gaming Podcasts
                </h1>
              </div>
            </div>
          </div>
          
          <section className="quickTopics">
            <div className="flex flex-col items-center content-center mb-1 -px-4
              bg-[#7d7d7d6c] shadow-md w-80 h-auto overflow-scroll font-Quicksand">
              <h1 className='text-3xl mt-2 text-black dark:text-white
                font-semibold decoration-white font-Megrim'>
                Top Picks:
              </h1>
              <div className="w-72 border-t-4 mt-2 border-[#ffff] pl-2">
                <div className="ml-2 mr-1 h-44 flex flex-row">
                  <div className="mt-5 flex flex-row py-4">
                    <Link aria-details="linking user to amazons listing of god of war" 
                      rel="canonical" target="_blank" className="w-40 h-36"
                      href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=f90403a38738b3845dafb097c953e9f0&camp=1789&creative=9325&index=videogames&keywords=GodofwarRagnarok">
                      <Image src={GOW} height={100} width={90} alt="God of War Ragnarok"/>
                    </Link>
                    <div className="flex flex-col p-2 px-2">
                      <h3 className='font-bold text-white text-sm'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Title:</b></span> God of War Ragnarok
                      </h3>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Developer:</b></span> SCE Santa Monica
                      </p>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Genre(s):</b></span> Open-World, Action Adventure
                      </p>
                    </div>
                  </div>
                  <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
                </div>
              </div>
              <div className="w-72 border-t mt-5 border-slate-50 pl-2 ">
                <div className="ml-2 mr-1 h-44 flex flex-row">
                  <div className="mt-5 flex flex-row py-5">
                    <Link aria-details="linking user to amazons listing of elden ring" 
                      rel="canonical" target="_blank" className="w-40 h-36"
                      href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=d33174dbd8c58782cebf8ceabd8afc27&camp=1789&creative=9325&index=videogames&keywords=eldenring">
                      <Image src={ELDEN} height={100} width={90} alt="Elden Ring"/>
                    </Link>
                    <div className="flex flex-col px-2 pt-2" >
                      <h3 className='font-bold text-sm text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Title:</b></span> Elden Ring
                      </h3>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Developer:</b></span> From Software
                      </p>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Genre(s):</b></span> Role-Playing, Action RPG
                      </p>
                    </div>
                  </div>
                  <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
                </div>
              </div>
              <div className="w-72 border-t mt-5 border-slate-50 pl-2">
                <div className="ml-2 mr-1 h-44 flex flex-row">
                  <div className="mt-5 flex flex-row py-4">
                    <Link aria-details="linking user to amazons listing of Resident evil 4" 
                      rel="canonical" target="_blank" className="w-40 h-36"
                      href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=550babf87bfbf73e5b58e310a591184f&camp=1789&creative=9325&index=videogames&keywords=residentevil4remake">
                      <Image src={RE4} height={100} width={90} alt="Resident evil 4"/>
                    </Link>
                    <div className="flex flex-col px-4 pt-2" >
                      <h3 className='font-bold text-sm text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Title:</b></span> Resident Evil 4 Remake
                      </h3>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Developer:</b></span> Capcom
                      </p>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Genre(s):</b></span> Survival
                      </p>
                    </div>
                  </div>
                  <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
                </div>
              </div>
              <div className="w-72 border-t mt-5 border-slate-50 pl-2 ">
                <div className="ml-2 mr-1 h-44 flex flex-row">
                  <div className="mt-5 flex flex-row py-2">
                    <Link aria-details="linking user to amazons listing of Mario+Rabbids Sparks of Hope" 
                      rel="canonical" target="_blank" className="w-40 h-36"
                      href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=8a8d67cccd6b6a6fa73c38eec8d8a749&camp=1789&creative=9325&index=videogames&keywords=MarioRabbidsSparksofHope">
                      <Image src={MARIO} height={100} width={90} alt="Mario+Rabbids Sparks of Hope"/>
                    </Link>
                    <div className="flex flex-col px-2 pt-2" >
                      <h3 className='font-bold text-sm text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Title:</b></span> Mario+Rabbids Sparks of Hope
                      </h3>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Developer:</b></span> Ubisoft Paris, Ubisoft Milan
                      </p>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Genre(s):</b></span> Strategy, Turn-Based
                      </p>
                    </div>
                  </div>
                  <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
                </div>
              </div>
              <div className="w-72 border-t mt-5 border-slate-50 pl-2 mb-0 md:mb-5">
                <div className="ml-2 mr-1 h-44 flex flex-row">
                  <div className="mt-5 flex flex-row py-2">
                    <Link aria-details="linking user to amazons listing of Persona 5" 
                      rel="canonical" target="_blank" className="w-40 h-36"
                      href="https://www.amazon.com/Legend-Zelda-Breath-Wild-Nintendo-Switch/dp/B097B2YWFX/?_encoding=UTF8&amp;pd_rd_w=4SS9f&amp;content-id=amzn1.sym.fd890e16-d287-4109-9166-cf98a9958c4e&amp;pf_rd_p=fd890e16-d287-4109-9166-cf98a9958c4e&amp;pf_rd_r=FWM6T4BSX73KRV2W2HKF&amp;pd_rd_wg=DJObG&amp;pd_rd_r=fcc42428-8780-4d6c-a6fc-3548d9f2f88e&amp;ref_=pd_gw_ci_mcx_mr_hp_atf_m&_encoding=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=d465f703177c89a958ea493909354fcd&camp=1789&creative=9325">
                      <Image src={ZELDA} height={100} width={90} alt="Legend of Zelda: Tears of the Kingdom"/>
                    </Link>
                    <div className="flex flex-col px-4 pt-2" >
                      <h3 className='font-bold text-sm text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Title:</b></span> Legend of Zelda: Tears of the Kingdom
                      </h3>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Developer:</b></span> Nintendo Entertainment Planning & Development
                      </p>
                      <p className='font-medium text-xs text-white'>
                        <span className="text-slate-900 dark:text-slate-200"><b>Genre(s):</b></span> Action-adventure
                      </p>
                    </div>
                  </div>
                  <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
                </div>
              </div>
            </div>
          </section>
          </div>
          <h1 className="text-black dark:text-white underline decoration-[#992715de] font-bold px-2
            md:text-2xl text-xl font-MontserratAlternates py-[0.05rem] md:py-0 mb-1 md:mb-6">
            Related:
          </h1>
      <div className="w-full h-[250px] sm:h-[200px] py-4 sm:py-0 cursor-default" >
          <Link href="https://www.youtube.com/watch?v=difL_diHo2o" aria-details="Avatar video game trailer" 
            rel="canonical" target="_blank">
            <Image className="w-full sm:w-[360px]" alt="Avatar game" src={AVATAR}></Image>
          </Link>
          </div>
          <div className="border-r-2 border-opacity-40 border-black dark:border-white ">
          <section ref={ref} className="mb-2 md:mb-8 py-0 md:py-0">
            <div className="flex flex-col md:flex-row w-full relative shrink md:shrink-0 mx-0 md:mx-0">
              <div className="mb-2 md:mb-5 sm:mr-[3.3px] sm:ml-[3.3px] md:pr-3 md:pt-8 flex justify-between sm:w-[390px] md:w-[600px] sm:scale-x-90 sm:scale-y-90 md:scale-100" >
                <div className="flex justify-center mr-[.65rem] md:mr-3 overflow-hidden border-t-2 border-black scale-105">
                  <section className="grid clearfix" id="grid" style={{
                    transform: isInView ? "none" : "translateX(-20px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
                    <Link href="/brand" className="linktag"
                      data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
                      <figure id="figure">
                        <Image src={No3} className="imgtag"
                          alt="GMR clothing" />
                        <svg viewBox="0 0 180 320" preserveAspectRatio="none" id="svg">
                          <path className="path" d="M 180,160 0,218 0,0 180,0 z"/>
                        </svg>
                        <figcaption id="figcaption">
                          <h2 className="font-Megrim">Apparel</h2>
                          <p className="font-Quicksand">GMR gear for the Gamer.</p>
                          <button className="bg-[rgba(0,0,0,.45)]">Quick look </button>
                        </figcaption>
                      </figure>
                    </Link>
                  </section>
                </div>
                <div className="flex justify-center mr-[.65rem] md:mr-3 
                  overflow-hidden border-t-2 border-black scale-105">
                  <section className="grid clearfix" id="grid" style={{
                    transform: isInView ? "none" : "translateX(-15px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
                    <Link href="/media" className="linktag">
                      <figure id="figure">
                          <Image src={KINDA} alt="Whats Good Games podcast"
                            className="imgtag opacity-50 scale-90"/>
                            <svg viewBox="0 0 180 320" preserveAspectRatio="none" id="svg">
                            <path id="path" d="M 180,160 0,218 0,0 180,0 z"/>
                          </svg>
                          <figcaption id="figcaption">
                            <h2 className="font-Megrim">Podcasts</h2>
                            <button className="bg-[rgba(0,0,0,.45)]">Quick look</button>
                          </figcaption>
                      </figure>
                    </Link>
                  </section>
                </div>
                <div className="flex justify-center mr-[.65rem] md:mr-3 
                  pb-5 overflow-hidden border-t-2 border-black scale-105">
                  <section className="grid clearfix" id="grid" style={{
                    transform: isInView ? "none" : "translateX(-10px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
                    <Link href="/media" className="linktag "
                      data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
                      <figure id="figure">
                        <Image src={SPIDER2} className="imgtag opacity-30"
                          alt="Marvel's Spider-Man 2" />
                        <svg viewBox="0 0 180 320" preserveAspectRatio="none" id="svg">
                          <path className="path" d="M 180,160 0,218 0,0 180,0 z"/>
                        </svg>
                        <figcaption id="figcaption">
                          <h2 className="font-Megrim">Coming Soon</h2>
                          <p className="font-Quicksand">Stay updated on upcoming content.</p>
                          <button className="bg-[rgba(0,0,0,.45)]">Quick look</button>
                        </figcaption>
                      </figure>
                    </Link>
                  </section>
                </div> 
              </div>
              <div className=" mb-6 md:mb-0 px-2 md:px-8 pt-2 flex md:flex-none justify-between ">
                <section id="flash-parent-tag" style={{
                  transform: isInView ? "none" : "translateY(-20px)",
                  opacity: isInView ? 1 : 0,
                  transition: "all 1.75s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
                  <Link target="_blank" href="https://www.youtube.com/watch?v=rze8QYwWGMs">
                    <figure id="flash-wrapper" className="flex mt-[25px] h-[250px] md:h-[220px] sm:w-[370px] mr-[10px] ml-[10px] sm:mr-0 sm:ml-[4px]">
                      <Image className="h-[250px] md:h-[220px] sm:w-[370px] img-transform" 
                        id="flash" src={KRAVEN} alt="KRAVEN the Hunter movie"/>
                      <Image className="h-[250px] md:h-[220px] sm:w-[370px] img-effect" 
                        id="flash" src={KRAVEN2} alt="KRAVEN the Hunter movie"/>
                      <figcaption id="flash-content">
                        {/* <h3 id="prompt-one" className="font-RubikMonoOne text-lg">Official trailer</h3> */}
                        <h3 id="prompt-two" className="font-RubikMonoOne text-lg"> Click here to watch</h3>
                      </figcaption>
                    </figure>
                  </Link> 
                </section>
              </div>
            </div>
          </section>
          <h1 className="text-black dark:text-white underline decoration-[#992715de] font-bold px-2
            md:text-2xl text-xl font-MontserratAlternates pt-6 md:pt-0 mb-8 md:mb-6">
            GMR Exclusive Content:
          </h1>
          <div className="flex flex-col">
           
            <section className="mb-2 py-5 px-1 md:px-4">
              <div className="flex md:w-[700px] w-full md:flex-row flex-col sm:justify-center relative shrink md:shrink-0">
                <figure className=" flex justify-center items-center flex-col">
                  <iframe src="https://www.youtube.com/embed/5QE60SU8usQ" 
                    allowFullScreen={false} width="672" height="350" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
                    className="h-64 w-[400px] md:w-[670px] md:h-[350px] p-2">
                  </iframe>
                    <figcaption className="flex justify-center flex-row pb-1 bg-[#bab8b76c] dark:bg-[#3a3a3a6c] dark:bg-opacity-10 sm:w-[350px] w-[390px]">
                      <h3 className="flex justify-center">
                        <Link href="https://www.youtube.com/@emergencyawesome"
                          className="text-2xl sm:text-xl font-extrabold font-MontserratAlternates text-white dark:text-black"
                          aria-details='Emergency Awesome Youtubue Channel' target="_blank">
                          <p className="text-black dark:text-white">Emergency Awesome</p> (@emergencyawesome)
                        </Link>
                      </h3>
                    </figcaption>
                </figure>


                {/* <GoogleAdSense publisherId={}/> */}
                <figure className=" flex justify-center items-center flex-col md:pl-[75px] md:mb-6 object-contain">
                  <Link href="https://www.youtube.com/@emergencyawesome"
                    aria-details='Mortal Kombat blog' target="_blank">
                    <Image alt="Mortal Combat" src={MK}
                      className="sm:w-[340px] md:w-[300px] sm:h-[200px] md:h-[250px] sm:py-1 hover:scale-95 
                      object-cover rounded-sm transition-translate duration-500 ease-in-out hover:brightness-50"/>
                  </Link>
                  <figcaption className="flex justify-center flex-row mt-3 bg-[#bab8b76c] dark:bg-[#3a3a3a6c] dark:bg-opacity-10 h-[55px] w-[200px]">
                    <h3 className="flex justify-center">
                      <Link href="https://www.youtube.com/@emergencyawesome"
                        className="text-lg font-extrabold font-MontserratAlternates text-white dark:text-black"
                        aria-details='Emergency Awesome Youtubue Channel' target="_blank">
                        <span className="text-black dark:text-white">New title</span> <br/> New origins
                      </Link>
                    </h3>
                  </figcaption>
                </figure>

              </div>
              {/* <section className="mb-2 py-5 px-1 md:px-10">
                <div className="flex w-full md:flex-row flex-col relative shrink md:shrink-0"> */}
                {/* <figure className=" flex justify-center items-center flex-col">
                  <Link href="https://www.youtube.com/watch?v=s-Rw5aTB6Z8&t=228s"
                    className="text-2xl font-extrabold font-RubikMonoOne text-white dark:text-black"
                    aria-details='Emergency Awesome Youtubue Channel' target="_blank">
                    <Image alt="Comics Explained" src={INVASION}
                    className="sm:w-[340px] md:w-[300px] sm:h-[200px] md:h-[250px]"/>
                  </Link>
                  <figcaption className="flex justify-center flex-row pb-1 bg-[#bab8b76c] dark:bg-[#3a3a3a6c] dark:bg-opacity-10">
                    <h3>
                      <Link href="https://www.youtube.com/watch?v=s-Rw5aTB6Z8&t=228s"
                        className="text-2xl font-extrabold font-RubikMonoOne text-white dark:text-black"
                        aria-details='Emergency Awesome Youtubue Channel' target="_blank">
                        <p className="text-black dark:text-white">Emergency Awesome</p> (@emergencyawesome)
                      </Link>
                    </h3>
                  </figcaption>
                </figure> */}
                  {/* <div className="md:flex flex-col h-full hidden">
                    <div className="flex justify-center pr-3 pl-3 overflow-hidden py-3 h-full cursor-pointer  md:w-[320px] w-[150px]">
                      <Link href="https://www.youtube.com/watch?v=IPDLodUE9gg" 
                        aria-details='Justice League: Warworld' target="_blank">
                        <Image src={WAR} width={100} height={150} alt="Justice League: Warworld" 
                          className="object-cover rounded-sm transition-translate duration-500 ease-in-out hover:brightness-50 md:w-[250px] w-[180px] md:h-[240px] "/>
                      </Link>
                    </div>
                  </div> */}
                  
                {/* </div>
              </section> */}
            </section>
          </div>
        </div>

      </main>
      <div className="flex flex-col m-0 p-0" >
        <div className="h-auto w-full flex justify-end" >
          <Image src={WIND} alt="Young Link image"
            className="h-14 w-14 flex -mb-1 z-10"/>
        </div>
      </div>
      <hr className="border-[#992715de] mb-10"/>
      <div className="bg-[#bab8b76c] dark:bg-[#3a3a3a6c] dark:bg-opacity-10 shadow-md px-2 py-2 w-[450px] md:w-auto">
      <BlogList posts={posts}/>
      </div>
    </div>
  );
};


export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post"]{
      ...,
      author->,
      categories[]->,
    } | order(_createdAt desc)
  `);

  return {
    props: {
      posts
    }
  };
};


export default HomeBodyContent;