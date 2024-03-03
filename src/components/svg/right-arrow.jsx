function RightArrow({ width, height }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '132'}
      height={height || '37'}
      fill='none'
      viewBox='0 0 132 37'>
      <rect width='128' height='8' y='14' fill='#202025' rx='4'></rect>
      <path
        stroke='#202025'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='8'
        d='M113 4l14.5 14.5L113 33'></path>
    </svg>
  )
}

export default RightArrow
