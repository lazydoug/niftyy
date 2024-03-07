import Image from 'next/image'

import { BtnPrimaryLight } from './button'
import ImageCard from './image-card'

function FeaturedNFT() {
  const artist = { userName: '@randomdash', avatar: '/random-dash.png' }
  const artwork = { name: 'Escape', image: '/escape.png' }

  return (
    <section className='px-6 py-12 bg-neutral-800'>
      <div className='flex flex-col gap-6'>
        <div className='md:flex md:gap-4'>
          <ImageCard title={artist.userName} image={artist.avatar} round />
          <div className='hidden md:flex'>
            <ImageCard title={artwork.name} image={artwork.image} />
          </div>
        </div>

        <h1 className='text-h1-sm text-neutral-100'>Beyond the Dream.</h1>

        <div className='flex flex-col gap-6'>
          <div>
            <p className='text-title-lg text-neutral-400 mb-2'>Buy now price</p>
            <h3 className='text-h3-md text-neutral-100'>8.00 ETH</h3>
            <p className='text-title-lg text-neutral-400'>$24,635.39</p>
          </div>
          <BtnPrimaryLight fill>MAKE OFFER</BtnPrimaryLight>
        </div>
      </div>

      {/*sets aspect ratio of image container;l to 1:1*/}
      <div className='relative before:content-[""] pt-[100%]'>
        <Image src={'/shubham-dhage-cc.png'} alt='' fill />
      </div>
    </section>
  )
}

export default FeaturedNFT
