import { Product } from '@/types/Product';
import { StateCreator } from 'zustand';
import { getProduct } from '@/sanity/sanity-utils';

export interface ProductSlice {
  products: Product[];
  fetchProducts: () => void;
}

export const createProductSlice: StateCreator<ProductSlice> = (set) => ({
  products: [],
  fetchProducts: async () => {
    const res = await fetch(
      'https://api.escuelajs.co/api/v1/products?offset=0&limit=20'
    );
    set({ products: await res.json() });
  },
});
