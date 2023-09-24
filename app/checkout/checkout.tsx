'use client';
import React, { useState, useEffect } from 'react';
import AutoComplete from './address';
interface FormProps {
  name: string;
  email: string;
}
import PlacesAutocomplete from './place';
import { PaystackButton } from 'react-paystack';
import { useCartStore } from '../componenets/store/useCartStore';
import useFromStore from '../hook/useFromStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

const Form = ({ name, email }: FormProps) => {
  const [formMail, setFormEmail] = useState('');
  const [formName, setFormName] = useState('');
  const [formPhone, setFromPhone] = useState('');
  const [formaddress, setFormadress] = useState('');
  useEffect(() => {
    setFormEmail(email);
    setFormName(name);
  }, [email, name]);
  const cart = useFromStore(useCartStore, (state) => state.cart);
  const { removeFromCart } = useCartStore();
  let total = 0;
  if (cart) {
    total = cart.reduce(
      (acc, product) => acc + product.price * (product.quantity as number),
      0
    );
  }
  const session = useSession();
  const router = useRouter();
  const publicKey = 'pk_test_96989a80f4367bf52f418c928b2723d57ad443bf';
  const amount = total;
  const resetForm = () => {
    setFormEmail('');
    setFormName('');
    setFromPhone('');
    setFormadress('');
  };
  const componentProps = {
    email,
    amount,
    metadata: {
      formName,
      formPhone,
      custom_fields: [], // Add an empty array for custom_fields
    },
    publicKey,
    text: 'Buy Now',
    onSuccess: ({ reference }: { reference: any }) => {
      toast.success('Purchased Successfully', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      router.push('/store');
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div>
      <form>
        <p>1. Contact Information</p>
        <div>
          <label className='block text-sm mb-1 mt-2'>Full Name</label>
          <input
            className='block w-full text-black p-1 bg-white rounded-md focus:outline-none'
            type='text'
            placeholder='please input your name'
            value={formName}
            onChange={(e) => setFormName(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block text-sm mb-1 mt-2'>Email</label>
          <input
            className='block w-full text-black p-1 bg-white rounded-md focus:outline-none'
            type='email'
            placeholder='please input your mail'
            value={formMail}
            onChange={(e) => setFormEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block text-sm mb-1 mt-2'>Phone Nuber</label>
          <input
            className='block w-full text-black p-1 bg-white rounded-md focus:outline-none'
            type='number'
            placeholder='please input your phone number'
            value={formPhone}
            onChange={(e) => setFromPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block text-sm mb-1 mt-2'>Address</label>
          {/* <AutoComplete />
        <PlacesAutocomplete /> */}
          <input
            className='block w-full text-black p-1 bg-white rounded-md focus:outline-none'
            type='email'
            placeholder='Enter a location'
            value={formaddress}
            onChange={(e) => setFormadress(e.target.value)}
            required
          />
        </div>
      </form>
      <div className='delivery'>
        <p>Delivery Method</p>
        <div className='flex gap-2'>
          <button className='block'>Store</button>
          <button className='block'>Delivery</button>
        </div>
      </div>
      <div>
        {/* <input
          type='submit'
          value='PAY'
          className='block w-full bg-white text-black mt-8 font-bold px-2 py-4 rounded-md focus:outline-none'
        /> */}
        <PaystackButton
          className='paystack-button bg-[#44d62c] text-white p-2'
          {...componentProps}
        />
      </div>
    </div>
  );
};

export default Form;
