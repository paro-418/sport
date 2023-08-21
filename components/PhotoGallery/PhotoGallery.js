// src/components/PhotoGallery.js
import React from 'react';

const PhotoGallery = ({ photos, className }) => {
  return (
    <div class={className}>
      <div class='-m-1 flex flex-wrap md:-m-2'>
        <div class='flex w-1/2 flex-wrap'>
          <div class='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              class='block h-full w-full rounded-lg object-cover object-center'
              src={photos[0]}
            />
          </div>
          <div class='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              class='block h-full w-full rounded-lg object-cover object-center'
              src={photos[1]}
            />
          </div>
          <div class='w-full p-1 md:p-2'>
            <img
              alt='gallery'
              class='block h-full w-full rounded-lg object-cover object-center'
              src={photos[2]}
            />
          </div>
        </div>
        <div class='flex w-1/2 flex-wrap'>
          <div class='w-full p-1 md:p-2'>
            <img
              alt='gallery'
              class='block h-full w-full rounded-lg object-cover object-center'
              src={photos[3]}
            />
          </div>
          <div class='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              class='block h-full w-full rounded-lg object-cover object-center'
              src={photos[4]}
            />
          </div>
          <div class='w-1/2 p-1 md:p-2'>
            <img
              alt='gallery'
              class='block h-full w-full rounded-lg object-cover object-center'
              src={photos[5]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
