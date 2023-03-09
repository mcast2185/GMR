import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { previewData } from 'next/headers';
import { client } from '../../lib/sanity.client';
import React from "react";
import BlogList from '../../components/blogList';
import PreviewBlogList from '../../components/previewBlogList';

// This component query function will be used to stream in data from 
// // // sanity.io backend before it is published.


const query = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`

// const PreviewBloglistLazy = React.lazy(() => import('../../components/previewBlogList'))


export default async function Home () {
  // const posts = await client.fetch(query);
  if (previewData())
  return (
    <PreviewSuspense fallback={
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#F7AB0A]">
          Just a moment...
        </p>
      </div>}>
      {/* <PreviewBloglistLazy query={posts}/> */}
      <PreviewBlogList query={query}/>
    </PreviewSuspense>
  )
  const posts = await client.fetch(query);

  return (
    <div>
      <BlogList posts={posts}/>

    </div>
  )


};

