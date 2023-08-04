import {deskTool} from 'sanity/desk'
import { visionTool } from '@sanity/vision';
import schemas from '../schemas';

const config = {
  projectId: 'pptywyf1',
  dataset: 'production',
  title: 'Razer Products',
  apiVersion: '2023-03-09',
  basePath: '/admin',
  plugins: [deskTool(), visionTool()],
  schema: { types: schemas },
};
  
  export default config;