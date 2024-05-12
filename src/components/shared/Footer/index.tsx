import React from 'react'

// Include in project
import { contact } from '@/utils/contact'

const Footer: React.FC = () => {
  return (
    <div className='border-t border-secondary py-6'>
      <div className='container mx-auto flex justify-between items-center'>
        <p className='text-light/70'>© Developed by <span className='text-primary font-bold'>WoraponK</span></p>
        <div className='flex justify-center items-center space-x-4'>
          {contact.map((ele, index) => (
            <a key={index} href={ele.href} target='_blank' className='text-light/70 transition-colors hover:text-primary'>{ele.title}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Footer