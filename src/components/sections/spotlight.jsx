'use client'

import { useState } from 'react'

function Spotlight() {
  const [activeRange, setActiveRange] = useState('1 day')

  const ranges = ['1 day', '7 days', '30 days']

  return (
    <section className='px-6 py-10 bg-neutral-800'>
      <div className='flex flex-col md:flex-row gap-8'>
        <div>
          <h2 className='text-h1-sm text-neutral-100 mb-5'>Spotlight.</h2>
          <p className='text-body1-md text-neutral-500'>
            Projects you&apos;ll love
          </p>
        </div>

        <div className='flex gap-5'>
          {ranges.map(range => (
            <RangeButton
              key={range}
              range={range}
              isActive={range === activeRange}
              changeRange={() => {
                setActiveRange(range)
              }}
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4'></div>
    </section>
  )
}

function RangeButton({ range, isActive, changeRange }) {
  return (
    <button
      className={`rounded-[40px] text-base-sm px-6 py-2 
      ${isActive ? 'text-neutral-700 bg-neutral-100' : 'text-neutral-500'}`}
      onClick={changeRange}>
      {range}
    </button>
  )
}

export default Spotlight
