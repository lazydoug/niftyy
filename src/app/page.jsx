import Auctions from '@/components/sections/auctions'
import CuratedCollections from '@/components/sections/curated-collections'
import FeaturedNFT from '@/components/sections/featured-nft'
import Hero from '@/components/sections/hero'
import HotNFT from '@/components/sections/hot-nft-artists'
import Spotlight from '@/components/sections/spotlight'

export default function Home() {
  return (
    <main>
      <Hero />
      <HotNFT />
      <FeaturedNFT />
      <CuratedCollections />
      <Auctions />
      <Spotlight />
    </main>
  )
}
