'use client'

import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

import { IntroduceSection } from '@/containers/home-page'

const Home: NextPage = () => {
  const [todos, setTodos] = useState([])


  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const collectionRef: any = await getDocs(collection(db, 'Blogs'))
        const arr = collectionRef.docs.map((doc: any) => doc.data())
        setTodos(arr)
      } catch (error) {
        console.error(error)
      }
    }

    fetchTodos()
  }, [])



  return (
    <div>
      <IntroduceSection />
    </div>
  )
}

export default Home