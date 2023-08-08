'use client';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import { getProduct } from '@/sanity/sanity-utils';

type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    getProduct(params.slug)
      .then((fetchedProducts) => {
        setProduct(fetchedProducts);
        console.log(product);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);


  return (
    <div className='mt-16 md:mt-[80px] z-10 bg-[#252525]'>
      Page
      <p>Product 1</p>
    </div>
  );
};

export default Page;
