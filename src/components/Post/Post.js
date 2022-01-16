import React from 'react';

const Post = ({post}) => {
    return (
        <div>
            <span>{post.id}. {post.title}</span>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;