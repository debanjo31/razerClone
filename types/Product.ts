export interface Product {
  _id: string;
  name: string;
  type: string;
  featured: boolean;
  description: string;
  excerpt: string;
  price: number;
  createdAt: Date;
  slug: string;
  image: string;
  images: Array<any>;
  features: Array<any>;
  quantity?: number;
}
