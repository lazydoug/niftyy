import CuratedCollections from '@/components/curated-collections'
import FeaturedNFT from '@/components/featured-nft'
import Hero from '@/components/hero'
import HotNFT from '@/components/hot-nft'

export default function Home() {
  return (
    <main>
      <Hero />
      <HotNFT />
      <FeaturedNFT />
      <CuratedCollections />
    </main>
  )
}
