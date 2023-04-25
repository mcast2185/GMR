"use client";

import { useState, useEffect } from 'react';
import { groq } from 'next-sanity';
import { client } from 'lib/sanity.client';
import BlogList from './blogList';
import { Post } from 'typings';


type Props = {
  posts: Post[];
};


const ClientSideFetch = ({posts}: Props) => {

  return (
    <div>
      <BlogList posts={posts}/>
    </div>
  )
};

export async function getStaticProps() {
  const posts = await client.fetch(`
    *[_type == "post"]{
      ...,
      author->,
      categories[]->,
    } | order(_createdAt desc)
  `)

  return {
    props: {
      posts
    }
  }

}


export default ClientSideFetch;