import { BtnPrimaryLight } from './button'
import ImageCard from './image-card'

function Auctions() {
  const numberOfAuctions = 109
  const auctions = [
    {
      avatar: '/avatars/random-dash.png',
      artist: '@randomdash',
      asset: '/auction-1-lr.jpg',
      bid: '8.00 ETH',
      hrs: '23',
      min: '59',
      sec: '59',
    },
  ]

  return (
    <section className='md:flex'>
      <div className='flex flex-col gap-10 px-6 py-10 bg-accent-2'>
        <h2 className='text-h1-sm text-neutral-700'>Auctions ending soon</h2>
        <BtnPrimaryLight className='w-max'>
          Explore More
          <span className='bg-neutral-300 text-button-lg rounded-xl px-2 py-0.5 ml-3'>
            {numberOfAuctions}
          </span>
        </BtnPrimaryLight>
      </div>

      <div
        className='flex flex-col w-full h-[375px] p-6 bg-center bg-cover'
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.85)), url(${auctions[0].asset})`,
        }}>
        <ImageCard
          title={auctions[0].artist}
          image={auctions[0].avatar}
          background='bg-opacity-700-75'
        />
        <div className='mt-auto flex gap-6'>
          <div className='min-w-max'>
            <p className='mb-3 text-base-sm text-neutral-100'>Current bid</p>
            <h4 className='text-h4-sm text-neutral-100'>
              {auctions[0].bid}
              <span className='block mt-2 text-base-sm text-neutral-200'>
                {'$24,635.39'}
              </span>
            </h4>
          </div>
          <div className='w-full'>
            <p className='mb-3 text-base-sm text-neutral-100'>
              Auction ends in
            </p>
            <div className='flex gap-5'>
              <h4 className='w-full text-h4-sm text-neutral-100'>
                {auctions[0].hrs}
                <span className='block mt-2 text-base-sm text-neutral-200'>
                  hrs
                </span>
              </h4>
              <h4 className='w-full text-h4-sm text-neutral-100'>
                {auctions[0].min}
                <span className='block mt-2 text-base-sm text-neutral-200'>
                  min
                </span>
              </h4>
              <h4 className='w-full text-h4-sm text-neutral-100'>
                {auctions[0].sec}
                <span className='block mt-2 text-base-sm text-neutral-200'>
                  sec
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Auctions
