'use client';
import React, { useState } from 'react';

interface FormProps {
  name: string;
  email: string;
}

const Form = ({ name, email }: FormProps) => {
  const [formMail, setFormEmail] = useState('');
  const [formName, setFormName] = useState('');
  setFormEmail(email);
  setFormName(name);
  return (
    <form>
      <div>
        <label className='block text-sm mb-1 mt-2'>Full Name</label>
        <input
          className='block w-full text-black p-1 bg-white rounded-md focus:outline-none'
          type='text'
          placeholder='please input your name'
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
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
        />
      </div>

      <input
        type='submit'
        value='PAY'
        className='block bg-white text-black mt-8 font-bold px-2 py-4 rounded-md focus:outline-none'
      />
    </form>
  );
};

export default Form;
