import React, { useEffect,useState} from 'react'
import { service } from '../../Appwrite/service'
import Container from '../container/Container';
import PostCard from '../Components/PostCard';


function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        service.getPosts().then((post) =>{if(post) {setPosts(post.documents)}})
            .catch((error) => { console.log("error in getting post", error.message) })
    }, [])

    if (posts.length == 0) {
        return (<>
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Loading Posts

                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        </>
        )
    }
    return (

        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post)=>(
                        <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}


export default Home