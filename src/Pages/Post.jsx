import React,{useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import { service } from '../../Appwrite/service'
import {useParams,useNavigate} from 'react-router-dom'
import Container from '../container/container'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
function Post() {
const userData=useSelector((state)=>state.auth.userData)
const slug=useParams();
console.log(slug)
const navigate=useNavigate();
const [post,setPost]=useState([]);
const isAuth= post && userData?post.userId===userData.$id:false
console.log(isAuth);
useEffect(()=>{
    if(slug){
        service.getPost(slug).then((posts)=>{if(posts){setPost(posts)
        {console.log(post)}
        }
    else{
        navigate('/')
    }})
        

        }
    else{
        navigate('/')
    }
    
},[slug,navigate])
const deletePost = () => {
    service.deletePost(post.$id).then((status) => {
        if (status) {
            service.deleteFile(post.featuredImage);
            navigate("/");
        }
    });
};

return post ? (
    <div className="py-8">
        <Container>
            <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
                <img
                    src={service.getPreview(post.featuredImage)}
                    alt={post.title}
                    className="rounded-xl"
                />

                {isAuth && (
                    <div className="absolute right-6 top-6">
                        {console.log(post)}
                        <Link to={`/edit-post/${post.$id}`}>
                            <Button bgColor="bg-green-500" className="mr-3">
                                Edit
                            </Button>
                        </Link>
                        <Button bgColor="bg-red-500" onClick={deletePost}>
                            Delete
                        </Button>
                    </div>
                )}
            </div>
            <div className="w-full mb-6">
                <h1 className="text-2xl font-bold">{post.title}</h1>
            </div>
            <div className="browser-css">
                {parse(post.content)}
                </div>
        </Container>
    </div>
) : null;
}
  

export default Post