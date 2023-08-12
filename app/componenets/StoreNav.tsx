import React from 'react';
import Image from 'next/image';

const StoreNav = () => {
  return (
    <section className='storeNav'>
      <div className='flex flex-col '>
        <Image
          src='/img/laptop.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Laptop</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/components.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Componenets</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/mice.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Mice</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/keyboard.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Keyboard</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/audio.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Audio</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/content.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Content Creation</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/chairs.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Chairs</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/console.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Console</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/mobile.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Mobile</p>
      </div>
      <div className='flex flex-col '>
        <Image
          src='/img/gear.png'
          alt='laptop'
          width='100'
          height='75'
        />
        <p>Gear</p>
      </div>
    </section>
  );
};

export default StoreNav;
