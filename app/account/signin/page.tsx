import React from 'react';
import { LoginForm } from './form';
import Image from 'next/image';

const page = () => {
  return (
    <main className='section h-max md:h-screen mt-16 relative'>
      <div className='absolute -z-10'>
        <Image
          src='/img/car.webp'
          alt=''
          height='2000'
          width='2000'
          className='text-transparent '
          loading='lazy'
        />
      </div>
      <div className='flex items-center justify-center py-20'>
        <div className='border w-full md:w-[35%]  border-black bg-black text-white p-6'>
          <h1 className='uppercase text-2xl'>Razer Login</h1>
          <div className='my-5 flex flex-col gap-y-4'>
            <input
              type='text'
              placeholder='enter email'
              className='w-full placeholder:uppercase bg-transparent border-gray-700'
            />
            <input
              type='password'
              placeholder='enter password'
              className='w-full placeholder:uppercase bg-transparent border-gray-700'
            />
            <div className='my-5'>
              <button className='w-full uppercase font-bold p-2 bg-[#44d62c]'>
                login
              </button>
            </div>
            <div>
              <p className='text-sm text-center text-gray-400'>
                <span className='font-bold text-red-700'>NOTE</span>email and
                password dont work yet
              </p>
            </div>
            <div className='py-4 '>
              {/* <button className='w-full bg-gray-100 uppercase p-2 text-black font-bold hover:bg-gray-300'>
                Sign in with google
              </button> */}
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
