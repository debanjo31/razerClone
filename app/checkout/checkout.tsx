'use client';
import React, { useState, useEffect } from 'react';
import { FaStore, FaBiking } from 'react-icons/fa';
import AutoComplete from './address';
import PlacesAutocomplete from './place';
import { PaystackButton } from 'react-paystack';
import { useCartStore } from '../componenets/store/useCartStore';
import useFromStore from '../hook/useFromStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

interface FormProps {
  name: string;
  email: string;
}
const Form = ({ name, email }: FormProps) => {
  const [formMail, setFormEmail] = useState('');
  const [formName, setFormName] = useState('');
  const [formPhone, setFromPhone] = useState('');
  const [formaddress, setFormadress] = useState('');
  const [devliveryOption, setdevliveryOption] = useState('bike');

  // const toggleTab = (tabName: string) => {
  //   setdevliveryOption(devliveryOption === tabName ? '' : tabName);
  // };

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
  const clearCart = () => {
    cart?.map((product) => removeFromCart(product));
  };
  const componentProps = {
    email: formMail,
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
      clearCart();
      router.push('/store');
      resetForm();
    },
    onClose: () => alert('Wait! You sure you are not ready to buy these!!!!'),
  };

  return (
    <div className='w-full'>
      <form>
        <p className='font-bold text-lg mb-2'>1. Contact Information</p>
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
        <p className='font-bold text-lg mt-8 mb-2'>2. Delivery Method</p>
        <div className='flex gap-2'>
          <button
            onClick={() => setdevliveryOption('store')}
            className={
              devliveryOption === 'store'
                ? 'block p-2 bg-white text-black'
                : 'bg-gray-500 text-black'
            }
          >
            Store <FaStore className='h-5 w-5' />
          </button>
          <button
            onClick={() => setdevliveryOption('bike')}
            className={
              devliveryOption === 'bike'
                ? 'block p-2 bg-white text-black'
                : 'bg-gray-500 text-black'
            }
          >
            Delivery <FaBiking className='h-5 w-5' />
          </button>
        </div>
      </div>
      <div>
        <PaystackButton
          className='paystack-button bg-[#44d62c] text-white p-2'
          {...componentProps}
        />
      </div>
    </div>
  );
};

export default Form;
