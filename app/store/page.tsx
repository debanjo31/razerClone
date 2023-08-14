'use client';
import { getProducts } from '@/sanity/sanity-utils';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import StoreCard from '../componenets/StoreCard';
import StoreNav from '../componenets/StoreNav';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

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
      <p className='text-center p-2 bg-[#555555] text-white text-md md:text-lg'>
        All orders over US$79 will enjoy free standard shipping to the United
        State
      </p>
      <StoreNav />
      <section className='content mb-4 w-full text-xl md:text-2xl py-12'>
        <div className='w-5/6 mx-auto'>
          <h2 className='text-[#44d62c] text-2xl md:text-4xl font-bold'>
            THE LATEST AND GREATEST GAMING GEAR
          </h2>
          <p className='text-[#7F7D7F] text-lg md:text-xl'>
            Razer mice, keyboards, headsets, laptops & more
          </p>
        </div>
      </section>
      <section className='store w-full'>
        <div className='w-5/6 mx-auto flex flex-wrap justify-center items-center gap-8 '>
          <Splide
            options={{ rewind: true }}
            aria-label='React Splide Example'
          >
            {products &&
              products.map((product: Product) => (
                <SplideSlide>
                  <StoreCard
                    key={product._id}
                    product={product}
                  />
                </SplideSlide>
              ))}
          </Splide>
        </div>
      </section>
    </main>
  );
}
