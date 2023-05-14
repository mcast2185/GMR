import getYouTubeId from 'get-youtube-id';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import {PortableText} from '@portabletext/react';
import { TypedObject } from 'sanity';

import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';

type block = {
  blocks: TypedObject
};

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
  );
};