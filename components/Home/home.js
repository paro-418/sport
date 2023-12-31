import Image from 'next/image';
import React from 'react';
import Sideways from '../Sideways/Sideways';
import Slider from '../Slider/Slider';
import PhotoGallery from '../PhotoGallery/PhotoGallery';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { useInView } from 'react-intersection-observer';
const sidewaysArray = [
  {
    imagePath:
      'https://res.cloudinary.com/sportsite/image/upload/v1692635011/baseball_qyhua6.jpg',
    paragraph:
      'A variety of appetizers to get you started. Apart from the many dishes you could also try a Spicy Mushrooms Saganaki, which has juicy mushrooms cooked in fresh spicy tomato sauce, green herbs,topped with cheddar & feta cheese.',
    subheading: 'cricket',
  },
  {
    imagePath:
      'https://res.cloudinary.com/sportsite/image/upload/v1692635011/baseball_qyhua6.jpg',
    paragraph:
      'A variety of appetizers to get you started. Apart from the many dishes you could also try a Spicy Mushrooms Saganaki, which has juicy mushrooms cooked in fresh spicy tomato sauce, green herbs,topped with cheddar & feta cheese.',
    subheading: 'Parkour',
  },
  {
    imagePath:
      'https://res.cloudinary.com/sportsite/image/upload/v1692635011/baseball_qyhua6.jpg',
    paragraph:
      'A variety of appetizers to get you started. Apart from the many dishes you could also try a Spicy Mushrooms Saganaki, which has juicy mushrooms cooked in fresh spicy tomato sauce, green herbs,topped with cheddar & feta cheese.',
    subheading: 'Horse Riding',
  },
];
const slides = [
  'here is something for everyone who visits whether a quiet late morning or a wild party night. The dazzling views and spectacular live gigs have to be experienced to taste the spirit of Thalassa.',
  'Thalassa is like no other place in Goa. It is a vibrating space with a uniquely Greek-Goan heartbeat.live gigs have to be experienced to taste the spirit. ',
  'Fresh, crisp and wholesome healthy plates. Don’t miss the Horiatiki, its a traditional greek salad with tomatoes, cucumber, onions, green peppers, olive oil, feta cheese topped with fresh oreganos.',
  // Add more slides here
];

const photos = [
  'https://res.cloudinary.com/sportsite/image/upload/v1692635011/baseball_qyhua6.jpg',
  'https://res.cloudinary.com/sportsite/image/upload/v1692635026/rugby_u79g3b.jpg',
  'https://res.cloudinary.com/sportsite/image/upload/v1692635028/rugby2_wsapuk.jpg',
  'https://res.cloudinary.com/sportsite/image/upload/v1692635001/basketball2_enqjqf.jpg',
  'https://res.cloudinary.com/sportsite/image/upload/v1692635011/boating_tjsrmk.jpg',
  'https://res.cloudinary.com/sportsite/image/upload/v1692635021/horseride_adgudf.jpg',
  'https://res.cloudinary.com/sportsite/image/upload/v1692635032/mountain_qtrikk.jpg',
  // Add more photo URLs here
];

const ThemeAndDescription = ({ heading, pngPath, description }) => {
  return (
    <div className='flex flex-col text-center gap-2 justify-center items-center border-[1px] p-4 rounded border-primary bg-white hover:shadow-2xl'>
      <Image src={pngPath} alt={heading} width={100} height={100} />
      <p className='font-bold text-xl'>{heading}</p>
      <p>{description}</p>
    </div>
  );
};

const HomePage = () => {
  const { ref: skiingRef, inView: skiingView } = useInView();
  const { ref: motorraceRef, inView: motorraceView } = useInView();
  const { ref: runnerRef, inView: runnerView } = useInView();
  const { ref: parkorRef, inView: parkorView } = useInView();
  const { ref: horserideRef, inView: horserideView } = useInView();
  return (
    <section>
      <div className=' grid grid-cols-4 relative '>
        <img
          src='https://res.cloudinary.com/sportsite/image/upload/v1692635001/basketball2_enqjqf.jpg'
          className='opacity-100'
        />
        <img
          src='https://res.cloudinary.com/sportsite/image/upload/v1692635012/boxing_nioxdu.jpg'
          className='opacity-100'
        />
        <img
          src='https://res.cloudinary.com/sportsite/image/upload/v1692635026/rugby_u79g3b.jpg'
          className='opacity-100'
        />
        <img
          src='https://res.cloudinary.com/sportsite/image/upload/v1692635011/boating_tjsrmk.jpg'
          className='opacity-100'
        />
        <div className='absolute top-0 left-0 bottom-0 right-0 font-bold text-8xl  text-white '>
          {/* <span>Where Champions rise</span> <span>and dreams takes fly</span> */}
          <div className='flex flex-col justify-center pl-[30rem] pt-[5rem] '>
            <span>Where</span>
            <span>Champions</span>
            <span>Rise.</span>
          </div>
        </div>
      </div>
      <article className='flex flex-col gap-4 m-16 p-8 bg-slate-100'>
        <h1 className='font-bold text-3xl text-primary'>Story of Sports</h1>
        <div className='flex '>
          <div className='flex flex-col gap-8 basis-1/3  font-medium'>
            <p>
              Hugging a bend in Vaddy, Siolim, Thalassa is a beautiful outdoor
              waterfront space that instantly reminds you of the mediterranean.
              Needless to say, Thalassa gets a ringside view to some of the most
              stunning Goan sunsets. visible in every bit of this lovely
              property in white décor.
            </p>
            <p>
              Hugging a bend in Vaddy, Siolim, Thalassa is a beautiful outdoor
              waterfront space that instantly reminds you of the mediterranean.
              Needless to say, Thalassa gets a ringside view to some of the most
              stunning Goan sunsets. Grecian aesthetics and
            </p>
            <p>
              hat instantly reminds you of the mediterranean. Needless to say,
              Thalassa gets a ringside view to some of the most stunning Goan
              sunsets. Grecian aesthetics and hospitality are visible in every
              bit of this lovely property in white décor.
            </p>
          </div>
          <div className='relative basis-[75%] '>
            <Image
              src='https://res.cloudinary.com/sportsite/image/upload/v1692635025/motorrace_ygbg5x.jpg'
              className={`absolute top-[-25%] left-[50%] shadow-lg ${
                motorraceView && 'animate-topToBottom'
              }`}
              alt='sport image'
              width={250}
              height={500}
              loading='eager'
              ref={motorraceRef}
            />
            <Image
              width={300}
              height={600}
              src='https://res.cloudinary.com/sportsite/image/upload/v1692635038/skiing_eitvsu.jpg'
              className={`absolute bottom-[0%] left-[20%]  shadow-lg ${
                skiingView && 'animate-leftToRight'
              }`}
              alt='sport image'
              loading='eager'
              ref={skiingRef}
            />
            <Image
              src='https://res.cloudinary.com/sportsite/image/upload/v1692635040/runner_wptxcn.jpg'
              loading='eager'
              className={`absolute bottom-[10%] right-[5%]  shadow-lg ${
                runnerView && 'animate-rightToLeft'
              }`}
              alt='sport image'
              width={400}
              height={200}
              ref={runnerRef}
            />
          </div>
        </div>
      </article>

      <div className='border-2 border-slate-100 relative mb-28 py-10 overflow-hidden'>
        <Image
          width={350}
          height={700}
          alt='athlete'
          src='https://res.cloudinary.com/sportsite/image/upload/v1692635023/parkor_augo1d.jpg'
          className={`absolute right-[-5%] -top-[0%]  -rotate-12 border-2 shadow-xl origin-bottom-right ${
            parkorView && 'animate-leanLeft'
          }`}
          ref={parkorRef}
        />
        <Image
          width={250}
          height={500}
          alt='athlete'
          src='https://res.cloudinary.com/sportsite/image/upload/v1692635021/horseride_adgudf.jpg'
          className={`absolute bottom-[10%] rotate-12 -left-[1%] shadow-xl origin-bottom-left ${
            horserideView && 'animate-leanRight'
          }`}
          ref={horserideRef}
        />
        <Sideways
          sidewaysArray={sidewaysArray}
          heading='Special Sports'
          className=' border-gray-200 flex flex-col  w-[70%] mx-auto gap-8 text-primary'
          innerSmallDivBasis='basis-[40%]'
          innerLargeDivBasis='basis-[60%]'
          imageDimension={500}
        />
      </div>

      <div className='mt-8 border-y-[1px] border-slate-700 flex py-16 px-44 gap-28 text-primary shadow-lg bg-slate-50'>
        <div className='basis-2/4 flex flex-col gap-6'>
          <h2 className='text-4xl font-bold '>What Makes Thalassa Special?</h2>
          <p>
            Thalassa is like no other place in Goa. It is a vibrating space with
            a uniquely Greek-Goan heartbeat.{' '}
          </p>
          <p>
            There is something for everyone who visits whether a quiet late
            morning or a wild party night. The dazzling views and spectacular
            live gigs have to be experienced to taste the spirit of Thalassa.
          </p>

          <button className='hover:scale-[105%] duration-100 border-2 border-primary rounded-sm font-bold p-2 hover:bg-primary hover:text-white hover:shadow-2xl '>
            Celebrate your Life
          </button>
        </div>
        <div className='grid grid-cols-2 gap-8'>
          <ThemeAndDescription
            pngPath='/icons/sporticon.png'
            description='Authentic Greek cuisine that is just perfect to savour by the gorgeous water front.'
            heading='food'
          />
          <ThemeAndDescription
            pngPath='/icons/sporticon.png'
            description='Authentic Greek cuisine that is just perfect to savour by the gorgeous water front.'
            heading='food'
          />
          <ThemeAndDescription
            pngPath='/icons/sporticon.png'
            description='Authentic Greek cuisine that is just perfect to savour by the gorgeous water front.'
            heading='food'
          />
          <ThemeAndDescription
            pngPath='/icons/sporticon.png'
            description='Authentic Greek cuisine that is just perfect to savour by the gorgeous water front.'
            heading='food'
          />
        </div>
      </div>

      <div className='flex items-center justify-around  my-20 py-8 px-32 '>
        <p className=' text-4xl w-[30%] text-primary font-bold'>
          What our customer thinks &rarr;
        </p>
        <Slider className='flex w-1/2' slides={slides} />
      </div>

      <SubscribeForm />

      <div className='flex flex-col justify-center items-center  '>
        <div className='w-[80%] flex gap-4'>
          <PhotoGallery photos={photos} className='basis-[70%] ' />
          <div className='basis-[70%]  flex flex-col text-primary'>
            <div className='basis-[50%]  flex flex-col justify-center items-center gap-3'>
              <p className='text-2xl font-bold '>Gallery</p>
              <p className='font-bold'>
                Get a glimpse of the incredible experience that is Thalassa.
              </p>
              <button className='hover:scale-[105%] duration-100 text-2xl border-2 hover:text-white border-primary rounded p-2 font-bold hover:bg-primary'>
                follow us
              </button>
            </div>
            <div className='basis-[50%] flex gap-4'>
              <img
                src={photos[6]}
                className='rounded-md hover:scale-[102%] duration-100'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
