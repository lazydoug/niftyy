function ArrowForwardSvg({ width, height, className }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '24'}
      height={height || '24'}
      fill='none'
      viewBox='0 0 25 24'
      className={className}>
      <path
        fill='currentColor'
        d='M13.793 17.793a1 1 0 001.414 1.414L21 13.414a2 2 0 000-2.828l-5.793-5.793a1 1 0 10-1.414 1.414L18.586 11H4.5a1 1 0 100 2h14.086l-4.793 4.793z'></path>
    </svg>
  )
}

export default ArrowForwardSvg
