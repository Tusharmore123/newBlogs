import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { service } from '../../Appwrite/service'
import { useSelector } from 'react-redux';
import parse  from 'html-react-parser';
import Container from '../container/Container';
import {Link} from 'react-router-dom';
import Button from './button';

function Post() {
    const {slug}=useParams();

    const userData=useSelector((state)=>state.auth.userData);
    const [posts,setPost]=useState(null)
    const isAuth=posts?posts.userId==userData.$id:false;
    
    const navigate=useNavigate()
    useEffect(()=>{
        if(slug){
            
            service.getPost(slug).then(
            (data)=>{
                console.log('data',data)
                    if(data){
                    setPost(data)
                }
                else{
                    navigate('/')
                }
            }
            )
        }
        else{
            navigate('/')
        }

    },[slug,navigate])
    const deletePost=()=>{
        console.log('called');
        service.deletePost(posts.$id).then((status)=>
            {if (status) {
                service.deleteFile(posts.image);
                navigate('/')
            }})
        }
        return posts?(<div className="py-8 ">
        <Container>
            <div className="w-1/3 flex justify-center mb-4   mr-20 relative border rounded-xl p-2">
                {console.log('post image',posts.image,posts)}
                <img
                    src={service.getPreview(posts.image)}
                    alt={posts.title}
                    className="rounded-xl dl:w-full xs:w-1/2 md:w-full"
                />
                <br/>
                
            </div>
            <div className="md:w-1/2 mb-6 dl:w-full">
                <h1 className="md:text-2xl sm:text-xl dl-text-lg font-bold">{posts.title}</h1>
            
            <div className="browser-css">
                {posts.content?parse(posts.content):null}
                </div>
            </div>
            
        </Container>
                {isAuth && (
                    <div className=" w-full flex justify-center dl:flex-col xs:flex-row gap-1 ">
                        {console.log(posts)}
                        <Link to={`/edit-post/${posts.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3 text-black dl:h-10 dl:w-full xs:w-32 text-center">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500 " className='text-black dl:h-10 dl:w-full xs:w-32 text-center' onClick={deletePost} >
                           Delete
                        </Button>
                    </div>
                )}
    </div>
    ):null;
  
}

export default Post