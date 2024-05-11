import React from 'react'
import Image from 'next/image'

// Images
import WoraponPortraitPNG from '@/images/common/woraponk-portrait.png'

const details = {
    title: `Hi, I'm Worapon Klabsri`,
    description:
        `WoraponK`,
}

const IntroduceSection: React.FC = () => {
    return (
        <div className='w-full bg-primary grid grid-cols-2 relative overflow-hidden'>

            {/* ---------- mask ----------*/}
            <div className='w-[120%] h-32 bg-dark absolute top-[-6rem] left-[-1rem] rotate-[-1.5deg]' />
            <div className='w-[120%] h-32 bg-gradient-to-bl from-primary to-dark absolute bottom-[-6rem] rotate-[-1.5deg] z-0' />
            {/* ---------------------------------*/}

            <div className='w-1/2 my-20 px-4 justify-self-end space-y-4 max-2xl:w-3/4 max-md:w-full'>
                <h2 className='line-clamp-2'>{details.title}</h2>
                <h4 className='text-dark'>{details.description}</h4>
            </div>
            <div className='flex'>
                <Image
                    src={WoraponPortraitPNG}
                    alt='WoraponPortrait'
                    priority={true}
                    className='grayscale'
                />
                <p>Intern</p>
            </div>
        </div>
    )
}

export default IntroduceSection