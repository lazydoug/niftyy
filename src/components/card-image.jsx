import Image from 'next/image'

function CardImageCircle({ title, image }) {
  return (
    <div className='flex gap-4 p-3 rounded-xl w-fit h-fit bg-neutral-700'>
      <div className='relative w-10 h-10 bg-accent-2 rounded-full overflow-clip '>
        <Image src={image} alt='Card display image' fill />
      </div>
      <p className='text-title-lg text-neutral-100'>{title}</p>
    </div>
  )
}
function CardImageSquare({ title, image, className }) {
  const style = className || ''
  return (
    <div
      className={`flex gap-4 p-3 rounded-xl w-fit bg-neutral-700 ${style}`}>
      <div className='relative w-10 h-10 bg-accent-2 rounded-lg overflow-clip '>
        <Image src={image} alt='Card display image' fill />
      </div>
      <p className='text-title-lg text-neutral-100'>{title}</p>
    </div>
  )
}

export { CardImageSquare, CardImageCircle }
