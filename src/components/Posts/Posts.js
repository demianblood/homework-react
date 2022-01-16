import React, {useEffect, useState} from 'react';
import {postService} from "../../services/postService";
import Post from "../Post/Post";

const Posts = ({userId}) => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        postService.getByUserId(userId).then(posts => setPosts(posts))
    }, [userId])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;