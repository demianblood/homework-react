import React from 'react';
import "./post.css"

const Post = ({post}) => {
    return (
        <div>
            {post.userId}.{post.id} - {post.title}
        </div>
    );
};

export default Post;