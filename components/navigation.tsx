"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import SocialMediaIcons from './socialMediaIcons';


const Navigation = () => {
  let ref: any;

  useEffect(() => {
    ref = document.querySelector(".blogList");
  })

  const scrollEffect = () => {
    return ref?.scrollIntoView();
  };

  return (
    <div className="flex flex-col justify-center" >
      <div className="flex flex-row justify-center w-full " >
        <SocialMediaIcons/>
      </div>
      <div className="flex flex-row justify-center w-full space-x-2 m-0">

       <Link href="/">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Home 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/about">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          About 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/contact">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Contact 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/" onClick={scrollEffect}>
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Blogs 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/other">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Other
        </h1>
       </Link>
      </div>
      {/* <div className="flex flex-row justify-center mt-1 -mb-3 w-full " >
        <SocialMediaIcons/>
      </div> */}
    </div>
  );
};

export default Navigation