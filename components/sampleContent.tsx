"use client"

import React, { useEffect } from 'react';
import Image from 'next/image';

import ELDEN from '../public/eRing.jpeg';
import GOW from '../public/atreus.jpeg';
import HOG from '../public/hogs.jpeg';
import FIVE from '../public/persona5.jpeg';
import MARIO from '../public/mario.jpeg';
import BOMB from '../public/bomb.png';
import FINAL from '../public/ff.jpeg';
import GOOD from '../public/Good.png';
import No3 from '../public/blackno3.png';
import Link from 'next/link';




const SampleContent = () => {

  return (
    <div>
      <hr className="border-[#992715de] mb-10"/>
      <div className="flex justify-between content-between">       
        <div className="flex flex-col  max-w-2xl">

          <div className="flex flex-row">
            <div >
              <iframe width="660" height="350" src="https://www.youtube.com/embed/ml-g7JXF8ng" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen={false}>
              </iframe>
            </div>
          </div>

          <div className="h-60 max-w-xl">
          <div className="h-full max-w-2xl pl-6 pt-6 -mr-3">
            <h1 className="text-base text-[#494949] leading-relaxed font-MontserratAlternates space-y-2 py-2">
              <b>W</b>elcome to <i>GMRseat</i>, where gaming and pop culture collide! From in-depth blog posts and video clips to podcasts featuring 
              some of the most talented voices in the gaming industry, we've got everything you need to stay up-to-date on the latest trends and insights. 
              Our goal is to create a community of passionate gamers and pop culture fans who share a love of all things gaming. 
              Explore, analyze, and celebrate the games and stories that define our culture, here at [GMR]!
            </h1>
          </div>
          </div>

          <div className="h-80 max-w-2xl mt-5">
            <div className="max-w-2xl h-full flex justify-start overflow-hidden">
              <Link href="/media">
                <Image className="h-full w-full object-cover 
                  hover:scale-105 transition-transform duration-200 ease-in-out"
                  src={BOMB} alt="The Bombcast"/>
              </Link>
              <h1 className="font-semibold p-2 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-xl font-MontserratAlternates absolute">
                Gaming Podcasts
              </h1>
            </div>
          </div>

          <h1 className="text-black underline decoration-[#992715de] font-bold 
            text-2xl font-MontserratAlternates mb-2 mt-4">
            Related:
          </h1>

          <div className="mb-2 pt-5 flex justify-between" >

            <div className="flex justify-center pr-6 overflow-hidden">
              {/* <Link href="/brand">
                <Image src={No3} alt="Whats Good Games podcast" width={200} 
                  className="h-56 object-cover hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-semibold p-2 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-xl font-MontserratAlternates absolute">
                Apparel
              </h1> */}
              <section className="grid clearfix" id="grid">
                <Link href="/brand" className="linktag"
                  data-path-hover="m 180,34.57627 -180,0 L 0,0 180,0 z">
                  <figure>
                      <Image src={No3} className="imgtag"
                        alt="Whats Good Games podcast" />
                      <svg viewBox="0 0 180 320" preserveAspectRatio="none" id="svgtag">
                        <path id="path" d="M 180,160 0,218 0,0 180,0 z"/>
                      </svg>
                      <figcaption>
                        <h2>Apparel</h2>
                        <p>GMR gear for the Gamer.</p>
                        <button>Quick look</button>
                      </figcaption>
                  </figure>
                </Link>
              </section>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="/media">
                <Image src={GOOD} alt="Whats Good Games podcast" width={200} 
                  className="h-56 object-cover hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-semibold p-2 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-xl font-MontserratAlternates absolute">
              Podcast
              </h1>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="/media">
                <Image src={FINAL} alt="Final Fantasy 16" width={200} 
                  className="h-56 object-cover hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-semibold p-2 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-xl font-MontserratAlternates absolute">
              Coming soon
              </h1>
            </div> 
          </div>
        </div>
        
        <div>
          <div className="flex flex-col items-center content-center mb-20 -px-4
            bg-[#3c3c3c] bg-opacity-80 w-80 h-auto overflow-scroll border-t-4 border-gray-800">
            <h1 className='text-3xl mt-2 text-stone-50 
              font-semibold decoration-[#ffff] font-MontserratAlternates italic'>
              Top Picks:
            </h1>
            <div className="w-72 border-t-4 mt-2 border-[#ffff] pl-2">
              <div className="ml-2 mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-4">
                  <Link aria-details="linking user to amazons listing of god of war" rel="canonical" target="_blank" className="w-40 h-36"
                    href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=f90403a38738b3845dafb097c953e9f0&camp=1789&creative=9325&index=videogames&keywords=GodofwarRagnarok" >
                    <Image src={GOW} height={100} width={90} alt="God of War Ragnarok"/>
                  </Link>
                  <div className="flex flex-col p-2 px-2" >
                    <h4 className='font-bold text-[#efefef] text-sm'>
                      Title: God of War Ragnarok
                    </h4>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Developer: SCE Santa Monica
                    </p>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Genre(s): Open-World, Action Adventure
                    </p>
                  </div>
                </div>
                <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
              </div>
            </div>
            <div className="w-72 border-t mt-5 border-slate-50 pl-2 ">
              <div className="ml-2 mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-5">
                  <Link aria-details="linking user to amazons listing of elden ring" rel="canonical" target="_blank" className="w-40 h-36"
                  href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=d33174dbd8c58782cebf8ceabd8afc27&camp=1789&creative=9325&index=videogames&keywords=eldenring">
                  <Image src={ELDEN} height={100} width={90} alt="Elden Ring"/>
                  </Link>
                  <div className="flex flex-col px-2 pt-2" >
                    <h4 className='font-bold text-sm text-[#efefef]'>
                      Title: Elden Ring
                    </h4>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Developer: From Software
                    </p>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Genre(s): Role-Playing, Action RPG
                    </p>
                  </div>
                </div>
                <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
              </div>
            </div>
            <div className="w-72 border-t mt-5 border-slate-50 pl-2">
              <div className="ml-2 mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-4">
                  <Link aria-details="linking user to amazons listing of Hogwarts" rel="canonical" target="_blank" className="w-40 h-36"
                  href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=f04f880078e458d95eb37af8238a9e19&camp=1789&creative=9325&index=videogames&keywords=hogwarts">
                  <Image src={HOG} height={100} width={90} alt="Horwarts"/>
                  </Link>
                  <div className="flex flex-col px-4 pt-2" >
                    <h4 className='font-bold text-sm text-[#efefef]'>
                      Title: Hogwarts Legacy
                    </h4>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Developer: Avalanche Software, Portkey Games
                    </p>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Genre(s): Action Adventure, Open-World
                    </p>
                  </div>
                </div>
                <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
              </div>
            </div>
            <div className="w-72 border-t mt-5 border-slate-50 pl-2 ">
              <div className="ml-2 mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-2">
                  <Link aria-details="linking user to amazons listing of Mario+Rabbids Sparks of Hope" rel="canonical" target="_blank" className="w-40 h-36"
                  href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=8a8d67cccd6b6a6fa73c38eec8d8a749&camp=1789&creative=9325&index=videogames&keywords=MarioRabbidsSparksofHope">
                  <Image src={MARIO} height={100} width={90} alt="Mario+Rabbids Sparks of Hope"/>
                  </Link>
                  <div className="flex flex-col px-2 pt-2" >
                    <h4 className='font-bold text-sm text-[#efefef]'>
                      Title: Mario+Rabbids Sparks of Hope
                    </h4>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Developer: Ubisoft Paris, Ubisoft Milan
                    </p>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Genre(s): Strategy, Turn-Based
                    </p>
                  </div>
                </div>
                <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
              </div>
            </div>
            <div className="w-72 border-t mt-5 border-slate-50 pl-2 mb-5">
              <div className="ml-2 mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-2">
                  <Link aria-details="linking user to amazons listing of Persona 5" rel="canonical" target="_blank" className="w-40 h-36"
                  href="https://www.amazon.com/gp/search?ie=UTF8&tag=gmrseat91-20&linkCode=ur2&linkId=882ee607008d9a91439555b12f64487c&camp=1789&creative=9325&index=videogames&keywords=Persona5">
                  <Image src={FIVE} height={100} width={90} alt="Persona 5"/>
                  </Link>
                  <div className="flex flex-col px-4 pt-2" >
                    <h4 className='font-bold text-sm text-[#efefef]'>
                      Title: Persona 5 Royal
                    </h4>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Developer: Atlus
                    </p>
                    <p className='font-medium text-xs text-[#efefef]'>
                      Genre(s): Role-Playing, Japanese-Style
                    </p>
                  </div>
                </div>
                <div className="border-white border-l w-1 mt-16 h-12 pl-1 -mr-2"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SampleContent;