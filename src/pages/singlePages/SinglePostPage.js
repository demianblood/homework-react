import React from 'react';

const SinglePostPage = ({post}) => {
    const {userId, id, title, body} = post
    return (
        <div>
            <h3>{userId}.{id} - {title}</h3>
            <p>{body}</p>

        </div>
    );
};

export {SinglePostPage};