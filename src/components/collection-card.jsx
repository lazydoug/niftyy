import Image from 'next/image'

function CollectionCard({ name, items }) {
  {
    /* Override TailwindCSS base style rule (height:auto) for img tag by specifying height explicitly for all Next Image elements*/
  }

  const moreItems = items.slice(3)

  let background

  if (moreItems <= 4) {
    background = 'bg-accent-1'
  } else if (moreItems <= 8) {
    background = 'bg-accent-2'
  } else if (moreItems <= 12) {
    background = 'bg-accent-3'
  } else {
    background = 'bg-accent-1'
  }

  return (
    <div>
      <div className='relative w-[328px] h-[328px] md:w-[400px] md:h-[400px] rounded-2xl overflow-clip mb-2'>
        <Image src={items[0]} alt='Digital asset 1' fill />
      </div>

      <div className='flex gap-2'>
        <div className='relative w-[104px] h-[104px] md:w-[128px] md:h-[128px] rounded-2xl overflow-clip'>
          <Image src={items[1]} alt='Digital asset 2' fill />
        </div>
        <div className='relative w-[104px] h-[104px] md:w-[128px] md:h-[128px] rounded-2xl overflow-clip'>
          <Image src={items[2]} alt='Digital asset 3' fill />
        </div>
        <div
          className={`w-[104px] h-[104px] text-body1-md lg:text-body1-lg text-center ${background}`}>
          <span className='relative block top-1/2 -translate-y-1/2'>{`+${moreItems.length}`}</span>
        </div>
      </div>

      <div></div>
    </div>
  )
}

export default CollectionCard
