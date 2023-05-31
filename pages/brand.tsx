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
          <section className="space-y-1 border-transparent text-black">
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
              <section className="p-4 bg-transparent w-full">
                <div className="flex flex-col md:flex-row justify-between gap-y-5">
                  <div>
                    <h1 className="text-6xl dark:text-white font-extrabold font-MontserratAlternates">
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