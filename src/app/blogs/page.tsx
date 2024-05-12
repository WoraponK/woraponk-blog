'use client'

import { NextPage } from 'next'
import React, { useState, useEffect } from 'react'
import { db } from '@/lib/firebase'
import { collection, getDocs } from 'firebase/firestore'

import { HeaderSection } from '@/containers/blogs-page'

const BlogPage: NextPage = () => {
    // const [todos, setTodos] = useState([])


    // useEffect(() => {
    //     const fetchTodos = async () => {
    //         try {
    //             const collectionRef: any = await getDocs(collection(db, 'Blogs'))
    //             const arr = collectionRef.docs.map((doc: any) => doc.data())
    //             setTodos(arr)
    //         } catch (error) {
    //             console.error(error)
    //         }
    //     }

    //     fetchTodos()
    // }, [])
    return (
        <div>
            <HeaderSection />
        </div>
    )
}

export default BlogPage