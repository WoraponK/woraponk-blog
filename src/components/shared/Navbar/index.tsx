'use client'

import React, { useState } from 'react'
import Link from 'next/link'

import { BiMenuAltRight } from "react-icons/bi"

import { path } from '@/utils/path'
import { Sidebar } from '@/components/shared/'

const Navbar: React.FC = () => {
  const [active, setActive] = useState<boolean>(false)

  const toggleActive = () => setActive(!active)

  return (
    <>
      <div className='bg-dark/20 backdrop-blur-sm py-6 px-4 sticky top-0 z-50'>
        <div className='container mx-auto flex justify-between items-center'>
          <Link href={'/'}>
            <div className='group'>
              <h4 className='text-light transition-colors group-hover:text-primary/95'>WORAPON<span className='text-primary font-bold group-hover:animate-pulse'>K</span></h4>
              <div className='h-[1px] w-0 transition-all duration-300 bg-primary group-hover:w-full' />
            </div>
          </Link>
          <div className='space-x-6 text-light uppercase font-semibold max-md:hidden'>
            {path.map((ele: any, index) => (
              <Link key={index} href={ele.href} className='transition-colors hover:text-primary hover:animate-pulse'>{ele.title}</Link>
            ))}
          </div>
          <div className='text-light text-3xl md:hidden transition-colors active:bg-secondary rounded-full p-1 cursor-pointer' onClick={toggleActive}>
            <BiMenuAltRight />
          </div>
        </div>
      </div>
      <Sidebar active={active} setActive={setActive} />
    </>
  )
}

export default Navbar