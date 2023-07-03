import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import Image  from 'next/image';
import React from "react";

import { RichTextComponents } from '../../../../components/richTextComponents';
import { client } from '../../../../lib/sanity.client';
import { Post } from '../../../../typings';
import urlFor from '../../../../lib/urlFor';
import CommentForm from '../../../../components/commentForm';
import Head from 'next/head';


type Props = {
  params: {
    slug: string;
  }
};

export const revalidate = 60;
export async function generateStaticParams() {
  const query = groq`*[_type == 'post']
  {
    slug
  }`;

  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug.slug.current);

  return slugRoutes.map(slug => ({
    slug,
  }));
};

async function Post({params: {slug}}: Props) {
  const query = groq`
    *[_type == "post" && slug.current == "${slug}"]{
      ...,
      author->,
      categories[]->,
      'comments': *[
        _type == "comment" && 
        post._ref == ^._id &&
        approved == true
      ], 
      description,
      mainImage,
      slug,
      body
    }`;

  const posts = await client.fetch(query);
  const securePost = posts[0];

  return (
    <div className=" scale-x-[.8] scale-y-90 md:scale-x-100 md:scale-y-100 sm:mt-[-20vh]
      max-w-[400px] md:max-w-5xl md:h-fit flex flex-wrap relative content-center flex-col">
      <Head>
        <title>
          {`${securePost!.title}`}
        </title>
        <meta name="description" content={`${securePost.description}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <article className="px-0 md:px-10 pb-[2.5rem] md:pb-[5rem] w-fit">
        <section className="space-y-1 border-[#992715de] text-white scale-y-[.8] md:scale-y-100">
          <div className='relative md:min-h-56 flex flex-col md:flex-row flex-wrap md:flex-nowrap content-center md:content-normal'>
            <figure>
              <div className="absolute top-0 w-full h-full opacity-20 blur-sm pl-2 md:pl-0 pr-[5rem] md:pr-0 md:px-10 p-2 border-box">
                <Image
                  className='object-cover object-left lg:object-center sm:absolute sm:h-full sm:w-full sm:left-0 sm:right-0 sm:bottom-0 sm:top-0'
                  src={urlFor(securePost!.mainImage).url()}
                  alt={securePost.author.name}
                  fill
                /> 
              </div>
            </figure>
            <div className="p-1 md:p-4 bg-[#ba3627] w-[490px] md:w-full" 
              aria-details='Section that categorizes and provides detail to post'>
              <div className="flex flex-col md:flex-row justify-between gap-y-[.75rem] md:gap-y-5">
                <div>
                  <h1 className="md:text-4xl text-[1.65rem] font-extrabold font-AlegreyaSans" aria-details='Post title'>
                    {securePost.title}
                  </h1>
                  <p className="font-Quicksand font-bold" aria-details='post date'>
                    {new Date(securePost._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>
                <div className='flex mt-16 md:w-52 w-full mb-0 md:pt-3 pt-6 justify-center'>
                  <div className="flex flex-col md:items-center 
                    justify-center md:content-center w-full md:w-52 h-0 md:h-24 md:pt-15" >
                    <figure className="flex flex-row md:flex-col sm:w-[107%] sm:h-[25vh] sm:relative sm:bottom-[0vh] sm:flex-wrap sm:items-end">
                      <div className="flex flex-col sm:justify-center sm:flex-wrap-reverse sm:items-strech sm:w-[45vw] sm:pr-0 sm:pb-0">
                        <Image
                          className='rounded-[24px] mr-[14vw] md:mr-0 sm:relative sm:mr-[14vw] sm:bottom-[.5vh] 
                            sm:object-cover sm:w-[18vw] sm:max-w-full sm:h-[12vh] sm:flex sm:justify-start sm:flex-wrap sm:content-start'
                          src={urlFor(securePost.author.image).url()}
                          alt={securePost.author.name}
                          height={80}
                          width={90}
                        /> 
                        <div className='md:w-52 '>
                          <h3 className="text-lg sm:text-[1.025rem] font-Quicksand font-bold flex flex-row ml-8" aria-details='Post author name'>
                            {securePost.author.name}
                          </h3>
                        </div>
                      </div>
                      <div className="flex flex-row sm:w-[80vw] sm:justify-end font-Quicksand" aria-details='Post categories'>
                        {securePost.categories.map((el: any) => (
                          <p aria-details='category' key={el._id}
                            className="bg-[#3c3c3c] bg-opacity-90 text-white 
                            flex flex-row mr-3 px-[.55rem] py-1 rounded-2xl text-[.975rem] font-semibold mt-3">
                            {el.title}
                          </p>
                        ))}
                      </div>
                    </figure>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-14 md:w-44 pl-3 mt-0 flex justify-start">
                </div>
                <h2 className="italic pt-5 underline decoration-white font-Quicksand font-bold" aria-details='Post desc'>
                  {securePost.description}
                </h2>
                <div className='flex items-center justify-end mt-auto space-x-1'>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="border-r-black border-l-black border border-opacity-10 md:w-full w-[490px]
          bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default">
          <PortableText value={securePost.body} 
            components={RichTextComponents} aria-details='Portable text body render'/>
          {securePost.body.map((el: any) => {
            if (el.url){
              return (
                <div className="flex justify-center w-[250px] h-[200px] md:w-full md:h-full p-2 cursor-pointer">
                  <a id="youtube_hyperlink">
                    <iframe className="object-contain md:w-[500px] md:h-[350px] w-[250px] h-[200px]" height={600} 
                      width={850} src={el.url}>
                    </iframe>
                  </a>
                </div>
              )
            }
          })}
        </section>
      </article> 
      <CommentForm post={securePost}/>
    </div>
  );
};

export default Post;