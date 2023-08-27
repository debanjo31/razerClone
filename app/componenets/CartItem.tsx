import { Product } from '@/types/Product';
import { FaTrashAlt } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useCartStore } from './store/useCartStore';
import imageUrlBuilder from '@sanity/image-url';
import config from '../../sanity/config/client-config';

interface CartProps {
  product: Product;
}

const CartItem = ({ product }: CartProps) => {
  const { removeFromCart, addToCart } = useCartStore();
  const builder = imageUrlBuilder(config);

  function urlFor(source: string) {
    return builder.image(source);
  }
  return (
    <li className='flex gap-y-10 justify-between items-center border-b border-gray-500 my-10 py-4 w-full'>
      <div className='w-full flex flex-col md:flex-row gap-x-10'>
        <Image
          src={urlFor(product.images[0]).width(250).height(250).url()}
          alt={product.name}
          height='128'
          width='128'
          className='rounded-md w-32 h-32 object-contain transition-transform duration-300 hover:scale-105 mb-2'
        />
        <div className='flex flex-col gap-y-4'>
          <h4 className='text-xl capitalize'>{product.name}</h4>
          <span className='flex items-center gap-x-2'>
            <Link
              href={`/pc/${product.slug}`}
              className='text-[#44d62c] font-semibold'
            >
              show details
            </Link>
            <svg
              stroke='currentColor'
              fill='currentColor'
              stroke-width='0'
              viewBox='0 0 1024 1024'
              className='text--[#44d62c] cursor-pointer'
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
          <button
            title='Remove Item'
            className='text-red-500 hover:text-red-600 ml-4'
            onClick={() => removeFromCart(product)}
          >
            <FaTrashAlt size={18} />
          </button>
          <span className='border w-16 h-14 flex items-center justify-center border-gray-500 rounded-md p-2'>
            {product.quantity}
          </span>
          <span
            className='cursor-pointer'
            onClick={() => addToCart(product)}
          >
            +
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