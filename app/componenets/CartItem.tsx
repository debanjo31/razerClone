import { Product } from '@/types/Product';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';

import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';

interface CartProps {
  product: Product;
}

const CartItem = ({ product }: CartProps) => {
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }
  return (
    <li className='flex gap-y-10 justify-between items-center border-b border-gray-500 my-10 py-4 w-full'>
      <div className='w-full flex flex-col md:flex-row gap-x-10'>
        <Image
          src={urlFor(product.images[0]).width(450).height(450).url()}
          alt={product.name}
          height='450'
          width='450'
          className='rounded-t-md transition-transform duration-300 hover:scale-105'
        />
        <div className='flex flex-col gap-y-4'>
          <h4 className='text-xl capitalize'>{product.name}</h4>
          <span className='flex items-center gap-x-2'>
            <button className='text-green-500 font-semibold'>
              show details
            </button>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 1024 1024'
              className='text-green-500 cursor-pointer'
              height='1em'
              width='1em'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M862 465.3h-81c-4.6 0-9 2-12.1 5.5L550 723.1V160c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v563.1L255.1 470.8c-3-3.5-7.4-5.5-12.1-5.5h-81c-6.8 0-10.5 8.1-6 13.2L487.9 861a31.96 31.96 0 0 0 48.3 0L868 478.5c4.5-5.2.8-13.2-6-13.2z'></path>
            </svg>
          </span>
        </div>
      </div>
      <div className='md:w-[600px] flex flex-col md:flex-row gap-y-3 gap-x-10 justify-between max-w-full items-center'>
        <div className='flex gap-x-4 items-center'>
          <span className='border w-16 h-14 flex items-center justify-center border-gray-500 rounded-md p-2'>
            {product.quantity}
          </span>
        </div>
        <div>
          <p className='text-2xl'>USD {product.price}</p>
        </div>
      </div>
    </li>
  );
};

export default CartItem;