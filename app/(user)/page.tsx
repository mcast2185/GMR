import { groq } from 'next-sanity';
import { PreviewSuspense } from 'next-sanity/preview';
import { previewData } from 'next/headers';

import { client } from '../../lib/sanity.client';
import Carousel from 'components/carousel';
import BlogList from '../../components/blogList';
import PreviewBlogList from '../../components/previewBlogList';
import SampleContent from 'components/sampleContent';

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
  const posts = await client.fetch(query);
  // const posts = await res;

  return (
    <div>
      <Carousel/>
      <SampleContent/>
      <BlogList posts={posts}/>
    </div>
  )
};


