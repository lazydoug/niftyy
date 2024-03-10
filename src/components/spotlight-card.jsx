import Image from 'next/image'

function SpotlightCard({ name, price, assetImage, artist, avatar }) {
  return (
    <div>
      <div className='relative w-[328px] h-[328px] lg:w-[212px] lg:h-[212px] min-[1440px]:w-[298px] min-[1440px]:h-[298px] min-[1600px]:w-[330px] min-[1600px]:h-[330px] rounded-2xl overflow-clip mb-2'>
        <Image src={assetImage} alt={name} fill className='object-cover' />
      </div>
      <div className='flex gap-6 items-center justify-between'>
        <div className='min-w-max'>
          <p className='text-body1-md text-neutral-100'>{name}</p>
          <p className='text-base-sm text-neutral-500'>
            Buy now <span className='text-neutral-100'>{price}</span>
          </p>
        </div>
        <div className='relative w-8 h-8 bg-accent-2 rounded-full overflow-clip'>
          <Image src={avatar} alt={artist} fill />
        </div>
      </div>
    </div>
  )
}

export default SpotlightCard
