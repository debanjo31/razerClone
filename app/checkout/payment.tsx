"use client"
import React, { useState } from 'react';
import { PaystackButton } from 'react-paystack';


const Paystack = () => {
  const publicKey = process.env.PAYSTACK_ID as string;
  const amount = 1000000;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const resetForm = () => {
    setEmail('');
    setName('');
    setPhone('');
  };

  const componentProps = {
    email,
    amount,
    metadata: {
      name,
      phone,
      custom_fields: [], // Add an empty array for custom_fields
    },
    publicKey,
    text: 'Buy Now',
    onSuccess: ({ reference }: { reference: any }) => {
      alert(
        `Your purchase was successful! Transaction reference: ${reference}`
      );
      resetForm();
    },
    onClose: () => alert("Wait! You need this oil, don't go!!!!"),
  };

  return (
    <div className='Paystack'>
      <div className='container'>
        <div className='item'>
          <div className='overlay-effect'></div>
          <img
            className='item-image'
            src='https://images.unsplash.com/photo-1526947425960-945c6e72858f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80'
            alt='product'
          />
          <div className='item-details'>
            <p className='item-details__title'>Coconut Oil</p>
            <p className='item-details__amount'>NGN {amount / 100}</p>
          </div>
        </div>
        <div className='checkout'>
          <div className='checkout-form'>
            <div className='checkout-field'>
              <label>Name</label>
              <input
                type='text'
                id='name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className='checkout-field'>
              <label>Email</label>
              <input
                type='text'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='checkout-field'>
              <label>Phone</label>
              <input
                type='text'
                id='phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <PaystackButton
              className='paystack-button bg-white text-black p-2'
              {...componentProps}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Paystack;
