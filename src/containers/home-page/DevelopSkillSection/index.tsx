import React from 'react'

// Images
import { SiJavascript, SiReact, SiTypescript, SiTailwindcss, SiSass, SiHtml5, SiCss3, SiPostman, SiFigma, SiGithub } from "react-icons/si";

const skills = [
    {
        icon: SiHtml5,
        alt: 'HTML',
    },
    {
        icon: SiCss3,
        alt: 'CSS',
    },
    {
        icon: SiJavascript,
        alt: 'JavaScript',
    },
    {
        icon: SiTypescript,
        alt: 'TypeScript',
    },
    {
        icon: SiReact,
        alt: 'React',
    },
    {
        icon: SiTailwindcss,
        alt: 'TailwindCSS',
    },
    {
        icon: SiSass,
        alt: 'Sass',
    },
    {
        icon: SiPostman,
        alt: 'Postman',
    },
    {
        icon: SiFigma,
        alt: 'Figma',
    },
    {
        icon: SiGithub,
        alt: 'GitHub',
    },
]

const DevelopSkillSection: React.FC = () => {
    return (
        <div className='flex flex-col space-y-6'>
            <h4 className='text-center'>Technologies I use & love!</h4>
            <div className='flex gap-8 justify-center item flex-wrap'>
                {skills.map((skill, index) => {
                    const Icon = skill.icon
                    return (
                        <Icon key={index} className='text-4xl transition-colors hover:text-primary hover:animate-pulse' title={skill.alt} />
                    )
                })}
            </div>
        </div>
    )
}

export default DevelopSkillSection