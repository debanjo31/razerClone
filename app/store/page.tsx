'use client';
import { getProducts } from '@/sanity/sanity-utils';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import StoreCard from '../componenets/StoreCard';
import StoreNav from '../componenets/StoreNav';
export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts()
      .then((fetchedProducts) => {
        setProducts(fetchedProducts);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <main className='mt-16 md:mt-[80px] z-10 bg-black'>
      <StoreNav />
      <section className='content mb-4 w-full text-xl md:text-2xl py-12'>
        <h2 className='text-[#44d62c] text-2xl font-bold'>
          THE LATEST AND GREATEST GAMING GEAR
        </h2>
        <p className='text-[#7F7D7F] text-lg '>
          Razer mice, keyboards, headsets, laptops & more
        </p>
      </section>
      <section className='store'>
        <div className='w-5/6 mx-auto flex flex-wrap justify-center items-center gap-8 '>
          {products &&
            products.map((product: Product) => (
              <StoreCard
                key={product._id}
                product={product}
              />
            ))}
        </div>
      </section>
    </main>
  );
}
