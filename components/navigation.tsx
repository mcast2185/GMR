import Link from 'next/link';
import React from 'react'


const Navigation = () => {
  return (
    <div className="flex flex-row justify-center w-full space-x-2 ">

       <Link href="/">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Home 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          About 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Contact 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Blogs 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Podcasts 
        </h1>
       </Link>
        <p>·</p>
       <Link href="/">
        <h1 className="text-lg text-black 
          font-MontserratAlternates font-normal hover:font-medium hover:scale-105 
          hover:text-stone-800 transition-transform ease-in-out duration-500" >
          Other
        </h1>
       </Link>

    </div>
  );
};

export default Navigation