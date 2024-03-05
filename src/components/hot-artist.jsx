import Image from 'next/image'

import PolygonSVG from './svg/polygon'

function HotArtist({ avatar, userName, amount, rank }) {
  return (
    <div className='h-64 py-11 relative text-center bg-neutral-200 border-r border-b border-neutral-300'>
      <div className='w-[104px] h-[104px] relative bg-accent-2 rounded-full overflow-clip mx-auto'>
        <Image src={avatar} alt='Artist avatar' fill />
      </div>
      <div>
        <p className='text-body1-sm text-neutral-700'>@{userName}</p>
        <p className='text-base-sm text-neutral-500'>
          Total sale <span className='text-neutral-700'>{amount}</span>
        </p>
      </div>
      <svg
        width='52'
        height='54'
        viewBox='0 0 52 54'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute right-[7.5px] top-2'>
        <g filter='url(#filter0_d_4309_18477)'>
          <path
            d='M22 1.3094C24.4752 -0.119662 27.5248 -0.119662 30 1.3094L39.3205 6.6906C41.7957 8.11966 43.3205 10.7607 43.3205 13.6188V24.3812C43.3205 27.2393 41.7957 29.8803 39.3205 31.3094L30 36.6906C27.5248 38.1197 24.4752 38.1197 22 36.6906L12.6795 31.3094C10.2043 29.8803 8.67949 27.2393 8.67949 24.3812V13.6188C8.67949 10.7607 10.2043 8.11966 12.6795 6.6906L22 1.3094Z'
            fill='#F7FBFA'
          />
        </g>
        <defs>
          <filter
            id='filter0_d_4309_18477'
            x='0.679688'
            y='0.237305'
            width='50.6406'
            height='53.5254'
            filterUnits='userSpaceOnUse'
            color-interpolation-filters='sRGB'>
            <feFlood flood-opacity='0' result='BackgroundImageFix' />
            <feColorMatrix
              in='SourceAlpha'
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
              result='hardAlpha'
            />
            <feOffset dy='8' />
            <feGaussianBlur stdDeviation='4' />
            <feComposite in2='hardAlpha' operator='out' />
            <feColorMatrix
              type='matrix'
              values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0'
            />
            <feBlend
              mode='multiply'
              in2='BackgroundImageFix'
              result='effect1_dropShadow_4309_18477'
            />
            <feBlend
              mode='normal'
              in='SourceGraphic'
              in2='effect1_dropShadow_4309_18477'
              result='shape'
            />
          </filter>
        </defs>
      </svg>
    </div>
  )
}

export default HotArtist
/* ranking */