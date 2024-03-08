import Image from 'next/image'

/**
 * @param {string} title The title of the card
 * @param {string} image The avatar for the card
 * @param {boolean} round Indicates whether the avatar is round
 * @param {string} background A valid TailwindCSS background utility class that replaces the default background color
 * @returns {JSX.Element} A card element with an image (avatar) and a title
 */
function ImageCard({ title, image, round, background }) {
  round = (round && 'rounded-full') || 'rounded-xl'
  background = background || 'bg-neutral-700'

  return (
    <div className={`flex gap-4 p-3 rounded-xl w-fit h-fit ${background}`}>
      <div className={`relative w-10 h-10 bg-accent-2 overflow-clip ${round}`}>
        <Image src={image} alt='Card display image' fill />
      </div>
      <p className='text-title-lg text-neutral-100'>{title}</p>
    </div>
  )
}

export default ImageCard
