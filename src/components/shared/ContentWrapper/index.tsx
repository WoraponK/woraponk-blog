import React from 'react'

type Props = {
    children: React.ReactNode
}

const ContentWrapper: React.FC<Props> = ({ children }) => {
    return (
        <div className='container mx-auto'>
            {children}
        </div>
    )
}

export default ContentWrapper