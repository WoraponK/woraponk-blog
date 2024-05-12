'use client'

import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Include in project
import { ContentWrapper } from '@/components/shared'
import { TReccomendedProject } from '@/utils/type'
import {
  HeaderSection,
  RecommendedProjectSection,
  MyGitHubReposSection,
} from '@/containers/projects-page'

const ProjectsPage: NextPage = () => {
  const [githubRepos, setGithubRepos] = useState<any>(null)
  const [githubReposIsLoading, setGithubReposIsLoading] = useState(true)

  const fetchRepos = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/WoraponK/repos')
      setGithubRepos(response.data)
    } catch (error) {
      console.error('Error fetching repos:', error)
    } finally {
      setGithubReposIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  return (
    <div className='flex flex-col space-y-16'>
      <HeaderSection />
      <RecommendedProjectSection dataList={recProjectList} />
      <ContentWrapper>
        <MyGitHubReposSection dataList={githubRepos} loading={githubReposIsLoading} />
      </ContentWrapper>
    </div>
  )
}

export default ProjectsPage



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