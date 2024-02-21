"use client";

import Head from "next/head";

import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import BlogList from "components/blogList";
import { client } from "lib/sanity.client";
import { Post } from '../typings.d';
import FloatButtonComp from "components/floatButton";

import "../styles/globals.css";

type Props = {
  posts: Post[];
};

const Blogs = ({posts}: Props) => {
  return (
    <div className="blogs">
      <Head>
        <title>
          GMRseat Blog Spot
        </title>
        <meta name="description" content="archive page of every blog posts" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FloatButtonComp/>
      <div className="max-w-[460px] md:max-w-5xl mx-0 md:mx-auto">
        <Header/>
        <Banner/>
        <article className="px-2 md:px-10 pb-5">
          <section className="space-y-1 border-transparent text-black">
            <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
              <section className="p-4 bg-transparent w-full">
                <div className="md:flex md:flex-row justify-between gap-y-5 sm:gap-y-0 sm:mb-0">
                  <div className="flex md:justify-center sm:mt-[25px] sm:mb-0">
                    <h1 className="text-3xl md:text-8xl dark:text-white font-extrabold absolute z-0 opacity-[.15] 
                      md:w-[550px] md:ml-[280px] md:mb-[280px] hover:text-[#992715de] hover:opacity-[.35]">
                      מושב גיימר
                    </h1>
                    <h1 className="text-xl md:text-6xl dark:text-white font-extrabold font-BubbleGum z-10 ml-4 md:mt-[50px] sm:mt-[10px] sm:mb-0">
                      Blogs
                    </h1>
                  </div>
                </div>
              </section>
            </div>
          </section>
          <div className="border-r-black border-l-black border border-opacity-10 
            bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default px-3">
            <BlogList posts={posts}/>
          </div>
        </article> 
      </div>
      <Footer/>
    </div>
  );
};

export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post"]{
      ...,
      author->,
      categories[]->,
    } | order(_createdAt desc)
  `);

  return {
    props: {
      posts
    }
  };
};


export default Blogs;