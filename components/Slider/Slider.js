import React, { useState } from 'react';



const Slider = ({ className, slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className={className}>
      <div className=' p-6 border border-gray-300 rounded-lg shadow-md flex items-center gap-8 '>
        {/* <div className='flex justify-between'> */}
        <button
          onClick={goToPreviousSlide}
          className='px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none'
        >
          Prev
        </button>
        <div className='text-center mb-4'>{slides[currentSlide]}</div>
        <button
          onClick={goToNextSlide}
          className='px-4 py-2 text-white bg-primary rounded-lg hover:bg-blue-600 focus:outline-none'
        >
          Next
        </button>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Slider;
