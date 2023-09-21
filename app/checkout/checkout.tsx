const Form = () => {
  return (
    <form>
      <div>
        <label className='block text-sm mb-1 mt-2'>Full Name</label>
        <input
          className='block w-full text-black p-1 bg-white rounded-md focus:outline-none'
          type='text'
          placeholder='please input your name'
        />
      </div>
      <div>
        <label className='block text-sm mb-1 mt-2'>Email</label>
        <input
          className='block w-full text-black p-1 bg-white rounded-md focus:outline-none'
          type='email'
          placeholder='please input your mail'
        />
      </div>

      <input
        type='submit'
        value='Sign Up'
        className='block w-full bg-white text-black mt-8 font-bold p-1 rounded-md focus:outline-none'
      />
      <small className='block mt-2 text-gray-500 text-center'>
        By signing up you agree to our Terms of Use and Privacy Policy
      </small>
    </form>
  );
};

export default Form;
