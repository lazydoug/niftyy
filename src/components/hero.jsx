import Image from 'next/image'

import PlaceholderSvg from './svg/placeholder'
import LongRightArrowSvg from './svg/long-right-arrow'
import ArrowForwardSvg from './svg/arrow-forward'

import heroImage from '@/assets/hero-image.png'
import Button from './button'

function Hero() {
  return (
    <section className='bg-neutral-100'>
      <div className='px-6 py-12'>
        <div className='mb-8'>
          <h1 className='text-hero-sm text-neutral-700 mb-5'>
            Curated Artwork.
          </h1>
          <div className='w-[118px] h-11 px-5 py-[11px] bg-accent-shade1 rounded-full'>
            <LongRightArrowSvg width={'auto'} height={'auto'} />
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

      <div>
        <div className='relative h-[375px]'>
          <Image src={heroImage} alt='Hero image' fill />
        </div>

        <div className='bg-accent-4 px-6 py-12 flex flex-col gap-12'>
          <div className='flex justify-between px-6 py-4 bg-neutral-100 rounded-xl shadow-[0_16px_40px_-8px_rgba(0,0,0,0.12)]'>
            <div>
              <p className='text-base-sm text-neutral-500'>Collection</p>
              <p className='text-body1-sm text-neutral-700'>
                <i>
                  <PlaceholderSvg className='inline mr-3' />
                </i>
                Escape II
              </p>
            </div>
            <div>
              <p className='text-base-sm text-neutral-500'>Buy now</p>
              <p className='text-body1-sm text-neutral-700'>
                <i>
                  <PlaceholderSvg className='inline mr-3' />
                </i>
                10.00 ETH
              </p>
            </div>
          </div>

          <div>
            <h1 className='text-h1-sm text-neutral-700 mb-8'>
              The creator network.
            </h1>

            <div className='flex flex-col gap-4'>
              <Button className='border-neutral-700 border-2 text-neutral-800 py-5'>
                VIEW NFT
                <i className='ml-3'>
                  <ArrowForwardSvg className='inline align-middle' />
                </i>
              </Button>
              <Button className='text-neutral-100 bg-neutral-700 py-5'>
                PLACE A BID
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
