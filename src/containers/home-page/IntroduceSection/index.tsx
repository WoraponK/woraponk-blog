import React from 'react'
import Image from 'next/image'

// Images
import WoraponPortrait2PNG from '@/images/common/woraponk-portrait-2.png'

// Include in project
import { contact } from '@/utils/contact'

const details = {
    title: `Hi, I'm Worapon Klabsri`,
    summary:
        `I'm a Front-end Developer Intern, Ready and excited to learn new things about
        Software Development.`,
}

const IntroduceSection: React.FC = () => {
    return (
        <div className='w-full bg-dots-pattern grid grid-cols-2 relative overflow-hidden'>
            {/* ---------- mask ----------*/}
            <div className='w-[120%] h-36 bg-gradient-to-tr from-primary/40 to-dark absolute top-[-5rem] left-[-1rem] rotate-[-3deg]' />
            <div className='w-[120%] h-36 bg-dark absolute top-[-6rem] left-[-1rem] rotate-[-1.5deg]' />
            <div className='w-[120%] h-32 bg-gradient-to-bl from-primary to-dark absolute bottom-[-6rem] rotate-[-1.5deg] z-0' />
            {/* --------------------------*/}

            <div className='w-1/2 my-auto px-4 justify-self-end space-y-4 max-2xl:w-3/4 max-md:w-full'>
                <h2 className='line-clamp-2'>{details.title}</h2>
                <h5 className='text-dark'>{details.summary}</h5>
                <div className='flex space-x-4 text-2xl'>
                    {contact.map((ele, index) => {
                        const Icon = ele.Icon

                        return (
                            <a key={index} href={ele.href} target='_blank' className='transition-colors text-dark hover:text-light'>
                                <Icon />
                            </a>
                        )
                    })}
                </div>
            </div>
            <div className='flex'>
                <Image
                    src={WoraponPortrait2PNG}
                    alt='WoraponPortrait'
                    priority={true}
                    draggable={false}
                    className='grayscale brightness-125 transition-all duration-300 hover:scale-110 hover:grayscale-0'
                />
            </div>
        </div>
    )
}

export default IntroduceSection