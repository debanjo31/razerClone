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
      <p className='text-green-500 capitalize text-lg font-bold mb-3'>
        {product?.name}
      </p>

      <section className='flex flex-col md:flex-row gap-y-28 w-full gap-x-10"'>
        <div className='w-full relative'>
          <div>
            {product?.images && product.images[slideNumber] && (
              <Image
                src={urlFor(product.images[slideNumber])
                  .width(650)
                  .height(650)
                  .url()}
                alt={product.name}
                height='650'
                width='650'
                className='w-full h-[400px] object-contain'
                loading='lazy'
              />
            )}
          </div>
          <div className='absolute left-4 md:left-10 top-10'>
            <div className='my-4 flex flex-col gap-y-4 gap-x-4 items-center'>
              {product?.images &&
                product.images.map((img: string, index: number) => {
                  if (index < 4) {
                    return (
                      <Image
                        src={urlFor(img).width(650).height(650).url()}
                        alt={product.name}
                        height='650'
                        width='650'
                        className='cursor-pointer w-20 h-24 p-2 border border-gray-700 bg-black transition-all ease-in-out duration-300'
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
      </section>
    </div>
  );
};

export default Page;
