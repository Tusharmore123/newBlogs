import React from 'react'
import { Link } from 'react-router-dom'
import { service } from '../../Appwrite/service'

function PostCard({$id,image,title}) {
  return (  
    <Link to={`/post/${$id}`}>
      {console.log("image",image)}
         <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={service.getPreview(image)} alt={title}
                className='rounded-xl' />

            </div>
            <h2
            className=' xs:text-sm md:text-xl  font-bold dl:text-xs'
            >{title}</h2>
        </div>
    </Link>
    
  )
}

export default PostCard