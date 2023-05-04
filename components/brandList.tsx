"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faArrowRight} from "@fortawesome/free-solid-svg-icons"
import Image from 'next/image';
import { Brand, Tags } from '../typings.d';
import { useEffect } from 'react';
import Link from 'next/link';


type Props = {
  brand: Brand[];
};


function BrandList({brand}: Props) {
  const hoodies: Brand[] = [];
  const sweatshirts: Brand[] = [];
  const tshirts: Brand[] = [];
  const accessories: Brand[] = [];

  const apparel = brand.map(item => {
    return item;
  });


  apparel.map(item => {
    if (item.tags[0].title === "Hoodie") hoodies.push(item);
    else if (item.tags[0].title === "Sweatshirt") sweatshirts.push(item);
    else if (item.tags[0].title === "T-shirt") tshirts.push(item);
    else accessories.push(item);
  });




  return (
    <div className="blogList">
      <hr className="border-[#992715de] mb-10"/>
      <header>
        <h1 className="text-black underline decoration-[#992715de] font-bold 
          text-2xl font-MontserratAlternates m-2 mt-1 pb-4">
          [GMR] Gear:
        </h1>
      </header>
    
    <div className="flex flex-col h-full" >
     
    

      <div id="scroll" className="flex flex-row overflow-y-scroll overscroll-x-contain 
        md:grid-cols-2 pl-6 gap-14 gap-y-20 pb-24">
        {hoodies.map((item) => (
            <article key={item!._id}>
              <section className="relative w-72 h-80 pl-2 flex flex-col items-center">
                <Image
                  className='relative hover:scale-105 transition-transform duration-200 ease-out'
                  src={item!.url}
                  alt={item!.company}
                  height={300}
                  width={200}
                  priority={true}

                />
                <div className="absolute bottom-9 w-64 text-base
                  bg-opacity-60 bg-black h-12
                  rounded text-white pl-2 pt-5 pr-0 flex justify-center">
                  <span className="scale-95" property='blog detail'>
                    <p className="font-bold font-MontserratAlternates" 
                      aria-details='rendered hoodies title'>
                      {item!.title}
                    </p>
                  </span>
                </div>
              </section>
              <section className="mt-1 pl-1 flex-1 scale-95">
                <p className="line-clamp-2 text-gray-500 
                  text-base font-MontserratAlternates font-extrabold">
                  {item!.description}
                </p>
              </section>
              <Link href={"/"}>
              <p className="mt-4 font-MontserratAlternates 
                font-bold pl-3 flex items-center group-hover:underline">
                View item
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
              </Link>
            </article> 
          ))
        }
        </div>
        <div id="scroll" className="flex flex-row overflow-y-scroll 
        md:grid-cols-2 pl-6 gap-14 gap-y-16 pb-24">
        {sweatshirts.map((item) => (
            <article key={item!._id}>
              <section className="relative w-72 h-80 pl-2 flex flex-col items-center">
                <Image
                  className='relative hover:scale-105 transition-transform duration-200 ease-out'
                  src={item!.url}
                  alt={item!.company}
                  height={300}
                  width={200}
                  priority={true}

                />
                <div className="absolute bottom-7 w-full text-base
                  bg-opacity-60 bg-black h-12
                  rounded text-white pl-2 pt-5 pr-0 flex justify-center">
                  <span className="scale-95" property='blog detail'>
                    <p className="font-bold font-MontserratAlternates" 
                      aria-details='rendered hoodies title'>
                      {item!.title}
                    </p>
                  </span>
                </div>
              </section>
              <section className="mt-1 pl-1 flex-1 scale-95">
                <p className="line-clamp-2 text-gray-500 
                  text-base font-MontserratAlternates font-extrabold">
                  {item!.description}
                </p>
              </section>
              <Link href={"/"}>
              <p className="mt-4 font-MontserratAlternates 
                font-bold pl-3 flex items-center group-hover:underline">
                View item
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
              </Link>
            </article> 
          ))
        }
        </div>
        <div id="scroll" className="flex flex-row overflow-y-scroll 
        md:grid-cols-2 pl-6 gap-14 gap-y-16 pb-24">
        {tshirts.map((item) => (
            <article key={item!._id}>
              <section className="relative w-72 h-80 pl-2 flex flex-col items-center">
                <Image
                  className='relative hover:scale-105 transition-transform duration-200 ease-out'
                  src={item!.url}
                  alt={item!.company}
                  height={300}
                  width={200}
                  priority={true}

                />
                <div className="absolute bottom-7 w-full text-base
                  bg-opacity-60 bg-black h-12
                  rounded text-white pl-2 pt-5 pr-0 flex justify-center">
                  <span className="scale-95" property='blog detail'>
                    <p className="font-medium font-MontserratAlternates" 
                      aria-details='rendered hoodies title'>
                      {item!.title}
                    </p>
                  </span>
                </div>
              </section>
              <section className="mt-1 pl-1 flex-1 scale-95">
                <p className="line-clamp-2 text-gray-500 
                  text-base font-MontserratAlternates font-bold">
                  {item!.description}
                </p>
              </section>
              <Link href={"/"}>
              <p className="mt-4 font-MontserratAlternates 
                font-bold pl-3 flex items-center group-hover:underline">
                View item
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
              </Link>
            </article> 
          ))
        }
        </div>
        <div id="scroll" className="flex flex-row overflow-y-scroll 
        md:grid-cols-2 pl-6 gap-14 gap-y-16 pb-24">
        {accessories.map((item) => (
            <article key={item._id} className=" hover:even:scale-105">
              <section className="relative w-72 h-80 pl-2 flex flex-col items-center">
                <Image
                  className='relative hover:scale-105 transition-transform duration-200 ease-out'
                  src={item.url}
                  alt={item.company}
                  height={300}
                  width={200}
                  priority={true}

                />
                <div className="absolute bottom-7 w-full text-base
                  bg-opacity-60 bg-black h-12
                  rounded text-white pl-2 pt-5 pr-0 flex justify-center">
                  <span className="scale-95" property='blog detail'>
                    <p className="font-bold font-MontserratAlternates" 
                      aria-details='rendered hoodies title'>
                      {item.title}
                    </p>
                  </span>
                </div>
              </section>
              <section className="mt-1 pl-1 flex-1 scale-95">
                <p className="line-clamp-2 text-gray-500 
                  text-base font-MontserratAlternates font-extrabold">
                  {item.description}
                </p>
              </section>
              <Link href={"/"}>
              <p className="mt-4 font-MontserratAlternates 
                font-bold pl-3 flex items-center group-hover:underline">
                View item
                <FontAwesomeIcon icon={faArrowRight} className='ml-2 h-4 w-4' />
              </p>
              </Link>
            </article> 
          ))
        }

        </div>
      </div>
    </div>
  );
};




export default BrandList;