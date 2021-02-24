export default {
  title: 'Gallery',
  name: 'gallery',
  type: 'document',
  fields: [
    {
      title: 'Gallery Name',
      name: 'name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      title: 'Preview Photo',
      name: 'previewPhoto',
      type: 'image',
      validation: Rule => Rule.required()
    },
    {
      title: 'Photos',
      name: 'photos',
      type: 'array',
      of: [{ type: 'photo' }],
      options: {
        layout: 'grid'
      },
      validation: Rule => Rule.required().min(1)
    }
  ]
};
