import React, {useEffect, useState} from 'react';
import './posts.css'
import {getPosts} from "../../service/jsonService";
import Post from "../Post/Post";

const Posts = () => {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        getPosts().then(value => setPosts(value.data))
    }, [])
    return (
        <div className='posts'>{
            posts.map(posts =>
                <Post key={posts.id} post={posts}/>
            )
        }
        </div>
    );
};

export default Posts;