'use client'

import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { MyGitHubReposSection } from '@/containers/projects-page'

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
    <div className='container mx-auto space-y-8 px-4'>
      <MyGitHubReposSection dataList={githubRepos} loading={githubReposIsLoading} />
    </div>
  )
}

export default ProjectsPage