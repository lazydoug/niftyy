import Image from 'next/image'

function CollectionCard({ collectionName, artist, avatar, price, assets }) {
  {
    /* Override TailwindCSS base style rule (height:auto) for img tag by specifying height explicitly for all Next Image elements*/
  }

  const moreItems = assets.slice(3)

  let background

  if (moreItems.length <= 4) {
    background = 'bg-accent-1'
  } else if (moreItems.length <= 8) {
    background = 'bg-accent-2'
  } else if (moreItems.length <= 12) {
    background = 'bg-accent-3'
  } else {
    background = 'bg-accent-1'
  }

  return (
    <div>
      <div className='relative w-[328px] h-[328px] md:w-[400px] md:h-[400px] rounded-2xl overflow-clip mb-2'>
        <Image src={assets[0]} alt='Digital asset 1' fill />
      </div>

      <div className='flex gap-2'>
        <div className='relative w-[104px] h-[104px] md:w-[128px] md:h-[128px] rounded-2xl overflow-clip'>
          <Image src={assets[1]} alt='Digital asset 2' fill />
        </div>
        <div className='relative w-[104px] h-[104px] md:w-[128px] md:h-[128px] rounded-2xl overflow-clip'>
          <Image src={assets[2]} alt='Digital asset 3' fill />
        </div>
        <div
          className={`w-[104px] h-[104px] md:w-[128px] md:h-[128px] text-body1-md lg:text-body1-lg text-center rounded-2xl ${background}`}>
          <span className='relative block top-1/2 -translate-y-1/2'>{`+${moreItems.length}`}</span>
        </div>
      </div>

      <div>
        <p className='flex justify-between items-center text-body1-md text-neutral-700'>
          <span>{collectionName}</span>
          <span className='text-title-lg text-neutral-500'>Floor price</span>
        </p>

        <div className=' gap-3 items-center'>
          <div className='relative w-8 h-8 rounded-full bg-accent-2 overflow-clip'>
            <Image src={avatar} alt={artist} fill />
          </div>
          <p className='flex justify-between text-title-lg'>
            <span>{artist} </span> <span>{price}</span>
          </p>
        </div>
      </div>
    </div>
  )
}

export default CollectionCard
