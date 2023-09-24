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

const OrderItem = ({ product }: CartProps) => {
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
      </div>
      <div className='md:w-[600px] flex flex-col md:flex-row gap-y-3 gap-x-10 justify-between max-w-full items-center'>
        <h4 className='text-md capitalize'>{product.name}</h4>
        <div className='text-sm text-gray-300'>
          Order {Math.floor(Math.random() * 2584726)}
        </div>
      </div>
    </li>
  );
};

export default OrderItem;
