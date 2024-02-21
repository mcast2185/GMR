import Head from 'next/head';

import Header from '../components/header';
import Banner from '../components/banner';
import Footer from '../components/footer';
import FloatButtonComp from 'components/floatButton';

import "../styles/globals.css";

export default function About () {
  return (
    <div className="about">
      <Head>
        <title>
          GMRseat About Us
        </title>
        <meta name="description" content="short look at what GMRseat is all about."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <FloatButtonComp/>
      <div className="max-w-[460px] md:max-w-5xl mx-0 md:mx-auto">
        <Header/>
        <Banner/>
        <article className=" md:px-10 pb-10">
          <section className="md:space-y-1 border-transparent text-black px-2">
            <div className='relative min-h-56 sm:min-h-42 sm:mb-0 flex flex-col md:flex-row md:justify-between'>
              <section className="p-4 sm:p-1 bg-transparent w-full">
                <div className="md:flex md:flex-row justify-between gap-y-5 sm:gap-y-0 sm:mb-0">
                  <div className="flex md:justify-center sm:mt-[25px] sm:mb-0">
                    <h1 className="text-3xl md:text-8xl dark:text-white font-extrabold absolute z-0 opacity-[.15] 
                      md:w-[550px] md:ml-[280px] md:mb-[280px] hover:text-[#992715de] hover:opacity-[.35]">
                      玩家座位
                    </h1>
                    <h1 className="text-xl md:text-6xl dark:text-white font-extrabold font-RubikVinyl z-10 ml-4 md:mt-[50px] sm:mt-[10px] sm:mb-0">
                      About
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div className="">
           
            <figure id="figure" className="md:px-4 sm:flex sm:justify-center sm:items-center">
              <iframe src="https://www.youtube.com/embed/mDkoEMghRjI"  
                allowFullScreen={false} height={350} width={660} title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="youtubeVideo shrink md:shrink-0 sm:w-full sm:h-[230px] sm:scale-95 object-cover md:w-[960px] pt-3">
              </iframe>
            </figure>
          </div>
          <div className="border-r-black border-l-black border border-opacity-10 scale-90 md:scale-100
            bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default px-2 md:px-10" >
            <div className="mt-3 md:mt-16 mb-3 md:mb-16 px-2 md:px-20" >
              <p className=" text-[#000000] text-sm md:text-lg dark:text-white leading-8 mb-10 md:mb-36 font-semibold font-Quicksand">
                <b className="text-xl md:text-5xl font-bold">S</b>tep into the immersive grounds of <i>GMRseat</i>, 
                your vehicle for exploring content that's for the community, by the community! We dive deep into the latest game releases, related
                pop culture content, and plenty more. Catering to the sweaty gamers or occasional players, GMR offers insight true to our brand via blogs, videos and podcasts. 
                We're more than a gaming platform, we're a growing community shaping the gaming culture. 
                Our mission? To provide a podium for our community of gamers, connecting and promoting <i> gaming content </i> submitted by you all, here at GMR. 
                We spotlight known content creators and podcasters, offering a stage to both seasoned and emerging voices. 
                Journey with us and together lets breakdown and applaud the games and narratives shaping our world!
              </p>
            </div>
          </div>
        </article> 
      </div>
      <Footer/>
    </div>
  );
};