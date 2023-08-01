import {deskTool} from 'sanity/desk'
import schemas from '../schemas';

const config = {
    projectId: "pptywyf1",
    dataset: "production",
    title : "Razer Products",
    apiVersion: "2023-03-09",
    basePath : "/admin",
    plugins: [deskTool()],
    schema: { types: schemas }
  }
  
  export default config;