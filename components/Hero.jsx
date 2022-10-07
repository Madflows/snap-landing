import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const Hero = () => {
  const size = useWindowSize();


  return (
    <section className='flex flex-col gap-4 md:flex-row-reverse items-center w-full md:pl-[7vw]'>
      <div className='h-full overflow-hidden'>
        {size.width > 768 ? (
          <img src="/images/image-hero-desktop.png" className='w-[700px]' alt="hero" />

        ) : (
          <img src="/images/image-hero-mobile.png" alt="hero" />

        )}
      </div>
      <div className='w-full flex flex-col justify-between'>
        <div className='w-full flex flex-col gap-4 md:gap-8 items-center md:items-start pb-8 px-2'>
          <h1 className='text-black text-2xl md:text-6xl font-bold'>Make {(size.width > 768) && <br />} remote work</h1>
          <p className='text-mid-gray font-semibold max-w-[400px] text-center md:text-left'>Get your team in sync, no matter your location. Streamline processes, create team rituals, and prouctivity soar.</p>
          <button className='bg-black py-3 px-4 rounded-xl text-white'>Learn more</button>
        </div>
        <IconCloud />
      </div>
    </section>
  )
}

function IconCloud() {
  return (
    <div className='grid grid-cols-4 gap-2 px-4 md:px-2 py-6 pt-12 md:w-[70%]'>
      <img src="/images/client-databiz.svg" alt="databiz" />
      <img src="/images/client-audiophile.svg" alt="audiophile" />
      <img src="/images/client-meet.svg" alt="meet" />
      <img src="/images/client-maker.svg" alt="maker" />
    </div>
  )
}

export default Hero