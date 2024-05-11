import React from 'react'

import { IoLogoGithub, IoMdEye, IoIosStar } from "react-icons/io";
import { TbGitFork } from "react-icons/tb";

type Props = {
    name: string,
    html_url: string,
    language: string,
    watchers_count: number,
    forks_count: number,
    stargazers_count: number,
}

const CardGithub: React.FC<Props> = ({
    name,
    html_url,
    language,
    watchers_count,
    forks_count,
    stargazers_count,
}) => {
    const countInfo = [
        {
            icon: <IoMdEye />,
            name: 'Watches',
            count: watchers_count,
        },
        {
            icon: <IoIosStar />,
            name: 'Stargazers',
            count: stargazers_count,
        },
        {
            icon: <TbGitFork />,
            name: 'Forks',
            count: forks_count,
        },
    ]

    return (
        <a href={html_url} target='_blank'>
            <div className='border border-light/10 rounded-lg p-4 space-y-2 bg-stone-900 transition-colors hover:bg-stone-800'>
                <div className='flex justify-between items-center'>
                    <p className='uppercase text-sm text-light/60'>public</p>
                    <div className='space-x-4 flex max-sm:hidden'>
                        {countInfo.map((ele, index) => (
                            <div key={index} className='flex justify-end items-center space-x-1' title={`${ele.name}: ${ele.count}`}>
                                {ele.icon}
                                <p>{ele.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex space-x-2'>
                    <IoLogoGithub size={'25px'} />
                    <h6 className='line-clamp-1 break-words' title={name}>{name}</h6>
                </div>
                <div className='flex justify-end max-sm:justify-start'>
                    <p className='text-sm'>
                        Most Language: {language ? (<span className='text-primary font-bold'>{language}</span>) : (<span className='text-light/50 font-bold'>Null</span>)}
                    </p>
                </div>
            </div>
        </a>
    )
}

export default CardGithub