import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router-dom'
import { service } from '../../Appwrite/service'
import PostForm from '../Components/Post form/PostForm';
import Container from '../container/Container';

function EditPost() {
    const {slug}=useParams();
    const [post,setPost]=useState(null)
    useEffect(()=>{
        
            if(slug){

                service.getPost(slug).then((values)=>{
                    if (values){

                        setPost(values)
                    }
                }
    )}
        

    },[])
  return post?(
    <div className='py-8'>
        <Container>

        <PostForm post={post}/>
        </Container>
    </div>
  ):null;
}

export default EditPost