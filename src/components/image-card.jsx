import Image from 'next/image'

/**
 * @param {string} title The title of the card
 * @param {string} image The avatar for the card
 * @param {boolean} round Indicates whether the avatar is round
 * @returns {JSX.Element} A card element with an image (avatar) and a title
 */
function ImageCard({ title, image, round }) {
  const borderRadius = (round && 'rounded-full') || 'rounded-xl'
  return (
    <div className='flex gap-4 p-3 rounded-xl w-fit h-fit bg-neutral-700'>
      <div
        className={`relative w-10 h-10 bg-accent-2 overflow-clip ${borderRadius}`}>
        <Image src={image} alt='Card display image' fill />
      </div>
      <p className='text-title-lg text-neutral-100'>{title}</p>
    </div>
  )
}

export default ImageCard
