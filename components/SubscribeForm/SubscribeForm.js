import React from 'react';

const SubscribeForm = () => {
  return (
    <div className='flex justify-around my-20 bg-primary text-white py-14'>
      <div className='w-[30%] flex flex-col gap-2'>
        <p className='text-4xl font-bold'>Stay Connected</p>
        <p>
          would you like to be updated about events and special occasions? Hit
          the subscribe button and stay tunned
        </p>
      </div>
      <div className='w-[40%] flex flex-col gap-4 '>
        <input
          type='text'
          className='w-full p-2 rounded text-black text-xl'
          placeholder='abc@gmail.com'
        />

        <button className='text-xl font-bold px-3 border-2 border-white w-fit text-white  rounded p-2 hover:bg-white hover:text-primary '>
          subscribe now
        </button>
      </div>
    </div>
  );
};

export default SubscribeForm;
