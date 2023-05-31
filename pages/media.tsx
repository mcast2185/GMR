import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { Carousel} from 'antd';
import React, { useState, useEffect } from 'react';

import FloatButtonComp from 'components/floatButton';
import Header from '../components/header';
import Banner from '../components/banner';
import MANDO from '../public/mando.png';
import LAST from '../public/lastofus.png';
import DCU from '../public/dcu.png';
import CAPCOM from '../public/capcom.png';
import GALAXY from '../public/Galaxy.png';
import KINGDOM from '../public/kingdom.png';
import APEX from '../public/apex.png';
import TED from '../public/ted.png';
import DUNE from '../public/dune.png';
import Footer from 'components/footer';

import "../styles/globals.css";


export default function Media () {

  useEffect(() => {
    document.getElementById("mainImg")?.addEventListener("mouseenter", ()=> {
      document.getElementById("mando")!.style.filter = "brightness(.6)";
    });
    
    document.getElementById("mainImg")?.addEventListener("mouseleave", ()=> {
      document.getElementById("mando")!.style.filter = "brightness(1)";
    });
  });
  
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
          <div className="flex justify-center overflow-hidden">
            <Link id='mainImg' href="https://podcasts.apple.com/us/podcast/episode-9-look-for-the-light/id1660320068?i=1000603849713">
              <Image src={MANDO} alt="The last of Us" id="mando"
                className="object-cover rounded-sm transition-translate duration-500 ease-in-out"/>
            </Link>
            <h1 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
              duration-200 ease-in-out bg-opacity-20 text-stone-50 mr-2 text-5xl font-Quicksand absolute">
              Mandalorian Season 3, Click Here
            </h1>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex flex-row justify-center items-center mb-10">
              <div className="flex justify-center pr-6 overflow-hidden cursor-default">
                <Link href="https://podcasts.apple.com/us/podcast/episode-9-look-for-the-light/id1660320068?i=1000603849713">
                  <Image src={LAST} alt="The last of Us" 
                    className="h-64 w-52 object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                </Link>
                <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                  bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                  The Last of Us Finale
                </h1>
              </div>
              <div className="flex justify-center pr-6 overflow-hidden cursor-default">
                <Link href="/podcasts">
                  <Image src={DCU} alt="DCU" width={200} 
                    className="h-64 w-52  object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out"/>
                </Link>
                <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                  bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                  James Gunns DCU
                </h1>
              </div>
              <div className="flex justify-center pr-6 overflow-hidden cursor-default">
                <Link href="https://www.youtube.com/watch?v=GsTU5tTCSkQ">
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
            <h1 className="text-black underline decoration-[#992715de] font-bold 
              text-2xl font-MontserratAlternates mb-8 mt-8">
              Trending:
            </h1>
            <div className="flex flex-row justify-center items-center m-5">
              <iframe src="https://embed.podcasts.apple.com/us/podcast/resident-evil-4-gameplay-preview/id1239568910?i=1000602655277"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
                sandbox="allow-forms allow-popups allow-same-origin 
                allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
              </iframe>
              <iframe src="https://embed.podcasts.apple.com/us/podcast/giant-bombcast-778-young-elmo/id274450056?i=1000602210211"
                allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" 
                height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
                sandbox="allow-forms allow-popups allow-same-origin 
                allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
              </iframe>
            </div>
            <div className=" flex flex-col md:flex-row w-[600px] md:w-full scale-90 md:scale-100 md:mr-0 mr-16">
              <div className="flex flex-col justify-start pr-5 ml-[40px] items-center w-[580px]">
                <Carousel autoplay autoplaySpeed={3000} effect="fade" className="w-[580px] h-[250px] mb-5">
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="https://www.youtube.com/watch?v=hvfTZM4aNck" 
                      aria-details='Guardians of the Galaxy 3 movie promo' target="_blank">
                      <Image src={GALAXY} width={580} height={250} alt="Guardians of the Galaxy 3 movie promo"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Guardians of the Galaxy 3: Final trailer
                    </h3>
                  </div>
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="http://localhost:3000/post/the-legend-of-zelda-tears-of-the-kingdom" 
                      aria-details='The Legend of Zelda: Tears of the Kingdom' target="_blank">
                      <Image src={KINGDOM} width={580} height={250} alt="The Legend of Zelda: Tears of the Kingdom"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      "Zelda: Tears of the Kingdom" 
                    </h3>
                  </div>
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="http://localhost:3000/post/apex-legends-season-17-arsenal" 
                      aria-details='Apex Legends Season 17: Arsenal' target="_blank">
                      <Image src={APEX} width={580} height={250} alt="Apex Legends Season 17: Arsenal"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Apex Legends: Season 17
                    </h3>
                  </div>
                  <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px] cursor-pointer">
                    <Link href="http://localhost:3000/post/ted-lasso-season-3" 
                      aria-details='Ted Lasso Season 3' target="_blank">
                      <Image src={TED} width={580} height={250} alt="Ted Lasso Season 3"/>
                    </Link>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Ted Lasso season 3
                    </h3>
                  </div>
                </Carousel>
                <div id="scroll" className="flex flex-row overflow-y-scroll 
                  md:grid-cols-2 gap-4 mr-4 pb-12 w-[580px] scale-95">
                  <iframe className="scale-90 border-t-2 border-[#992715de] border-l-2"  
                    allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    width="375" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/Bbdq2JmUkl0">
                  </iframe>  
                  <iframe className="border-t-2 border-[#992715de] border-l-2" src="https://www.youtube.com/embed/kVe5UM_k1S0" 
                    allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen={false} title="YouTube video player" width="180" height="250">
                  </iframe>
                  <iframe className="scale-90 border-t-2 border-[#992715de] border-l-2"  
                    allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    width="375" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/ey22EdpkMDE">
                  </iframe>    
                  <iframe className="border-t-2 border-[#992715de] border-l-2" src="https://www.youtube.com/embed/fLmu19go2cs" 
                    allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen={false} title="YouTube video player" width="180" height="250">
                  </iframe>  
                  <iframe className="scale-90 border-t-2 border-[#992715de] border-l-2"  
                    allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    width="375" height="250" title="YouTube video player" allowFullScreen={false} src="https://www.youtube.com/embed/gyFxUYulM4U">
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
            <h1 className="text-black underline decoration-[#992715de] font-bold 
              text-2xl font-MontserratAlternates mb-8 mt-8">
              GMR Featured Content:
            </h1>
            <section className="flex w-full mb-20 md:mb-36">
              <figure>
                <iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen={false} title="YouTube video player" width="672" height="350" src="https://www.youtube.com/embed/psZPmj82Prw"
                  className="h-64 w-[500px] md:w-[670px] md:h-[350px]">
                </iframe>
              </figure>
            </section>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};