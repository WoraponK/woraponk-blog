'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'

import { IoMdClose } from "react-icons/io"

import { path } from '@/utils/path'

type Props = {
    active: boolean
    setActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Sidebar: React.FC<Props> = ({ active, setActive }) => {
    const toggleActive = () => setActive(!active)

    return (
        <div className={`z-30 h-screen fixed top-0 right-0 md:hidden bg-dark/80 border-l-2 border-l-primary/50 backdrop-blur-md transition-all px-4 overflow-hidden ${active ? 'w-1/2 max-sm:w-full opacity-100' : 'w-0 opacity-0'}`}>
            <div className='flex justify-end items-center py-12'>
                <div className='text-light text-3xl md:hidden transition-colors active:bg-secondary rounded-full p-1 cursor-pointer' onClick={toggleActive}>
                    <IoMdClose />
                </div>
            </div>
            <div className='flex flex-col space-y-8 text-light text-center'>
                {path.map((ele: any, index) => (
                    <Link key={index} href={ele.href} className='transition-colors hover:text-primary text-4xl' onClick={toggleActive}>{ele.title}</Link>
                ))}
            </div>
        </div>
    )
}

export default Sidebar