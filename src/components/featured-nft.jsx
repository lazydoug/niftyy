
import { BtnPrimary, BtnPrimaryDark, BtnPrimaryIconDark, BtnPrimaryIconLight, BtnPrimaryLight, BtnSecondaryDark, BtnSecondaryIconLeft, BtnSecondaryIconRight, BtnSecondaryLight } from './button'
import { CardImageCircle, CardImageSquare } from './card-image'

function FeaturedNFT() {
  const artist = { userName: '@randomdash', avatar: '/random-dash.png' }
  const artwork = { name: 'Escape', image: '/escape.png' }

  return (
    <section className='px-6 py-12 bg-neutral-800'>
      <div className='flex flex-col gap-6'>
        <div className='md:flex md:gap-4'>
          <CardImageCircle title={artist.userName} image={artist.avatar} />
          <CardImageSquare
            title={artwork.name}
            image={artwork.image}
            className='hidden md:flex'
          />
        </div>

        <h1 className='text-h1-sm text-neutral-100'>Beyond the Dream.</h1>

        <div>
          <div>
            <p className='text-title-lg text-neutral-400 mb-2'>Buy now price</p>
            <h3 className='text-h3-md text-neutral-100'>8.00 ETH</h3>
            <p className='text-title-lg text-neutral-400'>$24,635.39</p>
          </div>
          {/* <Button /> */}
        </div>
      </div>

      <div>
      <BtnPrimaryDark>PrimaryDark</BtnPrimaryDark>
      <BtnPrimaryLight>PrimaryLight</BtnPrimaryLight>
      <BtnPrimaryIconDark>PrimaryIconDark</BtnPrimaryIconDark>
      <BtnPrimaryIconLight>PrimaryIconLight</BtnPrimaryIconLight>
      <BtnSecondaryDark>SecondaryDark</BtnSecondaryDark>
      <BtnSecondaryLight>SecondaryLight</BtnSecondaryLight>
      <BtnSecondaryIconLeft>SecondaryLeft</BtnSecondaryIconLeft>
      <BtnSecondaryIconRight>SecondaryIconRight</BtnSecondaryIconRight>
      </div>
    </section>
  )
}

export default FeaturedNFT
