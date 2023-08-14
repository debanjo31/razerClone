import React from 'react';
import Image from 'next/image';

const StoreNav = () => {
  return (
    <section className='storeNav mt-2 gap-8 lg:w-5/6 mx-auto'>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/laptop.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Laptop</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/components.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Componenets</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/mice.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Mice</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/keyboard.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Keyboard</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/audio.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Audio</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/content.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Content Creation</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/chairs.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Chairs</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/console.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Console</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/mobile.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Mobile</p>
      </div>
      <div className='flex flex-col h-24 w-24 relative '>
        <div className='relative text-center'>
          <Image
            src='/img/gear.png'
            alt='laptop'
            style={{ objectFit: 'contain' }}
            fill={true}
          />
        </div>
        <p className="text-center">Gear</p>
      </div>
    </section>
  );
};

export default StoreNav;
