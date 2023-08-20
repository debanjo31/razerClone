'use client';
import { getProducts } from '@/sanity/sanity-utils';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import StoreCard from '../componenets/StoreCard';
import StoreNav from '../componenets/StoreNav';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import Image from 'next/image';

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
  const [currentProduct, setcurrentProduct] = useState(0);
  let currentProductId = 0;
  const handleNext = () => {
    currentProduct === products.length - 1
      ? setcurrentProduct(0)
      : setcurrentProduct(currentProduct + 1);
  };
  const handlePrev = () => {
    currentProduct === 0
      ? setcurrentProduct(products.length - 1)
      : setcurrentProduct(currentProduct - 1);
  };
  return (
    <main className='mt-16 z-10 bg-black'>
      <p className='text-center p-2 bg-[#555555] text-white text-md'>
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
        <div className='w-5/6 mx-auto flex flex-wrap justify-center items-center gap-8 pb-8'>
          <div className='hidden lg:flex relative md:gap-2'>
            {products && (
              <FaChevronLeft
                onClick={handleNext}
                className=' absolute left-0 bottom-2/4 z-20  text-[#44d62c] text-2xl'
              />
            )}
            {products &&
              products.map((product: Product, index) => {
                if (
                  index === currentProduct ||
                  index === currentProduct + 1 ||
                  index === currentProduct + 2
                ) {
                  return (
                    <StoreCard
                      key={product._id}
                      product={product}
                      currentProduct={currentProduct}
                      currentProductId={index}
                    />
                  );
                }
                return null;
              })}
            {products && (
              <FaChevronRight
                onClick={handlePrev}
                className=' absolute right-0 bottom-2/4 z-20 text-[#44d62c] text-2xl'
              />
            )}
          </div>
          <div className='hidden md:flex relative md:gap-2'>
            {products && (
              <FaChevronLeft
                onClick={handleNext}
                className=' absolute left-0 bottom-2/4 z-20  text-[#44d62c] text-2xl'
              />
            )}
            {products &&
              products.map((product: Product, index) => {
                if (index === currentProduct || index === currentProduct + 1) {
                  return (
                    <StoreCard
                      key={product._id}
                      product={product}
                      currentProduct={currentProduct}
                      currentProductId={index}
                    />
                  );
                }
                return null;
              })}
            {products && (
              <FaChevronRight
                onClick={handlePrev}
                className=' absolute right-0 bottom-2/4 z-20 text-[#44d62c] text-2xl'
              />
            )}
          </div>
          <div className='flex md:hidden relative md:gap-2'>
            {products && (
              <FaChevronLeft
                onClick={handleNext}
                className=' absolute left-0 bottom-2/4 z-20  text-[#44d62c] text-2xl'
              />
            )}
            {products &&
              products.map((product: Product, index) => {
                if (index === currentProduct) {
                  return (
                    <StoreCard
                      key={product._id}
                      product={product}
                      currentProduct={currentProduct}
                      currentProductId={index}
                    />
                  );
                }
                return null;
              })}
            {products && (
              <FaChevronRight
                onClick={handlePrev}
                className=' absolute right-0 bottom-2/4 z-20 text-[#44d62c] text-2xl'
              />
            )}
          </div>
        </div>
      </section>
      <section className='buyFeatures pb-12 text-center mt-8'>
        <p className='text-center text-[#44d62c] text-2xl md:text-4xl font-bold mb-8'>
          WHY BUY FROM RAZER.COM
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8 w-5/6 mx-auto'>
          <div className='flex flex-col justify-center items-center gap-2 text-center md:max-w-[350px]'>
            <Image
              src='/img/dibs.svg'
              alt='feature'
              height='65'
              width='65'
            />
            <p className='text-lg text-white'>Get First Dibs</p>
            <p className='text-[#7F7D7F] text-md'>
              Razer.com is the only place where you can buy our most anticipated
              Razer gear immediately upon release
            </p>
          </div>

          <div className='flex flex-col justify-center items-center gap-2 text-center md:max-w-[350px]'>
            <Image
              src='/img/gearArray.svg'
              alt='feature'
              height='65'
              width='65'
            />
            <p className='text-lg text-white'>
              The Largest Array Of Razer Gear
            </p>
            <p className='text-[#7F7D7F] text-md'>
              As Razer’s official online store, we hold a massive collection of
              products that can’t be matched anywhere else.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 text-center md:max-w-[350px]'>
            <Image
              src='/img/gearSwag.svg'
              alt='feature'
              height='65'
              width='65'
            />
            <p className='text-lg text-white'>Exclusive Razer Gear And Swag</p>
            <p className='text-[#7F7D7F] text-md'>
              Get access to limited edition Razer gear that’s only available on
              Razer.com.
            </p>
          </div>
          <div className='flex flex-col justify-center items-center gap-2 text-center md:max-w-[350px]'>
            <Image
              src='/img/pay.svg'
              alt='feature'
              height='65'
              width='65'
            />
            <p className='text-lg text-white'>Play Now, Pay Later</p>
            <p className='text-[#7F7D7F] text-md'>
              With our 0% installment plan, spend more time gaming with your
              sweet new gear and less time fussing over payment.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
