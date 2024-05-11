import React from 'react'

import { Button } from '@/components/base'

const ButtonSection: React.FC = () => {
    return (
        <div className='space-y-3'>
            <h4>Button</h4>
            <p>The <code>Button</code> has props text, color, size, fullWidth, and onClick</p>
            <div className='bg-black p-8 rounded-lg flex flex-wrap justify-center items-center gap-8'>
                <Button text='test' color='primary' />
                <Button text='test' color='secondary' />
                <Button text='test' color='transparent-bordered' />
                <Button text='test' color='transparent' />
            </div>
        </div>
    )
}

export default ButtonSection