import React from 'react';
import Image from 'next/image';

import ELDEN from '../public/eRing.jpeg';
import GOW from '../public/atreus.jpeg';
import HOG from '../public/hogs.jpeg';
import FIVE from '../public/persona5.jpeg';
import MARIO from '../public/mario.jpeg';
import BOMB from '../public/bomb.png';
import FINAL from '../public/ff.jpeg';
import GOOD from '../public/Good.png';
import Link from 'next/link';


const SampleContent = () => {

  return (
    <div>
      <hr className="border-[#992715de] mb-10"/>
      <div className="flex justify-between content-between">       
        <div className="flex flex-col overflow-x-scroll max-w-2xl">

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
              <Link href="/other">
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

          <div className="mb-2 pt-5 flex flex-row overflow-scroll" >
            <div className='flex justify-center pr-6'> 
              <iframe width="200" height="225" title="YouTube video player" src="https://www.youtube.com/embed/vgmYHte2Grs" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen>
              </iframe>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="/other">
                <Image src={GOOD} alt="Whats Good Games podcast" width={200} 
                  className="h-56 object-cover hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-semibold p-2 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-xl font-MontserratAlternates absolute">
              Podcast
              </h1>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="/other">
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
          <div className="flex flex-col items-center content-center mb-10 
            bg-[#3c3c3c] bg-opacity-80 w-72 h-auto overflow-scroll border-t-4 border-amber-300">
            <h1 className='text-3xl mt-2 text-stone-50 
              font-semibold decoration-[#ffff] font-MontserratAlternates italic'>
              Top Picks:
            </h1>
            <div className="w-64 border-t-4 mt-2 border-[#ffff] px-2">
              <div className="mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-4">
                  <Image src={GOW} height={100} width={90} alt="God of War Ragnarok"/>
                  <div className="flex flex-col p-2 " >
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
            <div className="w-64 border-t mt-5 border-slate-50 px-2 mb-2">
              <div className="mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-4">
                  <Image src={ELDEN} height={100} width={90} alt="Elden Ring"/>
                  <div className="flex flex-col p-2 " >
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
            <div className="w-64 border-t mt-5 border-slate-50 px-2 mb-2">
              <div className="mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-4">
                  <Image src={HOG} height={100} width={90} alt="Horwarts"/>
                  <div className="flex flex-col p-2 " >
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
            <div className="w-64 border-t mt-5 border-slate-50 px-2 mb-2">
              <div className="mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-4">
                  <Image src={MARIO} height={100} width={90} alt="Mario+Rabbids Sparks of Hope"/>
                  <div className="flex flex-col px-2 pt-2 " >
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
            <div className="w-64 border-t mt-5 border-slate-50 px-2 mb-2">
              <div className="mr-1 h-44 flex flex-row">
                <div className="mt-5 flex flex-row py-4">
                  <Image src={FIVE} height={100} width={90} alt="Persona 5"/>
                  <div className="flex flex-col p-2 " >
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