import Image from 'next/image'

import PlaceholderSvg from './svg/placeholder'
import RightArrow from './svg/right-arrow'

function Hero() {
  return (
    <section className='px-6 py-12 bg-neutral-100'>
      <div>
        <div className='mb-8'>
          <h1 className='text-hero-sm text-neutral-700 mb-5'>
            Curated Artwork.
          </h1>
          <div className='w-[118px] h-11 px-5 py-[11px] bg-accent-shade1 rounded-full'>
            <RightArrow width={'auto'} height={'auto'} />
          </div>
        </div>
        <div>
          <p className='text-body2-md text-neutral-500 mb-6'>
            We are laying the groundwork for web3 — the next generation of the
            internet full of limitless possibilities.
          </p>
          <div className='flex gap-5'>
            <p className='text-button-lg text-neutral-700'>START YOUR SEARCH</p>
            <div className='w-6 h-6'>
              <PlaceholderSvg />
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <div></div>
    </section>
  )
}

export default Hero
