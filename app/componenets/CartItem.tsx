import { Product } from '@/types/Product';
import { FaTrashAlt } from 'react-icons/fa';

interface CartProps {
  product: Product;
}

const CartItem = ({ product }: CartProps) => {
  return <li>CartItem</li>;
};

export default CartItem;
