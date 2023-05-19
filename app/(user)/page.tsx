import { groq } from 'next-sanity';

import HomeBodyContent from 'components/homeBodyContent';
import Newsletter from 'components/newsletter';
import Footer from 'components/footer';
import { client } from 'lib/sanity.client';
import { Post } from 'typings';

import "../../styles/globals.css";

const query = groq`
  *[_type == "post"]{
    ...,
    author->,
    categories[]->,
  } | order(_createdAt desc)
`;

export const revalidate = 60;
export default async function Home() {
  const posts: Post[] = await client.fetch(`
    *[_type == "post"]{
      ...,
      author->,
      categories[]->,
    } | order(_createdAt desc)
  `);

  return (
    <div>
      <HomeBodyContent posts={posts}/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};