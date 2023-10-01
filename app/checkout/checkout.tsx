'use client';
import React, { useState, useEffect } from 'react';
import { FaStore, FaBiking } from 'react-icons/fa';
import { useCartStore } from '../componenets/store/useCartStore';
import useFromStore from '../hook/useFromStore';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import { useOrderStore } from '../componenets/store/orderStore';
import { usePaystackPayment } from 'react-paystack';


interface FormProps {
  name: string;
  email: string;
}
const Form = ({ name, email }: FormProps) => {
  const [formMail, setFormEmail] = useState('');
  const [formName, setFormName] = useState('');
  const [formPhone, setFromPhone] = useState('');
  const [formaddress, setFormadress] = useState('');
  const { addToOrder } = useOrderStore();
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
  const completeOrder = () => {
    cart?.map((product) => {
      addToOrder(product);
    });
  };
  const session = useSession();
  const router = useRouter();

  const shippingFee = Math.floor(Math.random() * 100);
  let amount = 0;
  if (devliveryOption == 'bike') {
    amount = Math.round(total + shippingFee);
  } else {
    amount = Math.round(total);
  }
  console.log(amount);
  console.log(typeof amount);
  const resetForm = () => {
    setFormEmail('');
    setFormName('');
    setFromPhone('');
    setFormadress('');
  };
  const clearCart = () => {
    cart?.map((product) => removeFromCart(product));
  };

  const config = {
    reference: new Date().getTime.toString(),
    email: formMail,
    amount: amount * 100000,
    publicKey: 'pk_test_96989a80f4367bf52f418c928b2723d57ad443bf',
  };

  const initializePayment = usePaystackPayment(config);
  const checkoutFunc = () => {
    initializePayment(onSuccess, onClose);
  };

  const onSuccess = () => {
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
    completeOrder();
    clearCart();
    router.push('/order');
    resetForm();
  };

  const onClose = () => {
    alert(
      'Are you really sure you dont want to buy this amazing products now?'
    );
  };
  return (
    <div className='w-5/6 mx-auto'>
      <form>
        <p className='font-bold text-lg mb-2'>1. Contact Information</p>
        <div>
          <label className='block text-sm mb-1 mt-2'>Full Name</label>
          <input
            className='block w-full text-black p-2 bg-white rounded-md focus:outline-none'
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
            className='block w-full text-black p-2 bg-white rounded-md focus:outline-none'
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
            className='block w-full text-black p-2 bg-white rounded-md focus:outline-none'
            type='number'
            placeholder='please input your phone number'
            value={formPhone}
            onChange={(e) => setFromPhone(e.target.value)}
            required
          />
        </div>
        <div>
          <label className='block text-sm mb-1 mt-2'>Address</label>
          <input
            className='block w-full text-black p-2 bg-white rounded-md focus:outline-none'
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
                ? 'block p-2 bg-white text-black w-2/6 rounded-sm'
                : 'bg-gray-500 text-black w-2/6 rounded-sm'
            }
          >
            Store <FaStore className='h-5 w-5 inline-block' />
          </button>
          <button
            onClick={() => setdevliveryOption('bike')}
            className={
              devliveryOption === 'bike'
                ? 'block p-2 bg-white text-black w-2/6 rounded-sm'
                : 'bg-gray-500 text-black w-2/6 rounded-sm'
            }
          >
            Delivery <FaBiking className='h-5 w-5 inline-block' />
          </button>
        </div>
      </div>
      <div className='checkout mt-12 mb-4 text-lg'>
        <hr className='bg-gray-500' />
        <div className='flex justify-between mt-4 mb-4'>
          <p className='text-gray-300'>SUBTOTAL (CART)</p>
          <p>US${total}</p>
        </div>
        <div className='flex justify-between mb-4'>
          <p className='text-gray-300'>SHIPPING</p>
          <p>{devliveryOption == 'bike' ? `US$ ${shippingFee}` : 'Free'}</p>
        </div>
        <hr className='bg-gray-200' />
        <div className='flex justify-between font-bold mt-4'>
          <p>TOTAL</p>
          <p>US ${amount}</p>
        </div>
      </div>
      <div>
        <button
          className='block text-black bg-[#44d62c] py-2 px-8 rounded-sm '
          onClick={checkoutFunc}
        >
          BUY
        </button>
      </div>
      <ToastContainer
        position='top-right'
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
};

export default Form;
