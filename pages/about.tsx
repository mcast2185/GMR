import Head from 'next/head';

import Header from '../components/header';
import Banner from '../components/banner';
import Mouse from 'components/mouse';
import Footer from 'components/footer';

import "../styles/globals.css";

export default function About () {
  
  return (
    <div className="about">
      <Head>
        <title>
          GMRseat About Us
        </title>
        <meta name="description" content="short look at what GMRseat is all about." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Mouse/>
      <div className="max-w-5xl mx-auto">
        <Header/>
        <Banner/>
        <article className="px-10 pb-5">
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
            <div className="mt-16 px-20" >
              <h2 className=" text-[#000000] text-xl leading-10 font-semibold font-Quicksand ">
                <b className="text-5xl font-bold">W</b>elcome to <i>GMRseat</i>, the ultimate platform for everything gaming and game-related! Our site covers a range of topics, 
                from the latest video game releases to comic book movies, pop culture shows, and much more. 
                Whether you're a hardcore gamer or just a casual fan, GMR has got you covered with in-depth blog posts, video clips, podcasts, and more.
                Our goal at GMR is to create a community of gamers and enthusiasts who share a passion for all things gaming. 
                We believe that games are more than just a way to pass the time; they are a cultural phenomenon that reflects and shapes our society. 
                Our mission is to explore the deeper meaning and significance of games, and to provide insightful commentary and analysis that goes beyond the surface level.
                At GMR, we are dedicated to featuring the most talented content creators and podcasters in the gaming industry. 
                Our site is a platform for both established and up-and-coming voices in the gaming community, and we strive to provide a diverse range of perspectives and opinions.
                So join us on this epic journey into the world of gaming and pop culture. Let's explore, analyze, and celebrate the games and stories that define our culture!
              </h2>
            </div>
          </div>
        </article> 
      </div>
      <Footer/>
    </div>
  )
};

