// TODO: animate click event

function BtnDefault({ children, className }) {
  return (
    <button className={`text-button-lg rounded ${className}`}>
      {children}
    </button>
  )
}

function BtnPrimaryDark({ children }) {
  return (
    <button className='bg-neutral-700 rounded px-9 py-[18px] text-button-lg text-neutral-100'>
      {children}
    </button>
  )
}

function BtnPrimaryLight({ children }) {
  return (
    <button className='bg-neutral-100 rounded px-9 py-[18px] text-button-lg text-neutral-700'>
      {children}
    </button>
  )
}

function BtnPrimaryIconDark({ children }) {
  return (
    <button className='bg-neutral-700 rounded px-9 py-[18px] text-button-lg text-neutral-100'>
      {children}
      <i className='ml-3'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='inline'>
          <path
            d='M3 12H21'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M13 20L21 12L13 4'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </i>
    </button>
  )
}

function BtnPrimaryIconLight({ children }) {
  return (
    <button className='bg-neutral-100 rounded px-9 py-[18px] text-button-lg text-neutral-700'>
      {children}
      <i className='ml-3'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='inline'>
          <path
            d='M3 12H21'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M13 20L21 12L13 4'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </i>
    </button>
  )
}

function BtnSecondaryDark({ children }) {
  return (
    <button className='border-2 border-neutral-600 rounded px-8 py-3 text-button-lg text-neutral-700'>
      {children}
    </button>
  )
}

function BtnSecondaryLight({ children }) {
  return (
    <button className='border-2 border-neutral-600 rounded px-8 py-3 text-button-lg text-neutral-300'>
      {children}
    </button>
  )
}

function BtnSecondaryIconLeft({ children }) {
  return (
    <button className='border-2 border-neutral-300 rounded px-8 py-3 text-button-lg text-neutral-100'>
      <i className='mr-2'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='inline'>
          <path
            d='M6 12H18'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 18L12 6'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </i>
      {children}
    </button>
  )
}

function BtnSecondaryIconRight({ children }) {
  return (
    <button className='border-2 border-neutral-300 rounded px-8 py-3 text-button-lg text-neutral-100'>
      {children}
      <i className='ml-2'>
        <svg
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className='inline'>
          <path
            d='M6 12H18'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M12 18L12 6'
            stroke='currentColor'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </i>
    </button>
  )
}

export {
  BtnDefault,
  BtnPrimaryDark,
  BtnPrimaryLight,
  BtnPrimaryIconDark,
  BtnPrimaryIconLight,
  BtnSecondaryDark,
  BtnSecondaryLight,
  BtnSecondaryIconLeft,
  BtnSecondaryIconRight,
}
