export default {
  title: 'Photo',
  name: 'photo',
  type: 'object',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Description',
      name: 'description',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
      validation: Rule => Rule.required()
    }
  ]
};
