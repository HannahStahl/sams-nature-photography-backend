import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

export default createSchema({
  name: 'default',
  types: schemaTypes.concat([
    {
      title: 'Gallery',
      name: 'gallery',
      type: 'document',
      fields: [
        {
          title: 'Gallery Name',
          name: 'name',
          type: 'string'
        }
      ]
    },
    {
      title: 'Photo',
      name: 'photo',
      type: 'document',
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
        },
        {
          title: 'Gallery',
          name: 'gallery',
          type: 'reference',
          to: [{ type: 'gallery' }]
        }
      ]
    },
  ]),
});
