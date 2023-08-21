import Image from 'next/image';
import React from 'react';

const Sideways = ({
  heading,
  sidewaysArray = [{ subheading: '', paragraph: '', imagePath: '' }],
  className,
  innerSmallDivBasis,
  innerLargeDivBasis,
  imageDimension,
}) => {
  return (
    <div className={className}>
      <h2 className='text-4xl text-primary font-extrabold  pb-4 pl-4 '>
        {heading ? heading : ''}
      </h2>
      {/* {sidewaysArray.length} */}
      {sidewaysArray.map((items, index) => (
        <div
          className={`flex ${index % 2 === 0 && 'flex-row-reverse '} `}
          key={items.subheading}
        >
          <div className={innerSmallDivBasis}></div>
          <div
            className={`${innerLargeDivBasis} flex items-center gap-8 shadow-md p-4  ${
              index % 2 === 0 && 'flex-row-reverse'
            }`}
          >
            <span className='basis-[70%]'>
              <h3 className='font-bold text-xl '>{items.subheading}</h3>
              <p>{items.paragraph}</p>
            </span>
            <div className='basis-[30%] shadow-2xl overflow-hidden'>
              <Image
                alt={items.subheading}
                src={items.imagePath}
                width={imageDimension}
                height={imageDimension}
                // className=' shadow-2xl'
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sideways;
