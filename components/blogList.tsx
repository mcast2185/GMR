"use client";

import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';

import ClientSideRoute from './clientSideRoute';
import { Post } from '../typings.d';
import urlFor from '../lib/urlFor';

type Props = {
  posts: Post[];
};

// Component renders and organizes the created blogs for the home page.
// creates links for each iteration of blog posts

function BlogList({posts}: Props) {
  const [allPosts, setAllPosts] = useState<boolean>(false);
  let filteredPosts = posts.slice(0, 4);
  let morePosts = posts.slice(6);


  useEffect(() => {
    document.getElementById("morePosts")?.addEventListener("click", () => {
      setAllPosts(true);
      document.getElementById("morePosts")!.style.display = "none";
    })
  });

  return (
    <div className="blogList">
      <hr className="border-[#992715de] mb-10"/>
      <h1 className="text-black underline decoration-[#992715de] font-bold 
        text-2xl font-MontserratAlternates m-2 mt-1 pb-4">
        Blogs:
      </h1>
      <div className="grid grid-cols-1 
        md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {filteredPosts.map((post) => (
          <ClientSideRoute key={post._id} 
            route={`/post/${post.slug.current}`}>
            <div className="group cursor-pointer overflow-hidden flex flex-col">
              <div className="relative w-full h-80 drop-shadow-xl 
                group-hover:scale-105 overflow-hidden transition-transform duration-200 ease-out">
                <Image
                  priority
                  className='object-cover 
                  object-left lg:object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  sizes='height: auto, width: auto'
                  fill
                />
                <div className="absolute bottom-0 w-full 
                  bg-opacity-40 bg-black backdrop-blur-lg 
                  rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold font-Montserrat" aria-details='rendered post title'>
                      {post.title}
                    </p>
                    <p className="font-Quicksand font-bold text-base" aria-details='rendered post date'>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row 
                    gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category) => (
                      <div className="bg-[#3c3c3c] opacity-80 font-Quicksand text-center 
                        text-white px-3 py-1 rounded-full text-sm font-bold" aria-details='rendered post categories'>
                       <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg 
                  font-extrabold font-JuliusSansOne">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-gray-500 
                  text-base font-Quicksand font-extrabold">
                  {post.description}
                </p>
              </div>
              <p className="mt-5 font-MontserratAlternates 
                font-bold flex items-center group-hover:underline">
                Read Post
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
            </div>
          </ClientSideRoute>
        ))}
      <div>
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
            <div className="group cursor-pointer overflow-hidden flex flex-col" aria-details='renders for read more only'>
              <div className="relative w-full h-80 drop-shadow-xl 
                group-hover:scale-105 overflow-hidden transition-transform duration-200 ease-out">
                <Image
                  priority
                  className='object-cover 
                  object-left lg:object-center'
                  src={urlFor(post.mainImage).url()}
                  alt={post.author.name}
                  sizes='height: auto, width: auto'
                  fill
                />
                <div className="absolute bottom-0 w-full 
                  bg-opacity-40 bg-black backdrop-blur-lg 
                  rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold font-Montserrat" aria-details='rendered post title'>
                      {post.title}
                    </p>
                    <p className="font-Quicksand font-bold text-base" aria-details='rendered post date'>
                      {new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </p>
                  </div>
                  <div className="flex flex-col md:flex-row 
                    gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map((category) => (
                      <div className="bg-[#992715de] font-Quicksand text-center 
                        text-white px-3 py-1 rounded-full text-sm font-bold" aria-details='rendered post category'>
                       <p>{category.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-5 flex-1">
                <p className="underline text-lg 
                  font-extrabold font-JuliusSansOne">
                  {post.title}
                </p>
                <p className="line-clamp-2 text-gray-500 
                  text-base font-Quicksand font-extrabold" aria-details='rendered post desc'>
                  {post.description}
                </p>
              </div>
              <p className="mt-5 font-MontserratAlternates 
                font-bold flex items-center group-hover:underline">
                Read Post
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
            </div>
          </ClientSideRoute>
        )): <></>}
      </div>
      </div>
    </div>
  );
};

export default BlogList;