import { NextPage } from 'next'
import React from 'react'

import {
    ButtonSection,
    CardGithubSection,
} from '@/containers/demo-page'

const DemoPage: NextPage = () => {
    return (
        <div className='container mx-auto space-y-8 px-4'>
            <h2 className='text-light uppercase border-b border-light'>Demo page</h2>
            <ButtonSection />
            <CardGithubSection />
        </div>
    )
}

export default DemoPage