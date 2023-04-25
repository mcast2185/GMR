import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { previewData } from 'next/headers';

import Carousel from 'components/carousel';
import PreviewBlogList from '../../components/previewBlogList';
import SampleContent from 'components/sampleContent';
import Newsletter from 'components/newsletter';
import Footer from 'components/footer';
import ClientSideFetch from '../../components/clientSideFetch';
import { client } from 'lib/sanity.client';
import { Post } from 'typings';


const query = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`

export const revalidate = 60;

export default async function Home () {
  if (previewData()) {
  return (
    <PreviewSuspense fallback={
      <div role="status">
        <p className="text-center text-lg animate-pulse text-[#992715de]">
          Just a moment...
        </p>
      </div>}>
      <PreviewBlogList query={query}/>
    </PreviewSuspense>
  )
  }

  const posts: Post[] = await client.fetch(`
    *[_type == "post"]{
      ...,
      author->,
      categories[]->,
    } | order(_createdAt desc)
  `)


  return (
    <div>
      <Carousel/>
      <SampleContent/>
      <ClientSideFetch posts={posts}/>
      <Newsletter/>
      <Footer/>
    </div>
  )
};


