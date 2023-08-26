import React from 'react';
import { useCartStore } from '../componenets/store/useCartStore';

const page = () => {
  const { cartItems } = useCartStore();
  return <div>page</div>;
};

export default page;
