import React from 'react';

const Post = ({post}) => {
    const {userId, id, title} = post
    return (
        <div>
            <h3>{userId}.{id}</h3>
            <p>{title}</p>
        </div>
    );
};

export {Post};