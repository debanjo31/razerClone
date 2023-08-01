// schemas/products.js
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
      validation: (Rule: { required: () => { (): any; new(): any; min: { (arg0: number): { (): any; new(): any; max: { (arg0: number): any; new(): any; }; }; new(): any; }; }; }) => Rule.required().min(3).max(100),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" }
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
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'brand',
      title: 'Brand',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule: { required: () => { (): any; new(): any; positive: { (): any; new(): any; }; }; }) => Rule.required().positive(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: { required: () => any; }) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Alt",
          type: "string"
        }
      ],
      validation: (Rule: { required: () => any; }) => Rule.required(),
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
} 


export default product;