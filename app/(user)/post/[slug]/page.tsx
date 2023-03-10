import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import Image  from 'next/image';

import { RichTextComponents } from '../../../../components/richTextComponents';
import { client } from '../../../../lib/sanity.client';
import { Post } from '../../../../typings';
import GMR from './../../../../public/GMRICON.png'
import urlFor from '../../../../lib/urlFor';
import CommentForm from '../../../../components/commentForm';


type Props = {
  params: {
    slug: string;
  }
};


// re-render/validate updated backend data for this page
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
  }))
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
    <div>
      <article className="px-10 pb-10">
        <section className="space-y-1 border-[#992715de] text-white">
          <div className='relative min-h-56 flex flex-col md:flex-row justify-between'>
            <div className="absolute top-0 w-full h-full opacity-20 blur-sm px-10 p-2">
              <Image
                className='object-cover object-left lg:object-center'
                src={urlFor(securePost.mainImage).url()}
                alt={securePost.author.name}
                fill
              /> 
            </div>
            <section className="p-4 bg-[#ba3627] w-full">
              <div className="flex flex-col md:flex-row justify-between gap-y-5">
                <div>
                  <h1 className="text-4xl font-extrabold font-MontserratAlternates">
                    {securePost.title}
                  </h1>
                  <p className="font-Quicksand font-bold">
                    {new Date(securePost._createdAt).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </p>
                </div>

                <div className='flex mt-16 mb-0 pt-3'>
                  <div className="flex flex-col items-center justify-center content-center w-52 h-24 pt-15" >
                    <Image
                      className='rounded-full'
                      src={urlFor(securePost.author.image).url()}
                      alt={securePost.author.name}
                      height={80}
                      width={90}
                    /> 
                    <div className='w-28 '>
                      <h3 className="text-lg font-Quicksand font-bold flex">
                        {securePost.author.name}
                      </h3>
                    </div>
                    <div className="flex flex-row font-Quicksand" >
                    {securePost.categories.map((el: any) => (
                      <p className="bg-[#274c86] text-white px-3 py-1 rounded-full text-sm font-semibold mt-3"
                        key={el._id}>
                        {el.title}
                      </p>
                    ))}
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="h-14 w-44 pl-3 mt-0 flex justify-start border-l">
                  <img alt="blog icons" className="h-14 w-40" src={GMR.src}/>

                </div>
                <h2 className="italic pt-5 font-Quicksand font-bold">
                  {securePost.description}
                </h2>
                <div className='flex items-center justify-end mt-auto space-x-1'>
                  {/* {securePost.categories.map((el: any) => (
                    <p className="bg-[#274c86] text-white px-3 py-1 rounded-full text-sm font-semibold mt-3"
                      key={el._id}>
                      {el.title}
                    </p>
                  ))} */}
                </div>
              </div>
            </section>
          </div>
        </section>
        <div className="border-r-black border-l-black border border-opacity-10 bg-[#fff6f06c] border-t-transparent border-b-transparent cursor-default" >
          <PortableText value={securePost.body} 
            components={RichTextComponents}/>
          
          {securePost.body.map((el: any) => {
            if (el.url){
              return (
                <div className="flex justify-center w-full py-2 px-10 cursor-pointer">
                  <iframe className="object-cover" height={650} 
                    width={950} src={el.url}>
                  </iframe>
                </div>
              )
            }
          })}
        </div>
      </article> 
      <CommentForm post={securePost}/>
    </div>
  );
}

export default Post;