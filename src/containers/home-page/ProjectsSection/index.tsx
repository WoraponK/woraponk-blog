'use client'

import React from 'react'
import Link from 'next/link';

// Include in project
import CoverFlow from '@/components/shared/CoverFlow';
import { Button } from '@/components/base';
import { TReccomendedProject } from '@/utils/type';

type Props = {
    dataList: TReccomendedProject[]
}

const ProjectsSection: React.FC<Props> = ({ dataList }) => {
    return (
        <div className='flex flex-col space-y-6 items-center'>
            <div className='space-y-2'>
                <h4 className='text-center'>My Projects</h4>
                <p>Practice is the best for your skills, So you should practice again and again</p>
            </div>
            <CoverFlow dataList={dataList} />
            <Link href={'/projects'}>
                <Button text='VIEW MORE' className='w-fit font-semibold rounded-full' size='lg' />
            </Link>
        </div>
    )
}

export default ProjectsSection