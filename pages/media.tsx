import { useEffect } from 'react';
import Link from 'next/link';

import Mouse from 'components/mouse';
import Header from '../components/header';
import Banner from '../components/banner';
import Image from 'next/image';
import MANDO from '../public/mando.png';
import LAST from '../public/lastofus.png';
import DCU from '../public/dcu.png';
import CAPCOM from '../public/capcom.png';
import GALAXY from '../public/Galaxy.png';
import KINGDOM from '../public/kingdom.png';
import APEX from '../public/apex.png';
import TED from '../public/ted.png';
import "../styles/globals.css";
import Head from 'next/head';
import { Carousel } from 'antd';


export default function Other () {
  useEffect(() => {
    document.getElementById("mainImg")?.addEventListener("mouseenter", ()=> {
      document.getElementById("mando")!.style.filter = "brightness(.6)";
    });
    
    document.getElementById("mainImg")?.addEventListener("mouseleave", ()=> {
      document.getElementById("mando")!.style.filter = "brightness(1)";
    });

    if (document.getElementById("tiktok")){
      console.log("script already exists");
    } else {
      let script = document.createElement("script");
      script.src = "https://www.tiktok.com/embed.js";
      script.async = true;
      script.setAttribute("id", "tiktok");
      document.head.appendChild(script);
    };
  });
  
  return (
    <div className="media">
      <Head>
        <title>
          GMRseat Media Content
        </title>
        <meta name="description" content="GMRseat Media page including Tiktok clips, Youtube shorts, podcasts and more." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-5xl mx-auto">
        <Header/>
        <Banner/>
        <div className="flex justify-center overflow-hidden">
          <Link id='mainImg' href="https://podcasts.apple.com/us/podcast/episode-9-look-for-the-light/id1660320068?i=1000603849713">
            <Image src={MANDO} alt="The last of Us" id="mando"
              className="object-cover rounded-sm transition-translate duration-500 ease-in-out " />
          </Link>
          <h1 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
            duration-200 ease-in-out bg-opacity-20 text-stone-50 mr-2 text-5xl font-Quicksand absolute">
            Mandalorian Season 3, Click Here
          </h1>
        </div>

        <div className="flex flex-col mt-10 " >
          <div className="flex flex-row justify-center items-center mb-10">
            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="https://podcasts.apple.com/us/podcast/episode-9-look-for-the-light/id1660320068?i=1000603849713">
                <Image src={LAST} alt="The last of Us" 
                  className="h-64 w-52 object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                The Last of Us Finale
              </h1>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="/podcasts">
                <Image src={DCU} alt="DCU" width={200} 
                  className="h-64 w-52  object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                James Gunns DCU
              </h1>
            </div>

            <div className="flex justify-center pr-6 overflow-hidden">
              <Link href="https://www.youtube.com/watch?v=GsTU5tTCSkQ">
                <Image src={CAPCOM} alt="Capcom Spotlight" width={200} 
                  className="h-64 w-52  object-cover rounded-sm hover:scale-105 transition-transform duration-200 ease-in-out" />
              </Link>
              <h1 className="font-bold p-2 mt-40 rounded-sm bg-[#3c3c3c] 
                bg-opacity-80 text-stone-50 mr-2 text-base font-Quicksand absolute">
                Capcom Spotlight
              </h1>
            </div>
          </div>
          <hr className="border-[#992715de] mb-5"/>
          <div className="flex flex-row justify-center items-center m-10" >
            <iframe src="https://embed.podcasts.apple.com/us/podcast/resident-evil-4-gameplay-preview/id1239568910?i=1000602655277"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
            </iframe>
            <iframe src="https://embed.podcasts.apple.com/us/podcast/giant-bombcast-778-young-elmo/id274450056?i=1000602210211"
              allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" height="175" className="w-full max-w-md overflow-hidden bg-transparent" 
              sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation">
            </iframe>
          </div>
          <div className="">
             <Carousel autoplay effect="fade">
              <div>
                <Image src={GALAXY} width={480} height={220} alt="Guardians of the Galaxy 3 movie promo"/>
                <h3 className="text-center h-28 text-slate-50 bg-[#3c3c3c] bg-opacity-20 leading-[100px]">1</h3>
              </div>
              <div>
                <Image src={KINGDOM} width={480} height={220} alt=""/>
                <h3 className="text-center h-28 text-slate-50 bg-[#3c3c3c] bg-opacity-20 leading-[100px]">2</h3>
              </div>
              <div>
                <Image src={APEX} width={480} height={220} alt=""/>
                <h3 className="text-center h-28 text-slate-50 bg-[#3c3c3c] bg-opacity-20 leading-[100px]">3</h3>
              </div>
              <div>
                <Image src={TED} width={480} height={220} alt=""/>
                <h3 className="text-center h-28 text-slate-50 bg-[#3c3c3c] bg-opacity-20 leading-[100px]">4</h3>
              </div>
            </Carousel>
          </div>

          {/* <div className="" >
            <div className="flex flex-row justify-center h-[550px] items-center mt-5">
              <div className="flex justify-center px-2" >
                <iframe width="400" height="600" src="https://www.youtube.com/embed/kVe5UM_k1S0" title="YouTube video player"
                  allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
                </iframe>
              </div>

              <div className="flex justify-center mb-5 pt-6 px-2 " > 
                <iframe width="300" height="600" src="https://www.tiktok.com/embed/7209055934377659694" title="YouTube video player" allowFullScreen={false} className="overflow-hidden"
                  allow="accelerometer; play; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; allow-forms allow-same-origin; allow-scripts; allow-top-navigation;">
                </iframe>
              </div>
            </div>
            <div className="flex flex-row h-96 mt-10 mb-10 overflow-scroll" >
            

            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
};

