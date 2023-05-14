import Head from 'next/head';

import Header from '../components/header';
import Banner from '../components/banner';
import Footer from 'components/footer';
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
      <div className="max-w-5xl mx-auto">
        <Header/>
        <Banner/>
        <article className="px-10 pb-10">
          <section className="space-y-1 border-transparent text-black">
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
              <section className="p-4 bg-transparent w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                  <div>
                    <h1 className="text-6xl font-extrabold font-MontserratAlternates">
                      About
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div className="border-r-black border-l-black border border-opacity-10 
            bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default px-10" >
            <div className="mt-16 mb-16 px-20" >
              <p className=" text-[#000000] text-lg leading-8 mb-36 font-semibold font-Quicksand">
                <b className="text-5xl font-bold">S</b>tep into the immersive grounds of <i>GMRseat</i>, 
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