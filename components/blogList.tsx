"use client";

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';

import ClientSideRoute from './clientSideRoute';
import { Post } from '../typings.d';
import urlFor from '../lib/urlFor';
import LINK from '../public/wind.png';

type Props = {
  posts: Post[];
};


function BlogList({posts}: Props) {
  const [allPosts, setAllPosts] = useState<boolean>(false);
  let filteredPosts = posts.slice(0, 4);
  let morePosts = posts.slice(4);


  useEffect(() => {
    document.getElementById("morePosts")?.addEventListener("click", () => {
      setAllPosts(true);
      document.getElementById("morePosts")!.style.display = "none";
    });

    }
  );

  return (
    <div className="blogList">
      <header>
        <h1 className="text-black underline decoration-[#992715de] font-bold 
          text-2xl font-MontserratAlternates m-2 mt-1 pb-4">
          Blogs:
        </h1>
      </header>
      <div className="grid grid-cols-1 
        md:grid-cols-2 px-8 gap-10 gap-y-12 pb-24">
        {filteredPosts.map((post) => (
          <ClientSideRoute key={post._id} 
            route={`/post/${post.slug.current}`}>
    
            <article key={post._id}  className="flex flex-col overflow-hidden">
              <section className="relative w-full h-80 hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className='object-cover 
                   lg:object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  placeholder='blur'
                  blurDataURL={urlFor(posts[0].mainImage).url()}
                  priority={true}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 w-full text-base
                  bg-opacity-60 bg-black 
                  rounded text-white p-5 flex justify-between">
                  <span className="scale-95" property='blog detail'>
                    <p className="font-bold font-Quicksand" aria-details='rendered post title'>
                      {post.title}
                    </p>
                    <p className="font-Quicksand font-bold text-base" aria-details='rendered post date'>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </span>
                  <div className="flex flex-col md:flex-row 
                    gap-y-2 md:gap-x-2 items-center scale-95 pr-6">
                    {post.categories.map((category) => (
                      <div key={Math.random()} className="bg-[#3c3c3c] opacity-80 font-Quicksand text-center 
                        text-white px-3 py-1 rounded-full text-sm font-bold" aria-details='rendered post categories'>
                        <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="mt-5 flex-1 scale-95">
                <p className="underline text-lg 
                  font-extrabold font-JuliusSansOne">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-gray-500 
                  text-base font-Quicksand font-extrabold">
                  {post.description}
                </p>
              </section>
              <p className="mt-5 font-MontserratAlternates  
                font-bold flex items-center group-hover:underline">
                Read Post
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
            </article> 
          </ClientSideRoute>
        ))}

        <button type="button" id="morePosts" className="border-none decoration-transparent">
          <h2 className="mt-5 font-MontserratAlternates 
            font-bold flex items-center group-hover:underline" aria-details='read more link'>
            Read more...
          <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
          </h2>
        </button>
        {allPosts == true ? morePosts.map((post) => (
          <ClientSideRoute key={post._id} 
            route={`/post/${post.slug.current}`}>
            <article key={post._id} className=" flex flex-col overflow-hidden" aria-details='renders for read more only'>
              <section className="relative w-full h-80 hover:scale-105 transition-transform duration-200 ease-out">
                <Image
                  className='object-cover 
                   lg:object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  placeholder='blur'
                  blurDataURL={urlFor(posts[0].mainImage).url()}
                  priority={true}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute bottom-0 w-full 
                  bg-opacity-60 bg-black 
                  rounded text-white p-5 flex justify-between">
                  <span className="scale-95" property='blog detail'>
                    <p className="font-bold font-Quicksand" aria-details='rendered post title'>
                      {post.title}
                    </p>
                    <p className="font-Quicksand font-bold text-base" aria-details='rendered post date'>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </span>
                  <div className="flex flex-col md:flex-row scale-95
                    gap-y-2 md:gap-x-2 items-center pr-6">
                    {post.categories.map((category) => (
                      <div key={Math.random()} className="bg-[#3c3c3c] font-Quicksand text-center pr-3
                        text-white px-3 py-1 rounded-full text-sm font-bold" aria-details='rendered post category'>
                       <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
              <section className="mt-5 flex-1 scale-95">
                <p className="underline text-lg 
                  font-extrabold font-JuliusSansOne">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-gray-500 
                  text-base font-Quicksand font-extrabold" aria-details='rendered post desc'>
                  {post.description}
                </p>
              </section>
              <p className="mt-5 font-MontserratAlternates 
                font-bold flex items-center group-hover:underline">
                Read Post
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
            </article>
          </ClientSideRoute>
        )): <></>}
      </div>

    </div>
  );
};




export default BlogList;