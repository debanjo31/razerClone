'use client';

import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import { getProduct } from '@/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url';
import config from '@/sanity/config/client-config';
type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const [product, setProduct] = useState<Product | null>(null);
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProducts = await getProduct(params.slug);
        console.log('started');
        setProduct(fetchedProducts);
        console.log(fetchedProducts);
        console.log('ended');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='mt-16 md:mt-[80px] z-10 bg-[#252525]'>
      <p>{product?.name}</p>
      <section className='carousel'></section>
    </div>
  );
};

export default Page;
