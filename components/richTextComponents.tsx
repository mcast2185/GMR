import Image  from 'next/image';
import Link from 'next/link';

import urlFor from '../lib/urlFor';
import { serializers } from './youtubeEmbed';


export const RichTextComponents = {
  serializers,
  types : {
    image: ({value}: any) => {
      return (
        <div className="relative w-full h-96 m-10 mx-auto">
          <Image
            className="object-contain"
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
      )
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
      <h1 className="text-5xl px-10 font-RubikMonoOne underline decoration-[#992715de] text-[#333333] py-8 font-bold">{children}</h1>
    ),
    h2: ({children}: any) => (
      <h2 className="text-4xl px-10 font-RubikMonoOne underline decoration-[#992715de] text-[#333333] py-10 font-bold">{children}</h2>
    ),
    h3: ({children}: any) => (
      <h3 className="text-3xl px-10 font-RubikMonoOne underline decoration-[#992715de] text-[#333333] py-10 font-bold">{children}</h3>
    ),
    h4: ({children}: any) => (
      <div className="flex items-center h-20" >
        <h4 className="text-lg px-10 font-Montserrat decoration-[#992715de] text-[#333333b8] pb-20 font-semibold">{children}</h4>
      </div>
    ),
    p: ({children}: any) => (
      <p className="py-5 text-[#292727] text-base leading-8 font-medium font-Quicksand px-20 ">{children}</p>
    ),
    blockquote: ({children}: any) => (
      <blockquote className="border-x-[#992715de] border-x-2 pl-40 pr-0 my-5 font-Quicksand sm:my-0 sm:pl-0 sm:flex sm:justify-center">
        <p className='border-b-[#992715de] px-0 w-fit border-b-2 '>{children}</p>
      </blockquote>
    ),
    
  },
  marks: {
    link: ({children, value}: any) => {
      const rel = !value.href.startsWith("/") ? "noreferrer noopener" : undefined;
      return (
        <Link
          className=" underline text-[#192de4] transition ease-in-out decoration-[#ffffff00] hover:shadow-md hover:decoration-[#992715de]"
          href={value.href}
          rel={rel}>

          {children}
        </Link>
      );
    },
  },


}

