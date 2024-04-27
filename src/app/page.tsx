'use client'

import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

import { MyGitHubReposSection } from '@/containers/home-page'

const Home: NextPage = () => {
  const [repos, setRepos] = useState<any>(null)
  const [reposIsLoading, setReposIsLoading] = useState(true)

  const fetchRepos = async () => {
    try {
      const response = await axios.get('https://api.github.com/users/WoraponK/repos')
      setRepos(response.data)
    } catch (error) {
      console.error('Error fetching repos:', error)
    } finally {
      setReposIsLoading(false)
    }
  }

  useEffect(() => {
    fetchRepos()
  }, [])

  console.log(repos)

  return (
    <div className='container mx-auto space-y-8 px-4'>
      <MyGitHubReposSection dataList={repos} loading={reposIsLoading} />
    </div>
  )
}

export default Home