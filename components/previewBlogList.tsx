"use client";

import {usePreview} from '../lib/sanity.preview';
import BlogList from "./blogList";

type Props = {
  query: string;
};


export default function PreviewBlogList({query}: Props) {
  const posts = usePreview(null, query);

  return <BlogList posts={posts} />
};