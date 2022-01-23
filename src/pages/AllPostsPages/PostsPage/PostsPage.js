import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {Post} from "../../../components";
import css from './PostPage.module.css'
import {postService} from "../../../service";

const PostsPage = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.getAll().then(value => setPosts([...value]))
    }, [])
    return (
        <div className={css.page}>
            <div>{
                posts.map(post => <Post key={post.id} post={post}/>)
            }</div>
            <Outlet/>
        </div>
    );
};

export {PostsPage};