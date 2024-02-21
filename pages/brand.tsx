"use client";

import Head from "next/head";

import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { client } from "lib/sanity.client";
import { Brand } from '../typings';
import BrandList from "components/brandList";
import FloatButtonComp from "components/floatButton";

import "../styles/globals.css";

type Props = {
  brand: Brand[];
};

const Brand = ({brand}: Props) => {
  return (
    <div className="brand">
      <Head>
        <title>
          GMRseat Brand Products
        </title>
        <meta name="description" content="catalog of all GMRseat related products sold"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <div className="relative">
        <FloatButtonComp/>
      </div>
      <div className="max-w-[460px] md:max-w-5xl mx-0 md:mx-auto">
        <Header/>
        <Banner/>
        <article className="px-2 md:px-10 pb-10">
          <section className="md:space-y-1 border-transparent text-black">
            <div className='relative min-h-56 sm:min-h-42 sm:mb-0 flex flex-col md:flex-row md:justify-between'>
              <section className="p-4 sm:p-1 bg-transparent w-full">
                <div className="md:flex md:flex-row justify-between gap-y-5 sm:gap-y-0 sm:mb-0">
                  <div className="flex md:justify-center sm:mt-[25px] sm:mb-0">
                    <h1 className="text-3xl md:text-8xl dark:text-white font-extrabold absolute z-0 opacity-[.15] 
                      md:w-[750px] md:ml-[280px] md:mb-[280px] hover:text-[#992715de] hover:opacity-[.35]">
                      ゲーマーシート
                    </h1>
                    <h1 className="text-xl md:text-6xl dark:text-white font-extrabold font-PermanentMarker z-10 ml-4 md:mt-[50px] sm:mt-[10px] sm:mb-0">
                      [GMR] Brand
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div className="border-r-black border-l-black border border-opacity-10 
            bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default px-3">
            <BrandList brand={brand}/>
          </div>
        </article> 
      </div>
      <Footer/>
    </div>
  );
};

export async function getStaticProps() {
  const brand = await client.fetch(`
    *[_type == "brand"]{
      ...,
      image,
      description,
      url,
      tags[]->,
    } | order(_createdAt desc)
  `);

  return {
    props: {
      brand
    }
  };
};


export default Brand;