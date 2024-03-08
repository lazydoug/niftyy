import ArrowSvg from './svg/arrows'
import HotArtist from './hot-artist'
import  { BtnPrimaryDark } from './button'

function HotNFT() {
  const artists = [
    {
      userName: 'lazydoug',
      avatar: '/avatars/lazy-doug.png',
      amount: '13.04 ETH',
      rank: '1',
    },
    {
      userName: 'randomdash',
      avatar: '/avatars/random-dash.png',
      amount: '12.29 ETH',
      rank: '2',
    },
    {
      userName: 'gelo',
      avatar: '/avatars/gelo.png',
      amount: '12.19 ETH',
      rank: '3',
    },
    {
      userName: 'elnafrederick',
      avatar: '/avatars/elna-frederick.png',
      amount: '12.10 ETH',
      rank: '4',
    },
    {
      userName: '_kolahon',
      avatar: '/avatars/_kolahon.png',
      amount: '11.05 ETH',
      rank: '5',
    },
    {
      userName: 'mcbess',
      avatar: '/avatars/mcbess.png',
      amount: '10.65 ETH',
      rank: '6',
    },
    {
      userName: 'aaronpenne',
      avatar: '/avatars/aaron-penne.png',
      amount: '10.60 ETH',
      rank: '7',
    },
    {
      userName: 'nocellcoverage',
      avatar: '/avatars/no-cell-coverage.png',
      amount: '10.04 ETH',
      rank: '8',
    },
  ]

  return (
    <section>
      <div className='px-6 py-12 bg-neutral-100'>
        <div className='flex flex-col gap-6'>
          <h2 className='text-h1-sm text-neutral-700'>
            Hot NFT artists of the month.
          </h2>
          <div className='w-20 h-20 rounded-full p-7 text-neutral-800 border border-neutral-200  shadow-[0_20px_16px_-6px_rgba(0,0,0,0.15)]'>
            <ArrowSvg />
          </div>
        </div>
        <p className='text-body2-md text-neutral-500 mt-10'>
          We are laying the groundwork for web3 — the next generation of the
          internet full of limitless possibilities. Join the millions of
          creators, collectors, and curators who are on this journey with you.
        </p>
      </div>
      <div className='bg-neutral-200 flow-root'>
        <div className='grid grid-cols-2'>
          {artists.map(({ userName, avatar, amount, rank }) => (
            <HotArtist
              key={rank}
              avatar={avatar}
              userName={userName}
              amount={amount}
              rank={rank}
            />
          ))}
        </div>

        <div className='w-fit mx-auto mt-10 mb-8'>
          <BtnPrimaryDark>EXPLORE MORE</BtnPrimaryDark>
        </div>
      </div>
    </section>
  )
}

export default HotNFT
