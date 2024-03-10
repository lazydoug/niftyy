'use client'

import { useState } from 'react'

import SpotlightCard from '../spotlight-card'
import { BtnPrimaryLight } from '../button'

function Spotlight() {
  /** Dummy data */
  const numberOfSpotlights = 109
  const ranges = ['1 day', '7 days', '30 days']
  const day1 = [
    {
      name: 'Escape II',
      price: '12.29 ETH',
      assetImage: '/escape-2.png',
      artist: 'randomdash',
      avatar: '/avatars/random-dash.png',
    },
    {
      name: 'CutePlanet®',
      price: '9.12 ETH',
      assetImage: '/cute-planet.png',
      artist: 'gelo',
      avatar: '/avatars/gelo.png',
    },
    {
      name: 'Serenity',
      price: '10.00 ETH',
      assetImage: '/serenity.png',
      artist: 'elnafrederick',
      avatar: '/avatars/elna-frederick.png',
    },
    {
      name: 'Echo',
      price: '5.20 ETH',
      assetImage: '/echo.png',
      artist: '_kolahon',
      avatar: '/avatars/_kolahon.png',
    },
    {
      name: 'Ether',
      price: '12.20 ETH',
      assetImage: '/ether.png',
      artist: 'mcbess',
      avatar: '/avatars/mcbess.png',
    },
    {
      name: 'Prism',
      price: '12.20 ETH',
      assetImage: '/prism.png',
      artist: 'aaronpenne',
      avatar: '/avatars/aaron-penne.png',
    },
    {
      name: 'Lunar',
      price: '12.20 ETH',
      assetImage: '/lunar.png',
      artist: 'nocellcoverage',
      avatar: '/avatars/no-cell-coverage.png',
    },
    {
      name: 'Robot: One',
      price: '11.02 ETH',
      assetImage: '/robot-one.png',
      artist: 'randomdash',
      avatar: '/avatars/random-dash.png',
    },
    {
      name: 'Mars',
      price: '17.15 ETH',
      assetImage: '/mars.png',
      artist: 'gelo',
      avatar: '/avatars/gelo.png',
    },
    {
      name: 'Doug',
      price: '4.23 ETH',
      assetImage: '/dummy.png',
      artistName: 'lazydoug',
      avatar: '/avatars/lazy-doug.png',
    },
    {
      name: 'Nova',
      price: '9.45 ETH',
      assetImage: '/nova.png',
      artist: 'elnafrederick',
      avatar: '/avatars/elna-frederick.png',
    },
    {
      name: 'Aurora',
      price: '12.10 ETH',
      assetImage: '/aurora.png',
      artistName: 'lazydoug',
      avatar: '/avatars/lazy-doug.png',
    },
  ]
  const days7 = [
    {
      name: 'Ether',
      price: '12.20 ETH',
      assetImage: '/ether.png',
      artist: 'mcbess',
      avatar: '/avatars/mcbess.png',
    },
    {
      name: 'Prism',
      price: '12.20 ETH',
      assetImage: '/prism.png',
      artist: 'aaronpenne',
      avatar: '/avatars/aaron-penne.png',
    },
    {
      name: 'Lunar',
      price: '12.20 ETH',
      assetImage: '/lunar.png',
      artist: 'nocellcoverage',
      avatar: '/avatars/no-cell-coverage.png',
    },
    {
      name: 'Robot: One',
      price: '11.02 ETH',
      assetImage: '/robot-one.png',
      artist: 'randomdash',
      avatar: '/avatars/random-dash.png',
    },
    {
      name: 'Escape II',
      price: '12.29 ETH',
      assetImage: '/escape-2.png',
      artist: 'randomdash',
      avatar: '/avatars/random-dash.png',
    },
    {
      name: 'CutePlanet®',
      price: '9.12 ETH',
      assetImage: '/cute-planet.png',
      artist: 'gelo',
      avatar: '/avatars/gelo.png',
    },
    {
      name: 'Serenity',
      price: '10.00 ETH',
      assetImage: '/serenity.png',
      artist: 'elnafrederick',
      avatar: '/avatars/elna-frederick.png',
    },
    {
      name: 'Echo',
      price: '5.20 ETH',
      assetImage: '/echo.png',
      artist: '_kolahon',
      avatar: '/avatars/_kolahon.png',
    },
    {
      name: 'Mars',
      price: '17.15 ETH',
      assetImage: '/mars.png',
      artist: 'gelo',
      avatar: '/avatars/gelo.png',
    },
    {
      name: 'Doug',
      price: '4.23 ETH',
      assetImage: '/dummy.png',
      artistName: 'lazydoug',
      avatar: '/avatars/lazy-doug.png',
    },
    {
      name: 'Nova',
      price: '9.45 ETH',
      assetImage: '/nova.png',
      artist: 'elnafrederick',
      avatar: '/avatars/elna-frederick.png',
    },
    {
      name: 'Aurora',
      price: '12.10 ETH',
      assetImage: '/aurora.png',
      artistName: 'lazydoug',
      avatar: '/avatars/lazy-doug.png',
    },
  ]
  const days30 = [
    {
      name: 'Mars',
      price: '17.15 ETH',
      assetImage: '/mars.png',
      artist: 'gelo',
      avatar: '/avatars/gelo.png',
    },
    {
      name: 'Doug',
      price: '4.23 ETH',
      assetImage: '/dummy.png',
      artistName: 'lazydoug',
      avatar: '/avatars/lazy-doug.png',
    },
    {
      name: 'Nova',
      price: '9.45 ETH',
      assetImage: '/nova.png',
      artist: 'elnafrederick',
      avatar: '/avatars/elna-frederick.png',
    },
    {
      name: 'Aurora',
      price: '12.10 ETH',
      assetImage: '/aurora.png',
      artistName: 'lazydoug',
      avatar: '/avatars/lazy-doug.png',
    },
    {
      name: 'Ether',
      price: '12.20 ETH',
      assetImage: '/ether.png',
      artist: 'mcbess',
      avatar: '/avatars/mcbess.png',
    },
    {
      name: 'Prism',
      price: '12.20 ETH',
      assetImage: '/prism.png',
      artist: 'aaronpenne',
      avatar: '/avatars/aaron-penne.png',
    },
    {
      name: 'Lunar',
      price: '12.20 ETH',
      assetImage: '/lunar.png',
      artist: 'nocellcoverage',
      avatar: '/avatars/no-cell-coverage.png',
    },
    {
      name: 'Robot: One',
      price: '11.02 ETH',
      assetImage: '/robot-one.png',
      artist: 'randomdash',
      avatar: '/avatars/random-dash.png',
    },
    {
      name: 'Escape II',
      price: '12.29 ETH',
      assetImage: '/escape-2.png',
      artist: 'randomdash',
      avatar: '/avatars/random-dash.png',
    },
    {
      name: 'CutePlanet®',
      price: '9.12 ETH',
      assetImage: '/cute-planet.png',
      artist: 'gelo',
      avatar: '/avatars/gelo.png',
    },
    {
      name: 'Serenity',
      price: '10.00 ETH',
      assetImage: '/serenity.png',
      artist: 'elnafrederick',
      avatar: '/avatars/elna-frederick.png',
    },
    {
      name: 'Echo',
      price: '5.20 ETH',
      assetImage: '/echo.png',
      artist: '_kolahon',
      avatar: '/avatars/_kolahon.png',
    },
  ]

  const [activeRange, setActiveRange] = useState('1 day')
  const [projects, setProjects] = useState(day1)

  return (
    <section className='px-6 py-10 bg-neutral-800'>
      <div className='flex flex-col md:flex-row gap-8 md:justify-between'>
        <div>
          <h2 className='text-h1-sm text-neutral-100 mb-5'>Spotlight.</h2>
          <p className='text-body1-md text-neutral-500'>
            Projects you&apos;ll love
          </p>
        </div>

        <div className='flex gap-5 h-fit md:mt-auto'>
          {ranges.map(range => (
            <RangeButton
              key={range}
              range={range}
              isActive={range === activeRange}
              changeRange={() => {
                setActiveRange(range)

                switch (range) {
                  case '1 day':
                    setProjects(day1)
                    break
                  case '7 days':
                    setProjects(days7)
                    break
                  case '30 days':
                    setProjects(days30)
                    break

                  default:
                    setProjects(day1)
                    break
                }
              }}
            />
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-4 gap-y-8 md:gap-x-8 md:gap-y-12 mt-12'>
        {projects.map(({ name, price, assetImage, artist, avatar }) => (
          <SpotlightCard
            key={name}
            name={name}
            price={price}
            assetImage={assetImage}
            artist={artist}
            avatar={avatar}
          />
        ))}
      </div>

      <BtnPrimaryLight className='w-fit mt-12 mx-auto'>
        Explore More
        <span className='inline-block bg-neutral-300 rounded-xl px-2 py-0.5 ml-3'>
          {numberOfSpotlights}
        </span>
      </BtnPrimaryLight>
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
