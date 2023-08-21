import Image from 'next/image';
import React from 'react';

const Sideways = ({
  heading,
  sidewaysArray = [{ subheading: '', paragraph: '', imagePath: '' }],
  className,
}) => {
  return (
    <div className={className}>
      <h2 className='text-4xl text-primary font-extrabold  pb-4 pl-4 '>
        {heading}
      </h2>
      {/* {sidewaysArray.length} */}
      {sidewaysArray.map((items, index) => (
        <div
          className={`flex ${index % 2 === 0 && 'flex-row-reverse '} `}
          key={items.subheading}
        >
          <div className='basis-[40%]'></div>
          <div
            className={`basis-[60%] flex items-center gap-8 shadow-md p-4  ${
              index % 2 === 0 && 'flex-row-reverse'
            }`}
          >
            <span className='basis-[70%]'>
              <h3 className='font-bold text-xl '>{items.subheading}</h3>
              <p>{items.paragraph}</p>
            </span>
            <div className='basis-[30%] shadow-2xl'>
              <Image
                alt={items.subheading}
                src={items.imagePath}
                width={500}
                height={500}
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
