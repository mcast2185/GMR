import Image  from 'next/image';
import Link from 'next/link';

import urlFor from '../lib/urlFor';
import { serializers } from './youtubeEmbed';


export const RichTextComponents = {
  serializers,
  types : {
    image: ({value}: any) => {
      return (
        <div className="relative w-full md:h-96 md:m-10 sm:mt-[5vh] sm:mb-[5vh] sm:h-[35vh] md:mx-auto">
          <Image
            className="object-contain sm:absolute sm:h-full sm:w-full sm:left-0 sm:right-0 sm:bottom-0 sm:top-0"
            src={urlFor(value).url()}
            alt="Blog Image"
            fill />
        </div>
      );
    },
    youtube: ({url}: any) => {
      return (
        <div className="relative w-full h-full mx-auto flex justify-center" >
          <iframe className="h-full w-full" src={url}></iframe>
        </div>
      );
    }
  },
  list: {
    bullet: ({children}: any) => (
      <ul className="ml-10 py-1 px-14 list-disc space-y-5">{children}</ul>
    ),
    number: ({children}: any) => (
      <ol className="mt-lg list-decimal">{children}</ol>
    ),
  },
  block: {
    h1: ({children}: any) => (
      <h1 className="text-5xl sm:text-[2.4rem] md:px-10 sm:pr-10 sm:pl-4 font-AlegreyaSans underline decoration-[#992715de] dark:text-white text-[#333333] md:py-8 sm:pt-8 sm:pb-[1.2rem] font-bold">{children}</h1>
    ),
    h2: ({children}: any) => (
      <h2 className="md:text-4xl sm:text-[1.65rem] sm:pr-10 sm:pl-4 md:px-10 font-AlegreyaSans underline decoration-[#992715de] dark:text-white text-[#333333] sm:py-4 md:py-10 font-bold">{children}</h2>
    ),
    h3: ({children}: any) => (
      <h3 className="text-3xl px-10 font-AlegreyaSans underline decoration-[#992715de] dark:text-white text-[#333333] py-10 font-bold">{children}</h3>
    ),
    h4: ({children}: any) => (
      <div className="flex items-center h-20" >
        <h4 className="text-lg px-10 font-JuliusSansOne decoration-[#992715de] dark:text-white text-[#333333b8] pb-20 font-bold">{children}</h4>
      </div>
    ),
    p: ({children}: any) => (
      <p className="md:py-5 sm:py-0 text-[#292727] dark:text-white md:text-base sm:text-[1.1rem] md:leading-8 sm:leading-[1.8rem] font-medium font-Quicksand md:px-20 sm:px-[2rem]">{children}</p>
    ),
    blockquote: ({children}: any) => (
      <blockquote className="border-x-[#992715de] md:pl-4 border-l-2 pr-0 md:my-5 text-base dark:text-white
        font-Quicksand tracking-tighter font-bold sm:mt-5 sm:mb-0 sm:pl-0 sm:flex sm:justify-center">
        <p className='border-b-[#992715de] pt-5 px-0 w-fit border-b-2 '>{children}</p>
      </blockquote>
    ),
  },
  marks: {
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link href={value.href} rel={rel}
          className="underline text-[#192de4] transition ease-in-out 
          decoration-[#ffffff00] hover:shadow-md hover:decoration-[#992715de]">
          {children}
        </Link>
      );
    },
  },
};