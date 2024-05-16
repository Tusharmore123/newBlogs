import React, { useEffect,useState } from 'react'
import { service } from '../../Appwrite/service';
import PostCard from '../Components/PostCard';
import Container from '../container/Container';

function AllPosts() {
    const [posts,setPost]=useState([]);
    useEffect(()=>{
        (async()=>{
            const allPosts=await service.getPosts()
            setPost(allPosts.documents);
        })()
    },[])
  return (
    <div className='w-full py-8'>
        <Container>
        <div className='flex flex-wrap'></div>
        {console.log(posts)}
        {posts?posts.map((post)=>{
            return(
                <div key={post.$id} className='p-2 w-1/4'>
                <PostCard {...post}/>
                </div>
            )
        }):null}
        </Container>
    </div>
  )
}

export default AllPosts