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
  const [slideNumber, setslideNumber] = useState(0);
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
      <p className='text-[#44d62c] capitalize text-lg font-bold mb-4 md:hidden w-5/6 mx-auto'>
        {product?.name}
      </p>
      <section className='mb-12 md:flex md:w-5/6 mx-auto'>
        <div className='w-full relative md:w-4/6'>
          <div>
            {product?.images && product.images[slideNumber] && (
              <Image
                src={urlFor(product.images[slideNumber])
                  .width(500)
                  .height(500)
                  .url()}
                alt={product.name}
                height='450'
                width='450'
                className='w-full h-[450px] object-contain'
                loading='lazy'
              />
            )}
          </div>
          <div className='absolute left-4 md:left-10 top-10'>
            <div className='flex flex-col gap-y-2 gap-x-2 items-center'>
              {product?.images &&
                product.images.map((img: string, index: number) => {
                  if (index < 4) {
                    return (
                      <Image
                        src={urlFor(img).width(450).height(450).url()}
                        alt={product.name}
                        height='450'
                        width='450'
                        className={`cursor-pointer w-24 h-24 p-2 border border-gray-800 transition-all ease-in-out duration-300 ${
                          index === slideNumber ? 'border-active ' : ''
                        }`}
                        loading='lazy'
                        onClick={() => setslideNumber(index)}
                      />
                    );
                  }
                  return null;
                })}
            </div>
          </div>
        </div>
        <div className='flex flex-col justify-between gap-4 mt-8'>
          <p className='text-[#44d62c] capitalize text-lg font-bold mb-4 hidden md:block'>
            {product?.name}
          </p>
          <p className='text-sm text-gray-300'>{product?.excerpt}</p>
          <p className='text-lg text-white'>{product?.price}</p>
        </div>
      </section>
      <section></section>
    </div>
  );
};

export default Page;
