import { IconButton } from './button'
import CollectionCard from './collection-card'
import ArrowSvg from './svg/arrows'

function CuratedCollections() {
  const collections = [
    {
      name: 'Cute Planet',
      artist: '@tranmautritam',
      avatar: '/gelo.png',
      price: '1.0 ETH',
      assets: [
        '/collections/cp-1.png',
        '/collections/cp-2.png',
        '/collections/cp-3.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
      ],
    },

    {
      name: 'UI8 all-access',
      artist: '@randomdash',
      avatar: '/random-dash.png',
      price: '1.2 ETH',
      assets: [
        '/collections/ui8-1.png',
        '/collections/ui8-2.png',
        '/collections/ui8-3.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
      ],
    },

    {
      name: 'Beyond the Dream',
      artist: '@aaronpenne',
      avatar: '/aaron-penne.png',
      price: '1.0 ETH',
      assets: [
        '/collections/beyond-1.png',
        '/collections/beyond-2.png',
        '/collections/beyond-3.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
      ],
    },

    {
      name: 'Xcalibir',
      artist: '@lazydoug',
      avatar: '/lazy-doug.png',
      price: '1.5 ETH',
      assets: [
        '/collections/xcalibir-1.png',
        '/collections/xcalibir-2.png',
        '/collections/xcalibir-3.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
        '/dummy.png',
      ],
    },
  ]

  return (
    <section className='bg-neutral-100 px-6 py-12 overflow-clip'>
      <div className='flex flex-col gap-10'>
        <div>
          <h1 className='text-h1-sm text-neutral-700'>Curated collections.</h1>

          <div className='flex gap-3'>
            <IconButton>
              <ArrowSvg left />
            </IconButton>
            <IconButton filled>
              <ArrowSvg />
            </IconButton>
          </div>
        </div>

        {/* slider */}
        <div className='flex gap-10'>
          {collections.map(collection => (
            <CollectionCard
              key={collection.name}
              collectionName={collection.name}
              artist={collection.artist}
              avatar={collection.avatar}
              price={collection.price}
              assets={collection.assets}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CuratedCollections
