import React, {useEffect} from 'react';
import {Post} from "../Post/Post";
import {useDispatch, useSelector} from "react-redux";
import {getAllPosts} from "../../store";

const Posts = () => {
    const {posts} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts());
    }, [])
    return (
        <div>
            {posts?.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};