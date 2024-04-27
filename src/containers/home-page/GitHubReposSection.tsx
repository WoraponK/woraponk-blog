'use client'

import React, { useState, Suspense } from 'react'

import { TGithubRepos } from '@/utils/type'
import {
    CardGithub,
    LoadingSpinner,
} from '@/components/shared'
import { Button } from '@/components/base'

type Props = {
    dataList: TGithubRepos[]
    loading: boolean
}

const MyGitHubReposSection: React.FC<Props> = ({ dataList, loading }) => {
    const [visibleItems, setVisiblesItems] = useState(9)
    const remainingItems = dataList?.length > 0 ? dataList.length - visibleItems : 0

    const toggleClickShow = () => {
        if (visibleItems === dataList.length) {
            setVisiblesItems(9)
        } else {
            setVisiblesItems(dataList.length)
        }
    }

    return (
        <div className='space-y-4'>
            <h4>GitHub Repositories</h4>
            {loading && (
                <LoadingSpinner />
            )}
            {dataList?.length > 0 && (
                <>
                    <div className='grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                        {dataList.slice(0, visibleItems)?.map((ele, _) => (
                            <CardGithub
                                key={ele?.id}
                                name={ele.name}
                                html_url={ele?.html_url}
                                language={ele?.language}
                                forks_count={ele?.forks_count}
                                watchers_count={ele?.watchers_count}
                                stargazers_count={ele?.stargazers_count}
                            />
                        ))}
                    </div>
                    <Button
                        onClick={toggleClickShow}
                        text={remainingItems > 0 ? 'Show All' : 'Show Less'}
                        color='transparent'
                        className='font-bold'
                        fullWidth
                    />
                </>
            )}
        </div>
    )
}

export default MyGitHubReposSection