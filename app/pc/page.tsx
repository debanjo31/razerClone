'use client';
import Image from 'next/image';
import { getProducts } from '@/sanity/sanity-utils';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import PcCard from '../componenets/PcCard';

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

  // Filter and map only laptop and desktop products
  const laptopFilteredProducts = products.filter(
    (product) => product.type === 'laptop' || product.type === 'desktop'
  );
  return (
    <main className='mt-16 md:mt-[80px] z-10 bg-[#252525]'>
      <p className='text-center p-2 bg-[#555555] text-white text-md md:text-lg'>
        All orders over US$79 will enjoy free standard shipping to the United
        State
      </p>
      <section className='bg-[#111111] text-[#999] laptop w-full text-2xl py-12 lg:py-16'>
        <div className='w-5/6 text-center mx-auto'>
          <p className='text-[#44d62c] text-4xl lg:text-5xl mb-4 text-center'>
            LAPTOPS & DESKTOPS
          </p>
          <p className='section-text'>
            From cutting-edge gaming and creator laptops to high-end components
            for your dream PC build, Razer systems are meticulously crafted to
            provide the ultimate performance for work and play. Supported by our
            diverse collection of gamer accessories and PC peripherals,
            we&apos;ve got you covered when it comes to your unique gaming or
            office desktop needs.
          </p>
        </div>
      </section>
      <section className='w-full text-2xl py-12'>
        <div className='w-5/6 mx-auto flex flex-wrap justify-center items-center gap-8 '>
          {laptopFilteredProducts.map((product: Product) => (
            <PcCard
              key={product._id}
              product={product}
            />
          ))}
        </div>
      </section>

      <section className='bg-[#111111] text-[#999] laptop w-full text-2xl py-12 lg:py-16'>
        <div className='w-5/6 text-center mx-auto'>
          <p className='text-[#44d62c] text-4xl lg:text-5xl mb-4 text-center'>
            PC & LAPTOP PERIPHERALS
          </p>
          <p>
            The most powerful rigs mean nothing without the best gear to match.
            Gain a competitive edge with PC and laptop peripherals armed with
            our latest technology. From award-winning mice and keyboards to
            industry-leading headsets and monitors, deck out your setup with our
            comprehensive selection of peripherals for gaming and work.
          </p>
        </div>
      </section>
      <section className='bg-[#111111] text-[#999] laptop w-full text-2xl py-12 lg:py-16'>
        <div className='w-5/6 text-center mx-auto'>
          <p className='text-[#44d62c] text-4xl lg:text-5xl mb-4 text-center'>
            CONTENT CREATION & STREAMING
          </p>
          <p>
            Producing quality content requires quality hardware. From
            high-fidelity webcams to professional-grade microphones, deliver the
            best possible streaming experience with our range of content
            creation gear. Whether you're streaming from your gaming desktop or
            laptop, we&apos;ve got everything you need to create content that
            stands out from the rest.
          </p>
        </div>
      </section>
      <section className='bg-[#111111] text-[#999] laptop w-full text-2xl py-12 lg:py-16'>
        <div className='w-5/6 text-center mx-auto'>
          <p className='text-[#44d62c] text-4xl lg:text-5xl mb-4 text-center'>
            SOFTWARE
          </p>
          <p>
            From customizing keybinds and Chroma effects to optimizing audio and
            game performance, Razer's software platforms are designed to enhance
            your gaming and productivity. Seamlessly integrated with our
            extensive collection of gamer accessories and PC peripherals, get
            the most out of our devices and create a single ecosystem for your
            gaming or office desktop
          </p>
        </div>
      </section>
      {laptopFilteredProducts.map((product: Product) => (
        <div
          key={product._id}
          className='mt-2 font-extrabold bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent'
        >
          {product.name}
        </div>
      ))}
    </main>
  );
}
