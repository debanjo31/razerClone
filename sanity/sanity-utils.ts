import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Product } from "@/types/Product";

export async function getProjects(): Promise<Product[]> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "project"]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`
    )
  }
  
  export async function getProject(slug: string): Promise<Product> {
    return createClient(clientConfig).fetch(
      groq`*[_type == "project" && slug.current == $slug][0]{
        _id,
        _createdAt,
        name,
        "slug": slug.current,
        "image": image.asset->url,
        url,
        content
      }`,
      { slug }
    )
  }
  