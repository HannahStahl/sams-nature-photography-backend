import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: 'Photo',
      name: 'photo',
      type: 'document',
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
    },
    {
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
          title: 'Photos',
          name: 'photos',
          type: 'array',
          of: [{ type: 'photo' }],
          options: {
            layout: 'grid'
          },
        }
      ]
    },
  ]),
});
