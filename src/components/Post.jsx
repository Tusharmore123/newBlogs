import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { service } from '../../Appwrite/service'
import { useSelector } from 'react-redux';
import parse  from 'html-react-parser';
import Container from '../container/Container';
import {Link} from 'react-router-dom';
import Button from './Button';

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
        return posts?(<div className="py-8">
        <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                {console.log('post image',posts.image,posts)}
                <img
                    src={service.getPreview(posts.image)}
                    alt={posts.title}
                    className="rounded-xl"
                />

                {isAuth && (
                    <div className="absolute right-6 top-6">
                        {console.log(posts)}
                        <Link to={`/edit-post/${posts.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deletePost} >
                           Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-6">
                <h1 className="text-2xl font-bold">{posts.title}</h1>
            </div>
            <div className="browser-css">
                {posts.content?parse(posts.content):null}
                </div>
        </Container>
    </div>
    ):null;
  
}

export default Post