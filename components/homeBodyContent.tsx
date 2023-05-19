'use client';

import React, {useRef} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useInView} from "framer-motion";
import { Post } from 'typings';
import Carousel from './carousel';
import { client } from 'lib/sanity.client';
// import ClientSideFetch from './clientSideFetch';

import ELDEN from '../public/elden.png';
import GOW from '../public/GOW.png';
import RE4 from '../public/remake.png';
import FIVE from '../public/persona5.png';
import MARIO from '../public/mario.png';
import BOMB from '../public/bomb.png';
import FINAL from '../public/ff.png';
import KINDA from '../public/kinda.png';
import No3 from '../public/blackno3.png';
import WIND from '../public/wind.png';
import FLASH from '../public/flash.png';
import FLASH2 from '../public/flash2.png';
import FloatButtonComp from './floatButton';

import "../styles/component.css";
import BlogList from './blogList';

type Props = {
  posts: Post[];
};


const HomeBodyContent = ({posts}: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <div>
      <div className="group h-auto group-autofill:w-8/12">
        <Carousel/>
        <hr className="border-[#992715de] mb-10"/>
        <FloatButtonComp/>
        <main>       
          <div className="flex justify-between content-between cursor-default">       
            <div className="flex flex-col w-8/12">
              <section>
                <figure id="figure">
                  <iframe src="https://www.youtube.com/embed/KvQ25NmL1-c?start=68"  
                    allowFullScreen={false} width="660" height="350" title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    className="block md:flex">
                  </iframe>
                </figure>
                <div className="h-60 max-w-[640px] flex justify-center">
                  <div className="h-full max-w-2xl pl-3 pt-6 -mr-3">
                    <p className="text-base  text-[#494949] border-l-black border border-opacity-10 
                      bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default
                      leading-relaxed font-MontserratAlternates space-y-2 p-4 ">
                      <b className="ml-4 text-xl">W</b>elcome to <b><i>GMRseat</i></b>, where gaming lives and content inspires. From 
                      <a className="decoration-[#d5433e] text-sky-800 underline decoration-1" 
                        href="/blogs" aria-details='Blog posts'> blog posts</a> and 
                      <a className="decoration-[#d5433e] text-sky-800 underline decoration-1" 
                        href="/media" aria-details='media page'> video shorts to podcasts</a>
                        featuring some of the most talented voices in the gaming industry, stay up-to-date 
                        here on the hottest new source for gamers. Housing the coldest
                        video game highlights from some of your favorite games and favorite 
                      <a className="decoration-[#d5433e] text-sky-800 underline decoration-1" 
                        href="/media" aria-details='media page'> content creators </a>
                        on social media, we aim to promote more than just timely news, but the culture built by us, 
                        the sweatiest of players. Cheers... <i>[GMR]!</i>
                    </p>
                  </div>
                </div>
                <div className="h-80 max-w-2xl mt-5">
                  <div className="max-w-2xl h-full flex justify-start overflow-hidden">
                    <Link href="/media">
                      <Image className="h-full w-[670px] object-cover overflow-hidden
                        hover:scale-105 transition-transform duration-200 ease-in-out"
                        src={BOMB} alt="The Bombcast"/>
                    </Link>
                    <h1 className="font-semibold p-2 rounded-sm bg-[#3c3c3c] 
                      bg-opacity-80 text-stone-50 mr-2 text-xl font-MontserratAlternates absolute">
                      Gaming Podcasts
                    </h1>
                  </div>
                </div>
              </section>
            </div>
            <section className="block md:flex">
              <div className="flex flex-col items-center content-center mb-1 -px-4
                bg-[#3c3c3c] bg-opacity-60 w-80 h-auto overflow-scroll border-t-4 border-white">
                <h1 className='text-3xl mt-2 text-stone-50 
                  font-semibold decoration-[#ffff] font-Megrim'>
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
                        <h3 className='font-bold text-[#efefef] text-sm'>
                          Title: God of War Ragnarok
                        </h3>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Developer:</b> SCE Santa Monica
                        </p>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Genre(s):</b> Open-World, Action Adventure
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
                        <h3 className='font-bold text-sm text-[#efefef]'>
                          Title: Elden Ring
                        </h3>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Developer:</b> From Software
                        </p>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Genre(s):</b> Role-Playing, Action RPG
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
                        <h3 className='font-bold text-sm text-[#efefef]'>
                          Title: Resident Evil 4 Remake
                        </h3>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Developer:</b> Capcom
                        </p>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Genre(s):</b> Survival
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
                        <h3 className='font-bold text-sm text-[#efefef]'>
                          Title: Mario+Rabbids Sparks of Hope
                        </h3>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Developer:</b> Ubisoft Paris, Ubisoft Milan
                        </p>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Genre(s):</b> Strategy, Turn-Based
                        </p>
                      </div>
                    </div>
                    <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
                  </div>
                </div>
                <div className="w-72 border-t mt-5 border-slate-50 pl-2 mb-5">
                  <div className="ml-2 mr-1 h-44 flex flex-row">
                    <div className="mt-5 flex flex-row py-2">
                      <Link aria-details="linking user to amazons listing of Persona 5" 
                        rel="canonical" target="_blank" className="w-40 h-36"
                        href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=882ee607008d9a91439555b12f64487c&camp=1789&creative=9325&index=videogames&keywords=Persona5">
                        <Image src={FIVE} height={100} width={90} alt="Persona 5"/>
                      </Link>
                      <div className="flex flex-col px-4 pt-2" >
                        <h3 className='font-bold text-sm text-[#efefef]'>
                          Title: Persona 5 Royal
                        </h3>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Developer:</b> Atlus
                        </p>
                        <p className='font-medium text-xs text-[#efefef]'>
                          <b>Genre(s):</b> Role-Playing, Japanese-Style
                        </p>
                      </div>
                    </div>
                    <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <h1 className="text-black underline decoration-[#992715de] font-bold 
            text-2xl font-MontserratAlternates -mt-8 mb-6">
            Related:
          </h1>
          <section ref={ref} className="mb-8">
            <div className="flex w-full relative">
              <div className="mb-5 pr-3 pt-8 flex justify-between w-[600px]" >
                <div className="flex justify-center mr-3 overflow-hidden border-t-2 border-black scale-105">
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
                <div className="flex justify-center mr-3 
                  overflow-hidden border-t-2 border-black scale-105">
                  <section className="grid clearfix" id="grid" style={{
                    transform: isInView ? "none" : "translateX(-15px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 2.5s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
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
                <div className="flex justify-center mr-3 
                  pb-5 overflow-hidden border-t-2 border-black scale-105">
                  <section className="grid clearfix" id="grid" style={{
                    transform: isInView ? "none" : "translateX(-10px)",
                    opacity: isInView ? 1 : 0,
                    transition: "all 3.5s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
                    <Link href="/media" className="linktag "
                      data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
                      <figure id="figure">
                        <Image src={FINAL} className="imgtag opacity-30"
                          alt="Final Fantasy 16" />
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
              <section id="flash-parent-tag" style={{
                transform: isInView ? "none" : "translateY(-20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 3.5s cubic-bezier(0.17, 0.55, 0.55, 1)"}}>
                <Link target="_blank" href="http://localhost:3000/post/the-flash-flashpoints-moral-dilemma">
                  <figure id="flash-wrapper" className="flex mt-[45px]">
                    <Image className="h-[220px] w-[390px] img-transform" 
                      id="flash" src={FLASH} alt="Flash the movie"/>
                    <Image className="h-[220px] w-[390px] img-effect" 
                      id="flash" src={FLASH2} alt="Flash the movie"/>
                    <figcaption id="flash-content">
                      <h3 id="prompt-one"><i>"The Flash"</i> new trailer release</h3>
                      <h3 id="prompt-two"> Click here to watch the trailer</h3>
                    </figcaption>
                  </figure>
                </Link> 
              </section>
            </div>
          </section>
          <h1 className="text-black underline decoration-[#992715de] font-bold 
            text-2xl font-MontserratAlternates mb-8 mt-8">
            GMR Exclusive Content:
          </h1>
          <section className="mb-8">
            <div className="flex w-full relative">
              <figure>
                <iframe src="https://www.youtube.com/embed/psZPmj82Prw" 
                  allowFullScreen={false} width="672" height="350" title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                </iframe>
              </figure>
              <div className="pl-2">

              {/* this space will be for ADs */}

              </div>
            </div>
          </section>
        </main>
        <div className="flex flex-col m-0 p-0" >
          <div className="h-auto w-full flex justify-end" >
            <Image src={WIND} alt="Young Link image"
              className="h-14 w-14 flex -mb-1 z-10"/>
          </div>
        </div>
        <hr className="border-[#992715de] mb-10"/>
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