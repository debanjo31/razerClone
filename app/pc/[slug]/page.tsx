'use client';
import Image from 'next/image';
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
    <div className='mt-16  z-10 bg-[#252525]'>
      <p>{product?.name}</p>
      <p>{product?.slug}</p>
      <p>{product?.price}</p>
      <section className='carousel'>
        {product?.images && (
          <Image
            src={urlFor(product.images[0]).width(650).height(650).url()}
            alt={product.name}
            height='650'
            width='650'
            className=''
          />
        )}
      </section>
    </div>
  );
};

export default Page;
