'use client';
import Image from 'next/image';
import { Product } from '@/types/Product';
import { useEffect, useState } from 'react';
import { getProduct } from '@/sanity/sanity-utils';
import imageUrlBuilder from '@sanity/image-url';
import config from '@/sanity/config/client-config';
import { useCartStore } from '@/app/componenets/store/useCartStore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
type Props = {
  params: { slug: string };
};

const Page = ({ params }: Props) => {
  const { addToCart } = useCartStore();
  const [product, setProduct] = useState<Product | null>(null);
  const [slideNumber, setslideNumber] = useState(0);
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedProduct = await getProduct(params.slug);
        console.log('started');
        setProduct(fetchedProduct);
        console.log(fetchedProduct);
        console.log('ended');
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const addToCartFunc = () => {
    if (product !== null) {
      addToCart(product);
      toast.success('Added to cart', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div className='mt-16  z-10 bg-black relative'>
      <div className='fixed w-full md:w-5/6 md:mx-auto top-[64px] bg-black left-0 flex justify-between z-20  h-16  p-2 md:px-4'>
        <p className='text-[hsl(112,67%,51%)] mt-2 capitalize text-md md:text-lg font-bold mb-2  '>
          {product?.name}
        </p>
        <button
          className='block text-black bg-[#44d62c] p-2 px-4 rounded-sm '
          onClick={addToCartFunc}
        >
          BUY
        </button>
      </div>
      <section className='my-12 mt-16 py-4 md:flex md:w-5/6 mx-auto'>
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
          <div className='absolute left-4 md:left-10 top-10 md:top-8'>
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
        <div className='flex flex-col justify-between gap-4 mt-8 w-5/6 md:w-2/6 mx-auto'>
          <p className='text-[#44d62c] capitalize text-lg lg:text-xl font-bold mb-4 hidden md:block'>
            {product?.name}
          </p>
          <p className='text-sm lg:text-md text-gray-300'>{product?.excerpt}</p>
          <p className='text-lg lg:text-xl text-white'>USD${product?.price}</p>
        </div>
      </section>
      <section></section>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default Page;
