import React ,{useState} from "react";
import { Container, PostForm } from '../components'



function AddPost() {
    const [post, setPosts] = useState(null);
    
    return (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    )
}

export default AddPost
