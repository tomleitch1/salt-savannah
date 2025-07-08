export default {
  name: 'destination',
  title: 'Destinations',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          {title: 'Savannah', value: 'savannah'},
          {title: 'Sea', value: 'sea'},
          {title: 'Mountain', value: 'mountain'}
        ]
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true
      }
    },
    {
      name: 'highlightsSection',
      title: 'Highlights Section',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          {name: 'title', type: 'string', title: 'Title'},
          {name: 'description', type: 'text', title: 'Description'},
          {name: 'image', type: 'image', title: 'Image', options: {hotspot: true}},
          {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'string'}]
          },
          {name: 'link', type: 'string', title: 'Link URL'}
        ]
      }]
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'heroImage'
    }
  }
}