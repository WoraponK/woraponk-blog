import React from 'react'

import { FaSpinner } from "react-icons/fa";

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center pt-8'>
            <FaSpinner className='animate-spin' size={'30px'} />
        </div>
    )
}

export default LoadingSpinner