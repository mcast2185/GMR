import Link from 'next/link';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import { SwiperSlide, Swiper } from 'swiper/react';
import React, { useState, useEffect } from 'react';
import type { RadioChangeEvent } from 'antd';
import { Carousel, Radio } from 'antd';
import type { DotPosition } from 'antd/es/carousel';


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
import Footer from 'components/footer';



export default function Media () {
  const [dotPosition, setDotPosition] = useState<DotPosition>('top');

  const handlePositionChange = ({ target: { value } }: RadioChangeEvent) => {
    setDotPosition(value);
  };

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
          <div className=" flex flex-row mb-10 w-full">
            <div className="flex flex-col justify-start pr-5 ml-[60px] items-center w-[580px]" >
              <Carousel autoplay autoplaySpeed={3000} effect="fade" className="w-[580px] h-[250px] mb-10">
                <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px]">
                  <Image src={GALAXY} width={580} height={250} alt="Guardians of the Galaxy 3 movie promo"/>
                  <Link target="_blank" href="https://www.youtube.com/watch?v=hvfTZM4aNck" aria-details=''>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Guardians of the Galaxy 3: Final trailer
                    </h3>
                  </Link>
                </div>
                <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px]">
                  <Image src={KINGDOM} width={580} height={250} alt="The Legend of Zelda: Tears of the Kingdom"/>
                  <Link href="" aria-details='The Legend of Zelda: Tears of the Kingdom'>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      "Zelda: Tears of the Kingdom" 
                    </h3>
                  </Link>
                </div>
                <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px]">
                  <Image src={APEX} width={580} height={250} alt="Apex Legends Season 17: Arsenal"/>
                  <Link href="" aria-details='Apex Legends Season 17: Arsenal'>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Apex Legends: Season 17
                    </h3>
                  </Link>
                </div>
                <div className="flex justify-center pr-6 overflow-hidden w-[580px] h-[250px]">
                  <Image src={TED} width={580} height={250} alt="Ted Lasso Season 3"/>
                  <Link href="" aria-details='Ted Lasso Season 3'>
                    <h3 className="font-bold p-2 rounded-sm bg-[#3c3c3c] hover:bg-transparent hover:scale-105 transition-transform 
                      duration-200 ease-in-out bg-opacity-60 text-stone-50 mr-2 text-2xl font-Quicksand absolute mt-[150px]">
                      Ted Lasso season 3
                    </h3>
                  </Link>
                </div>
              </Carousel>
              <div className="container justify-start">
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
                      <iframe width="180" height="250" src="https://www.youtube.com/embed/kVe5UM_k1S0" title="YouTube video player"
                        allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
                      </iframe>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <iframe width="180" height="250" src="https://www.youtube.com/embed/F4FQETyGuWs" title="YouTube video player"
                        allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
                      </iframe>         

                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="flex justify-center">
                      <iframe width="180" height="250" src="https://www.youtube.com/embed/fLmu19go2cs" title="YouTube video player"
                        allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
                      </iframe>         

                    </div>
                  </SwiperSlide>
                  
                  <SwiperSlide>
                    <div className="flex justify-center">
                      <iframe width="180" height="250" src="https://www.youtube.com/embed/9AMm0NuiXOo" title="YouTube video player"
                        allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
                      </iframe>      
                  </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center">
                      <iframe width="180" height="250" src="https://www.youtube.com/embed/64_wlwcQTfA" title="YouTube video player"
                        allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
                      </iframe>          
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="flex justify-center">
                      <iframe width="180" height="250" src="https://www.youtube.com/embed/mkCK0P1BXac" title="YouTube video player"
                        allow="accelerometer; play clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={false}>
                      </iframe>          
                    </div>
                  </SwiperSlide>
                  <div className="slider-controller">
                    <div className="flex h-14 w-28 items-center content-center" >
                      <div className="swiper-pagination"></div>
                    </div>
                  </div>
                </Swiper>
              </div>
            </div>
            <div className="flex flex-col h-[605px]">
              <Carousel autoplaySpeed={4500} dotPosition="left" effect="fade" className="w-[305px] h-[605px] mb-10">
                <div className="flex flex-col justify-center mb-3 pr-2 pl-2 w-[305px] h-[605px] overflow-hidden" > 
                  <div className="overflow-hidden h-[1500px]">
                    <iframe sandbox="allow-modal" width="300" height="1500" src="https://www.tiktok.com/embed/7209055934377659694" title="YouTube video player" allowFullScreen={false} className="pb-20 overflow-hidden"
                      allow="accelerometer; pause; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;  allow-scripts; allow-top-navigation;">
                    </iframe>
                  </div> 
                </div>
                <div className="flex flex-col justify-center mb-3 pr-2 pl-2 w-[305px] h-[605px] overflow-hidden" > 
                  <div className="overflow-hidden h-[1500px]">
                    <iframe sandbox="allow-modal" width="300" height="1500" src="https://www.tiktok.com/embed/7173074436902473002" title="YouTube video player" allowFullScreen={false} className="pb-20 overflow-hidden"
                      allow="accelerometer; pause; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;  allow-scripts; allow-top-navigation;">
                    </iframe>
                  </div> 
                </div>
                <div className="flex flex-col justify-center mb-3 pr-2 pl-2 w-[305px] h-[605px] overflow-hidden" > 
                  <div className="overflow-hidden h-[1500px]">
                    <iframe sandbox="allow-modal" width="300" height="1500" src="https://www.tiktok.com/embed/7212371511603219754" title="YouTube video player" allowFullScreen={false} className="pb-20 overflow-hidden"
                      allow="accelerometer; pause; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;  allow-scripts; allow-top-navigation;">
                    </iframe>
                  </div> 
                </div>
                <div className="flex flex-col justify-center mb-3 pr-2 pl-2 w-[305px] h-[605px] overflow-hidden" > 
                  <div className="overflow-hidden h-[1500px]">
                    <iframe sandbox="allow-modal" width="300" height="1500" src="https://www.tiktok.com/embed/7085773186960313646" title="YouTube video player" allowFullScreen={false} className="pb-20 overflow-hidden"
                      allow="accelerometer; pause; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;  allow-scripts; allow-top-navigation;">
                    </iframe>
                  </div> 
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};

