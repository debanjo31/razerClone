import { createClient, groq } from 'next-sanity';
import clientConfig from './config/client-config';
import { Product } from '@/types/Product';

export async function getProducts() {
  return createClient(clientConfig).fetch(
    groq`*[_type == "product"]{
        _id,
        name,
         type,
          price,
          featured,
          description,
          excerpt, 
        "slug": slug.current,
        "images": images[].asset._ref,
          features[] ,          
      }`
  );
}

export async function getProduct(slug: string) {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
       type,
        price,
        featured,
        description,
        excerpt, 
      "slug": slug.current,
      "images": images[].asset._ref,
        features[] ,  
      
    }`,
    { slug }
  );
}
