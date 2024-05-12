import React from 'react'

// Images
import { FaStar } from "react-icons/fa";

// Include in project
import CoverFlow from '@/components/shared/CoverFlow';
import { TReccomendedProject } from '@/utils/type';

type Props = {
    dataList: TReccomendedProject[]
}

const RecommendedProjectSection: React.FC<Props> = ({ dataList }) => {
    return (
        <div className='flex flex-col space-y-4'>
            <h4 className='container mx-auto flex gap-2'><FaStar className='text-primary' />Recommended Projects</h4>
            <CoverFlow dataList={dataList} />
        </div>
    )
}

export default RecommendedProjectSection