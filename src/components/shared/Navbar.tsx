import React from 'react'

import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='border-b border-secondary bg-dark/80 backdrop-blur-sm py-4 px-4 sticky top-0'>
      <div className='container mx-auto flex justify-between items-center'>
        <Link href={'/'}>
          <h4 className='text-primary transition-colors hover:text-primary/95'>WoraponK</h4>
        </Link>
        <div className='space-x-6 text-light uppercase font-semibold max-md:hidden'>
          <Link href={'/demo'} className='transition-colors hover:text-primary'>Demo</Link>
          <Link href={'/portfolio'} className='transition-colors hover:text-primary'>Portfolio</Link>
          <Link href={'/blogs'} className='transition-colors hover:text-primary'>Blogs</Link>
          <Link href={'/contact'} className='transition-colors hover:text-primary'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar