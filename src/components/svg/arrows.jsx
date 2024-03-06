function ArrowForwardSvg() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 25 24'
      className='inline'>
      <path
        fill='currentColor'
        d='M13.793 17.793a1 1 0 001.414 1.414L21 13.414a2 2 0 000-2.828l-5.793-5.793a1 1 0 10-1.414 1.414L18.586 11H4.5a1 1 0 100 2h14.086l-4.793 4.793z'></path>
    </svg>
  )
}

function ArrowBackwardSvg() {
  return (
    <svg
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className='inline'>
      <path
        d='M10.7071 17.7929C11.0976 18.1834 11.0976 18.8166 10.7071 19.2071C10.3166 19.5976 9.6834 19.5976 9.2929 19.2071L3.5 13.4142C2.719 12.6332 2.719 11.3668 3.5 10.5858L9.2929 4.79289C9.6834 4.40237 10.3166 4.40237 10.7071 4.79289C11.0976 5.18342 11.0976 5.81658 10.7071 6.20711L5.9142 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H5.9142L10.7071 17.7929Z'
        fill='currentColor'
      />
    </svg>
  )
}

export { ArrowForwardSvg, ArrowBackwardSvg }
