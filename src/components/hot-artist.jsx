import Image from 'next/image'

function HotArtist({ avatar, userName, amount, rank }) {
  return (
    <div className='h-64 py-11 relative text-center border-r border-b border-neutral-300'>
      <div className='w-[104px] h-[104px] relative bg-accent-2 rounded-full overflow-clip mx-auto'>
        <Image src={avatar} alt='Artist avatar' fill />
      </div>
      <div>
        <p className='text-body1-sm text-neutral-700'>@{userName}</p>
        <p className='text-base-sm text-neutral-500'>
          Total sale <span className='text-neutral-700'>{amount}</span>
        </p>
      </div>
      <div className='absolute right-[7.5px] top-2 drop-shadow-[0_8px_8px_rgba(0,0,0,0.06)]'>
        <div className='rank-polygon w-9 h-[38px] bg-neutral-100'>
          <span className='text-base-sm text-neutral-700 block translate-y-1/2'>
            {rank}
          </span>
        </div>
      </div>
    </div>
  )
}

export default HotArtist
