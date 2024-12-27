import React, { useEffect, useState } from 'react'
import { Container, PostCard, PostForm } from '../components'
import appwriteService from '../appwrite/configuration'
import { set } from 'react-hook-form'
import container from '../components/Container/Container'

function AllPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard />
            </div>
          ))}
        </div>
       </Container>
        
    </div>
  )
}

export default AllPosts