import React from 'react'

import { TbFidgetSpinner } from "react-icons/tb";

const LoadingSpinner: React.FC = () => {
    return (
        <div className='flex flex-col justify-center items-center space-y-2 pt-8 animate-pulse'>
            <TbFidgetSpinner className='animate-spin' size={'30px'} />
            <p>Loading . . .</p>
        </div>
    )
}

export default LoadingSpinner