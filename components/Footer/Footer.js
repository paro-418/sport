import React from 'react';

const Footer = () => {
  return (
    <footer className='w-full bg-primary mt-16 pb-16 flex flex-col justify-center items-center gap-8 text-white'>
      <div className='flex flex-col'>
        <img
          src='https://res.cloudinary.com/sportsite/image/upload/v1692635021/logo_qrnoos.png'
          alt='logo'
          className='invert w-[10rem] cursor-pointer'
        />
      </div>
      <p className='w-1/2 text-center'>
        Surrender to the rhythm and pulse of Thalassa and become part of an
        incredible experience, one you absolutely have to try.
      </p>

      <div className='flex flex-col justify-center items-center'>
        <span className='text-xl font-bold'>For General Enquires</span>
        <span>thalassagreektaverna@gmail.com</span>
      </div>

      <div className='flex gap-20'>
        <div className='flex flex-col'>
          <span>Name</span>
          <span>+91 93383083209</span>
        </div>
        <div className='flex flex-col'>
          <span>Name</span>
          <span>+91 93383083209</span>
        </div>
        <div className='flex flex-col'>
          <span>Name</span>
          <span>+91 93383083209</span>
        </div>
      </div>
      <div className='flex  gap-2 items-center'>
        <img
          src='/icons/instagram.png'
          className='invert w-[3rem] cursor-pointer hover:scale-95'
        />
        <img
          src='/icons/facebook.png'
          className='invert w-[3rem] cursor-pointer hover:scale-95'
        />
      </div>
    </footer>
  );
};

export default Footer;
