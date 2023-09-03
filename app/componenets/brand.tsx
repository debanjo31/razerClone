import React from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';

interface BrandProps {
  name: string;
  words: string;
  img: string;
}

const Brand = ({ name, words, img }: BrandProps) => {
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }
  return (
    <div className='flex flex-col text-center justify-center mb-2'>
      <Image
        src={urlFor(img).width(450).height(450).url()}
        alt={name}
        height='450'
        width='450'
        className='w-36 h-36 block my-4'
      />
      <p className='text-center text-white font-bold my-2'>"{words}"</p>
      <p className='text-gray-500 text-sm'>{name}</p>
    </div>
  );
};

export default Brand;
