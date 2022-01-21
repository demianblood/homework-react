import React, {useEffect, useState} from 'react';

import {postService} from "../../service/postService";
import {Post} from "../../components";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div>
            <div>{
                posts.map(post => <Post key={post.id} post={post}/>)
            }</div>
        </div>
    );
};

export {PostsPage};