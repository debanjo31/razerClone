// schemas/products.js
import { type } from 'os';
import { Rule } from 'sanity';

const product = {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          min: {
            (arg0: number): {
              (): any;
              new (): any;
              max: { (arg0: number): any; new (): any };
            };
            new (): any;
          };
        };
      }) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'name' },
    },
    {
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Set true/false if this product should be featured',
    },
    {
      name: 'type',
      title: 'Product Type',
      type: 'string',
      options: {
        list: [
          { title: 'Laptop', value: 'laptop' },
          { title: 'Desktop', value: 'desktop' },
          { title: 'Monitor', value: 'monitor' },
          { title: 'Mouse', value: 'mouse' },
          { title: 'Mouse Mat', value: 'mouse_mat' },
          { title: 'Keyboard', value: 'keyboard' },
          { title: 'Headset', value: 'headset' },
          { title: 'Speaker', value: 'speaker' },
          { title: 'Chair', value: 'chair' },
          { title: 'Software', value: 'software' },
        ],
      },
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'excerpt',
      title: 'Product Excerpt',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: {
        required: () => {
          (): any;
          new (): any;
          positive: { (): any; new (): any };
        };
      }) => Rule.required().positive(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',

          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              title: 'Alt',
              type: 'string',
            },
          ],
        },
      ],

      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'features',
      type: 'array',
      title: 'Features',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'pic',
              type: 'image',
              title: 'Feature Pic',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt',
                  type: 'string',
                },
              ],
            },
            {
              name: 'title',
              type: 'string',
              title: 'Feature Title',
            },
            {
              name: 'description',
              type: 'string',
              title: 'Feature Description',
            },
          ],
        },
      ],
    },
    {
      name: 'brands',
      type: 'array',
      title: 'Brands',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'logo',
              type: 'image',
              title: 'Brand Logo',
              options: {
                hotspot: true,
              },
              fields: [
                {
                  name: 'alt',
                  title: 'Alt',
                  type: 'string',
                },
              ],
            },
            {
              name: 'name',
              type: 'string',
              title: 'Brand Name',
            },
            {
              name: 'words',
              type: 'string',
              title: 'Brand Recommendation',
            },
          ],
        },
      ],
    },
    // Add more fields specific to each product type, if needed
    // For example, specs for laptops or software requirements
  ],
  // Use TypeScript to provide type checking for your schema
  // For example, this ensures that every product has the "type" field
  // and that its value is one of the specified options
  initialValue: {
    type: 'laptop',
  },
};

export default product;
