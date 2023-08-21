// src/components/PhotoGallery.js
import React from 'react';

const PhotoGallery = ({ photos, className }) => {
  return (
    <div className={className}>
      <div className='-m-1 flex flex-wrap md:-m-2'>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-[102%] duration-100'
              src={photos[0]}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-[102%] duration-100'
              src={photos[1]}
            />
          </div>
          <div className='w-full p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-[102%] duration-100'
              src={photos[2]}
            />
          </div>
        </div>
        <div className='flex w-1/2 flex-wrap'>
          <div className='w-full p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-[102%] duration-100'
              src={photos[3]}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-[102%] duration-100'
              src={photos[4]}
            />
          </div>
          <div className='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              className='block h-full w-full rounded-lg object-cover object-center hover:scale-[102%] duration-100'
              src={photos[5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
