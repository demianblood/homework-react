import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {userService} from "../../../service";
import {Post} from "../../../components";

const UsersPostsPage = () => {
    const [posts, setPosts] = useState([]);
    const {id} = useParams();
    const hover = true

    useEffect(() => {
        userService.getUserPosts(id).then(value => setPosts(value));
    }, [id])

    return (
        <div>
            <div>
                {posts.map(post => <Post key={post.id} post={post} hover={hover}/>)}
            </div>
            <hr/>
        </div>
    );
};

export {UsersPostsPage};