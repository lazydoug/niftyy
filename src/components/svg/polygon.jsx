function PolygonSVG({ width, height, rank, className }) {
  return (
    <svg
      width={width || '40'}
      height={height || '40'}
      viewBox='0 0 36 38'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}>
      <path
        d='M14 1.3094C16.4752 -0.119662 19.5248 -0.119662 22 1.3094L31.3205 6.6906C33.7957 8.11966 35.3205 10.7607 35.3205 13.6188V24.3812C35.3205 27.2393 33.7957 29.8803 31.3205 31.3094L22 36.6906C19.5248 38.1197 16.4752 38.1197 14 36.6906L4.67949 31.3094C2.20428 29.8803 0.679491 27.2393 0.679491 24.3812V13.6188C0.679491 10.7607 2.20428 8.11966 4.67949 6.6906L14 1.3094Z'
        fill='#f7fbfa'
      />
      <p className='text-base-sm text-neutral-700'>{rank}</p>
    </svg>
  )
}

export default PolygonSVG
