import getYouTubeID from "get-youtube-id";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

const Preview = (props) => {
  const {url, renderDefault} = props;
  if (!url) {
    return <div>Could not retrieve Youtube url.</div>
  }

  const id = getYouTubeID(url);
  return (
    <div>
      {renderDefault({...props, title: 'Youtube Embed'})}
      <LiteYouTubeEmbed id={id}/>
    </div>
  )
}

export default {
  name: 'youtube',
  type: 'object',
  title: 'YouTube Embed',
  fields: [
    {
      name: 'url',
      type: 'url',
      title: 'YouTube video URL',
      of: [{type: 'block'}, {type: 'url'}]
    }
  ],
  preview: {
    select: {
      url: 'url',
    }
  },
  components: {
    preview: Preview
  }
};