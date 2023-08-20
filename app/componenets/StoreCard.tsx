import { Product } from '@/types/Product';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';

interface StoreCardProps {
  product: Product;
  currentProduct: number;
  currentProductId: number;
}

const StoreCard = ({
  product,
  currentProduct,
  currentProductId,
}: StoreCardProps) => {
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }
  return (
    <Link
      href={`/pc/${product.slug}`}
      className='carousel block mt-1 mr-2'
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
          <h5 className='mb-2 text-xl font-bold tracking-tight text-white'>
            {product.name.toUpperCase()}
          </h5>

          <p className='mb-3 font-normal text-[#888]'>
            {product.excerpt &&
              (product.excerpt.length > 25
                ? product.excerpt.slice(0, 45) + '...'
                : product.excerpt)}
          </p>
          <div className='flex justify-between text-white'>
            <p>{product.price && 'US$' + product.price}</p>
            <button className='block text-black bg-[#44d62c] p-1 '>BUY</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default StoreCard;