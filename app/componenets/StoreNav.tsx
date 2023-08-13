import React from 'react';
import Image from 'next/image';

const StoreNav = () => {
  return (
    <section className='storeNav px-2 py-4 gap-4 lg:w-5/6 mx-auto'>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/laptop.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Laptop</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/components.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Componenets</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/mice.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Mice</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/keyboard.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Keyboard</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/audio.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Audio</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/content.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Content Creation</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/chairs.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Chairs</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/console.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Console</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/mobile.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Mobile</p>
      </div>
      <div className='flex flex-col h-36 w-36 relative '>
        <div className='relative'>
          <Image
            src='/img/gear.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p>Gear</p>
      </div>
    </section>
  );
};

export default StoreNav;
