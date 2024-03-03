function PlaceholderSvg({ width, height }) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={width || '24'}
      height={height || '24'}
      fill='none'
      viewBox='0 0 24 24'>
      <circle cx='12' cy='12' r='11' stroke='#A6AEAD' strokeWidth='2'></circle>
      <circle cx='12' cy='12' r='1' stroke='#A6AEAD' strokeWidth='2'></circle>
    </svg>
  )
}

export default PlaceholderSvg
