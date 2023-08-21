import Image from 'next/image';
import React from 'react';
import Sideways from '../Sideways/Sideways';
import Slider from '../Slider/Slider';
import SubscribeForm from '../SubscribeForm/SubscribeForm';
import { useInView } from 'react-intersection-observer';

const slides = [
  'here is something for everyone who visits whether a quiet late morning or a wild party night. The dazzling views and spectacular live gigs have to be experienced to taste the spirit of Thalassa.',
  'Thalassa is like no other place in Goa. It is a vibrating space with a uniquely Greek-Goan heartbeat.live gigs have to be experienced to taste the spirit. ',
  'Fresh, crisp and wholesome healthy plates. Don’t miss the Horiatiki, its a traditional greek salad with tomatoes, cucumber, onions, green peppers, olive oil, feta cheese topped with fresh oreganos.',
  // Add more slides here
];

const sidewaysArray = [
  {
    imagePath: '/images/cricketball.jpg',
    paragraph:
      'Thalassa has a legacy of hearty food right from the land of its origin. Generous portions, authentic Greek cuisine and served with love would sum up the culinary delight. One is spoilt for choice with fresh, crisp salads that are bursting with flavour or grilled meats / seafood. Starters to Desserts, there is something to cater to every palate. The very special occasions warrant lamb on a spit, a Greek tradition on birthdays and festivals like Easter and Christmas.',
    subheading: 'Cricket',
  },
  {
    imagePath: '/images/baseball.jpg',
    paragraph:
      'All Thalassa locations are carefully chosen to bring you spaces with that integrate nature. They are spacious, airy and conveniently situated be it by the river front or in the heart of the capital city of Goa. Ample parking and valet service are available so you can focus on having a good time.',
    subheading: 'Baseball',
  },
  {
    imagePath: '/images/football3.jpg',
    paragraph:
      'Think Greece and you are sure to paint a picture of azure skies and whites. Thalassa has strains of Corfu in its Classy chic décor that make a stunning contrast to the gorgeous blues and greens of Goa. The Bar is not to be missed with its signature look and we love to see our patrons enjoying themselves.',
    subheading: 'Football',
  },
];

const AboutUs = () => {
  const { ref: skiingRef, inView: skiingView } = useInView();
  const { ref: modelRef, inView: modelView } = useInView();

  return (
    <section className='overflow-hidden '>
      <div className='flex  gap-16  bg-slate-100 pr-8 pl-8 mt-10 relative'>
        <div className='absolute w-fit p-2 rounded-tl-full rounded-bl-full bg-primary right-0 top-0 flex justify-center items-center gap-4'>
          <span className='bg-white w-3 h-3 rounded-full'></span>
          <span className='bg-white w-3 h-3 rounded-full'></span>
          <span className='bg-white w-3 h-3 rounded-full'></span>
        </div>
        <div className=' w-4 bg-primary'></div>

        <div className='flex flex-col gap-10 p-8'>
          <div className=' flex items-center justify-center gap-20  '>
            <div className='flex flex-col gap-2  text-primary '>
              <span className='text-5xl font-bold ml-auto'>A Little</span>
              <span className='text-5xl font-bold ml-auto'> About Us</span>
            </div>
            <Image
              alt='team'
              src='/images/rugbyteam.jpg'
              width={370}
              height={90}
              className='shadow-2xl hover:scale-[102%] duration-100'
            />
          </div>
          <div className='flex gap-20'>
            <Image
              alt='time'
              src='/images/time.jpg'
              width={350}
              height={350}
              className='shadow-2xl hover:scale-[102%] duration-100'
            />
            <div className='flex flex-col gap-6 justify-center text-lg    '>
              <p>
                True to its name, Thalassa has always been about the spirit of
                the Sea. It is a multi-sensory experience with stunning views,
                classy Mediterranean décor and authentic Greek cuisine and
                hospitality. The outdoors is never far away and all the
                properties integrate nature’s abundance within its space.
              </p>
              <p>
                Thalassa began on the waterfront in quaint Vaddy, Siolim and
                expanded to include another taverna in the heart of the city,
                Panjim. The latest in the Greek experience is a luxurious resort
                right on Morjim beach.
              </p>
              <p>
                A quintessential Thalassa day starts slow with the soft sounds
                of water and birdsong. It then unfolds into a bright and
                cheerful brunch vibe with stunning backdrops to those gorgeous
                IG pictures you absolutely must click.
              </p>
            </div>
          </div>
          <p className='text-lg '>
            As the sun begins to dip, the sky puts on a show against the water
            for some spectacular sunsets. The magic doesn’t stop there but
            further transforms the space into a vibrant night with music and
            live performances.
          </p>
        </div>
      </div>
      <div className=' flex justify-between bg-primary gap-4 relative h-[25rem] my-16'>
        <Image
          src='/images/tennis.jpg'
          width={400}
          height={400}
          alt='celebration'
        />
        <div className='font-bold text-white flex flex-col justify-center items-center gap-8'>
          <p className='text-4xl '>Celebrate your sports</p>
          <button className='border-2 p-2 px-4 border-white rounded hover:bg-white hover:text-primary hover:shadow-2xl'>
            Join us to celebrate
          </button>
        </div>
        <Image
          src='/images/parkor.jpg'
          width={400}
          height={400}
          alt='celebration'
        />
      </div>

      <article className='border-[1px] border-slate-300 py-14 relative bg-slate-50'>
        <div className='absolute w-fit p-2 rounded-tr-full rounded-br-full bg-primary left-0 top-0 flex justify-center items-center gap-4'>
          <span className='bg-white w-3 h-3 rounded-full'></span>
          <span className='bg-white w-3 h-3 rounded-full'></span>
          <span className='bg-white w-3 h-3 rounded-full'></span>
        </div>
        <div className='absolute h-full w-[0.5rem] bg-primary right-[5%] top-0'></div>

        <div className=' w-[70%] mx-auto flex gap-16 items-center '>
          <h5 className='text-4xl font-bold text-primary basis-1/2 text-end  flex flex-col gap-2 '>
            <span>One Stop Destination</span>
            <span>for your Holidays</span>
          </h5>
          <p className='basis-1/2'>
            Thalassa is not just a restaurant. It is an experience. Enjoy food,
            décor, shopping against a stunning waterfront backdrop. Did we
            mention it is totally Instagram worthy?
          </p>
        </div>
        <Sideways
          sidewaysArray={sidewaysArray}
          className=' border-gray-200 flex flex-col  w-[70%] mx-auto gap-16 text-primary'
          innerSmallDivBasis='basis-[20%]'
          innerLargeDivBasis='basis-[80%]'
          imageDimension={300}
        />
      </article>

      <article className=' my-28  pr-32 pb-28 border-[1px] border-slate-200  py-6 bg-slate-100 relative'>
        <div className='relative my-10'>
          <Image
            src='/images/skiing.jpg'
            alt='entertainment'
            width={300}
            height={600}
            className={`absolute -right-[15%] -top-[20%] -rotate-12 origin-bottom-right hover:scale-[102%] duration-100 ${
              skiingView && 'animate-leanLeft'
            }`}
            ref={skiingRef}
          />

          <div className='flex justify-center  '>
            <div className='  basis-[25%] '>
              <Image
                src='/images/entertainment.jpg'
                alt='entertainment'
                className='w-full hover:scale-[102%] duration-100 '
                width={300}
                height={300}
              />
              <p className='  w-[65%] mt-8'>
                It is sure to draw you in and make you a part of the
                celebrations. Surrender to the rhythm and pulse of Thalassa and
                entertainment part of an incredible experience, one you
                absolutely have to try.
              </p>
            </div>
            <div className=' flex flex-col gap-8 relative basis-1/2'>
              <Image
                src='/images/entertainment3.jpg'
                alt='entertainment'
                className='w-[20rem] absolute -left-[10%] top-[23%] hover:scale-[102%] duration-100'
                width={200}
                height={500}
              />
              <h4 className='text-4xl font-bold text-primary ml-24'>
                ENTERTAINMENT
              </h4>
              <div className='w-[55%] ml-auto flex flex-col gap-8 mt-12 '>
                <p className=''>
                  Soak in the Greek entertainment vibe with traditional and
                  celebratory dances, Sirtaki and Zorba. Enjoy the live
                  performances by some dynamic artistes as they light up the
                  floor. One of the highlights is the custom of smashing plates
                  and showering flowers on all those who are part of the
                  celebrations. Besides these, there is an array of cabaret
                  performances, carnival dances and fire-shows that make
                  Thalassa truly an energy force and not just another
                  restaurant.
                </p>
                <p>
                  Dances and Music are the stuff of life and the performances
                  are designed to bring you sheer joy. The energy of these
                  events are electrifying and enliven your spirit. As much as
                  the performances are by the artists, the pleasure of their art
                  is yours to revel in.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* /////////////// */}
        <div className='relative mt-32'>
          <Image
            src='/images/footballmodel.jpg'
            alt='entertainment'
            width={300}
            height={600}
            className={`absolute -right-[15%] hover:scale-[102%] duration-100 -top-[20%] -rotate-12 origin-bottom-right ${
              modelView && 'animate-leanLeft'
            }`}
            ref={modelRef}
          />

          <div className='flex justify-center flex-row-reverse  '>
            <div className='  basis-[25%]'>
              <Image
                src='/images/store2.jpg'
                alt='entertainment'
                className='w-full hover:scale-[102%] duration-100 '
                width={300}
                height={300}
              />
              <p className=' w-[65%] mt-8 ml-auto'>
                It is sure to draw you in and make you a part of the
                celebrations. Surrender to the rhythm and pulse of Thalassa and
                entertainmentecome part of an incredible experience, one you
                absolutely have to try.
              </p>
            </div>
            <div className=' flex flex-col gap-8 relative basis-1/2  '>
              <Image
                src='/images/store.jpg'
                alt='store'
                className='w-[20rem] absolute -right-[10%] top-[23%] hover:scale-[102%] duration-100'
                width={200}
                height={500}
              />
              <h4 className='text-4xl font-bold text-primary'>RETAIL</h4>
              <div className='w-[55%] flex flex-col gap-8 mt-12 '>
                <p className=''>
                  Soak in the Greek entertainment vibe with traditional and
                  celebratory dances, Sirtaki and Zorba. Enjoy the live
                  performances by some dynamic artistes as they light up the
                  floor. One of the highlights is the custom of smashing plates
                  and showering flowers on all those who are part of the
                  celebrations. Besides these, there is an array of cabaret
                  performances, carnival dances and fire-shows that make
                  Thalassa truly an energy force and not just another
                  restaurant.
                </p>
                <p>
                  Dances and Music are the stuff of life and the performances
                  are designed to bring you sheer joy. The energy of these
                  events are electrifying and enliven your spirit. As much as
                  the performances are by the artists, the pleasure of their art
                  is yours to revel in.
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className='my-10'>
        <div className='bg-slate-100 h-[50vh] flex flex-col  items-center gap-4 ma'>
          <h2 className='text-3xl font-bold text-primary mt-14'>
            Meet The People Behind Sport.com
          </h2>
          <p className='w-1/2 text-center'>
            The heart and soul of Thalassa are Mariketty Grana and Spiro Grana ,
            a mother-soiman duo who have recreated Grecian magic in the heart of
            a sleepy village in Goa. Their vision of Thalassa is evocative of
            traditional Greek hospitality.
          </p>
        </div>
        <div className='bg-primary h-[50vh]  relative'>
          <div
            className=' flex gap-8 text-white w-[60%] mx-auto absolute left-1/2 -translate-x-1/2
          -top-[35%]'
          >
            <div className='flex flex-col gap-4 justify-center items-center '>
              <Image
                alt='people'
                width={300}
                height={300}
                src='/images/people1.jpg'
                className='shadow-lg'
              />
              <p className='text-lg font-bold capitalize'>Spiro grana Grana</p>
              <p>
                KukuNana and others have an exquisitely curated collection.
                Artisanal and unique, many of them are hand crafted with care.
                Whether it is something to jazz up your wardrobe or flaunting
                new baubles or thoughtful gifts for your loved ones, there is
                something for everyone.
              </p>
            </div>
            <div className='flex flex-col gap-4 justify-center items-center '>
              <Image
                alt='people'
                width={300}
                height={300}
                src='/images/people2.jpg'
                className='shadow-lg'
              />
              <p className='text-lg font-bold capitalize'>Mariketty Grana</p>
              <p className='text-center'>
                KukuNana and others have an exquisitely curated collection.
                Artisanal and unique, many of them are hand crafted with care.
                Whether it is something to jazz up your wardrobe or flaunting
                new baubles or thoughtful gifts for your loved ones, there is
                something for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-around  my-20 py-8 px-32 '>
        <p className=' text-4xl w-[30%] text-primary font-bold'>
          What our customer thinks &rarr;
        </p>
        <Slider className='flex w-1/2' slides={slides} />
      </div>

      <SubscribeForm />
    </section>
  );
};

export default AboutUs;
