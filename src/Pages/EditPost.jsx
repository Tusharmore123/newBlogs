import React,{useState,useEffect} from "react";
import { service } from "../../Appwrite/service";
import Container  from "../container/container";
import { useNavigate ,useParams} from "react-router-dom";
import Post from "../Post-form/Post";

function EditPost() {
  
    const [post, setPosts] = useState(null)
    const slug = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPosts(post)
                }
            })
        } else {
            navigate('/')
        }
    }, [slug, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <Post post={post} />
        </Container>
    </div>
  ) : null
}
export default EditPost