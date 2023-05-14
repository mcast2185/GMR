export default {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: "reference", to: {type: "tags"}}],
      options: {
        frozen: true,
        preload: [{label: "NextJS", value: "NextJS"}, {label: "TailWind", value: "TailWind"}],
        closeMenuOnSelect: true
      }
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
    },
    {
      name: 'url',
      title: "URL",
      type: "url"
    },
    {
      name: 'company',
      title: "Company",
      type: "string"
    }
  ],
};