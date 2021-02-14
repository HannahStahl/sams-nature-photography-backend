import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: 'Photo',
      name: 'photo',
      type: 'object',
      fields: [
        {
          title: 'Title',
          name: 'title',
          type: 'string'
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string'
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image'
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
          type: 'string'
        },
        {
          title: 'Photos',
          name: 'photos',
          type: 'array',
          of: [{ type: 'photo' }]
        }
      ]
    },
  ]),
});
