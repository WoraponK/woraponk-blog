import React from 'react'

import { CardGithub } from '@/components/shared'

const cardExample = [
    {
        name: 'EXAMPLE_1',
        html_url: 'EXAMPLE_1',
        language: 'HTML',
        forks_count: 13,
        watchers_count: 122,
        stargazers_count: 3000,
    },
    {
        name: 'EXAMPLE_2',
        html_url: 'EXAMPLE_2',
        language: 'Vue',
        forks_count: 55,
        watchers_count: 13,
        stargazers_count: 12,
    },
    {
        name: 'EXAMPLE_3',
        html_url: 'EXAMPLE_3',
        language: 'TypeScript',
        forks_count: 2,
        watchers_count: 5,
        stargazers_count: 15,
    },
    {
        name: 'EXAMPLE_4',
        html_url: 'EXAMPLE_4',
        language: 'JavaScript',
        forks_count: 0,
        watchers_count: 1,
        stargazers_count: 1,
    },
]

const CardGithubSection: React.FC = () => {
    return (
        <div className='space-y-3'>
            <h4>CardGithub</h4>
            <p>The <code>CardGithub</code> has props name, html_url, language, forks_count, watchers_count, and stargazers_count</p>
            <div className='grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                {cardExample.map((ele, index) => (
                    <CardGithub
                        key={index}
                        name={ele.name}
                        html_url={ele.html_url}
                        language={ele.language}
                        forks_count={ele.forks_count}
                        watchers_count={ele.watchers_count}
                        stargazers_count={ele.stargazers_count}
                    />
                ))}
            </div>
        </div>
    )
}

export default CardGithubSection