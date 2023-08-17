import { Product } from '@/types/Product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';
interface PcCardProps {
  product: Product;
}

const PcCard = ({ product }: PcCardProps) => {
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }
  return (
    <Link
      href={`/pc/${product.slug}`}
      className='block mt-1 md:h-[75vh]'
    >
      <div className='h-full max-w-md md:max-w-sm  rounded-md shadow bg-[#111111] border-b-2 border-[#44d62c]'>
        <Image
          src={urlFor(product.images[0]).width(450).height(450).url()}
          alt={product.name}
          height='450'
          width='450'
          className='rounded-t-md transition-transform duration-300 hover:scale-105'
        />
        <div className='p-5'>
          <h5 className='mb-2 text-lg font-bold tracking-tight text-white'>
            {product.name.toUpperCase()}
          </h5>

          <p className='mb-3 font-normal text-[#888] text-sm'>
            {product.excerpt &&
              (product.excerpt.length > 25
                ? product.excerpt.slice(0, 45) + '...'
                : product.excerpt)}
          </p>
          <p className='inline-flex items-center px-3 py-2 text-xs font-medium text-center text-[#44d62c] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Check it out
            <svg
              className='w-3.5 h-3.5 ml-2'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default PcCard;
