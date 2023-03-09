import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import {PortableText} from '@portabletext/react';

import { TypedObject } from 'sanity';



type block = {
  blocks: TypedObject
}

// Here we are deconstructing the youtube data we pass in so to extract the
// necessary props, being id & we might not really need title but we'll do anyway for posterity.
export const serializers = {
  types: {
    youtube: ({node}: any) => {
      const {url, title} = node;
      const id = getYouTubeId(url);
      return (
        <LiteYouTubeEmbed title={title} id={String(id)}/>
      );
    }
  }
};

export default function YoutubeEmbedded({blocks}: block) {
  return (
    <PortableText value={blocks} components={serializers}  />
  )
}
