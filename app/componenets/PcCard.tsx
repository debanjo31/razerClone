import Link from 'next/link';
import React from 'react';

const PcCard = (product: any) => {
  return (
    <Link
      href={'/'}
      className='block mt-1'
    >
      {product.name}
    </Link>
  );
};

export default PcCard;
