'use client'

import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'

// Include in project
import { ContentWrapper } from '@/components/shared'
import { TReccomendedProject } from '@/utils/type'
import {
  IntroduceSection,
  DevelopSkillSection,
  ProjectsSection,
} from '@/containers/home-page'

const Home: NextPage = () => {
  return (
    <div className='flex flex-col space-y-16'>
      <IntroduceSection />
      <ContentWrapper>
        <DevelopSkillSection />
      </ContentWrapper>
      <ProjectsSection dataList={recProjectList} />
    </div>
  )
}

export default Home

const recProjectList: TReccomendedProject[] = [
  {
    id: 'project-title-1',
    title: 'TITLE1',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id enim rerum sed fuga culpa quos nam ab asperiores odio!',
    tools: ['HTML', 'CSS', 'TailwindCSS'],
    href: '#',
    background_image: 'https://w0.peakpx.com/wallpaper/6/1017/HD-wallpaper-spongebob-squarepants-battle-for-bikini-bottom-rehydrated.jpg',
  },
  {
    id: 'project-title-2',
    title: 'TITLE2',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    tools: ['HTML', 'CSS', 'TailwindCSS', 'Firebase', 'Typescript'],
    href: '#',
    background_image: 'https://i.pinimg.com/736x/fb/f2/84/fbf2844b619fd6e0808f162c0ac21785.jpg',
  },
  {
    id: 'project-title-3',
    title: 'TITLE3',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere id enim rerum sed fuga culpa quos nam',
    tools: ['HTML', 'CSS', 'TailwindCSS', 'Express', 'Typescript', 'Javascript'],
    href: '#',
    background_image: 'https://wallpapers.com/images/featured/spongebob-x2193safrzp55yqs.jpg',
  },
]