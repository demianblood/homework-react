import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name} = comment
    return (
        <div>
            <h4>{postId}.{id}</h4>
            <h3>{name}</h3>

        </div>
    );
};

export {Comment};