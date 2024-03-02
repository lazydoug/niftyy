import Link from 'next/link'
import Image from 'next/image'

import logo from '@/assets/logo.png'

function NavBar() {
  return (
    <header className='px-6 bg-neutral-100'>
      <nav className='h-[88px] border-b border-neutral-300 flex justify-between items-center'>
        <div className='relative w-36 h-10'>
          <Link href='/'>
            <Image src={logo} alt='Niftyy brand logo' fill />
          </Link>
        </div>
        <button className='relative w-6 h-3 '>
          <svg
            width='24'
            height='12'
            viewBox='0 0 24 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <rect width='24' height='3' rx='1.5' fill='#202025' />
            <rect y='9' width='18' height='3' rx='1.5' fill='#202025' />
          </svg>
        </button>
      </nav>
    </header>
  )
}

export default NavBar
