import React from 'react';
import "./comment.css"

const Comment = ({comment}) => {
    return (
        <div>
            {comment.postId}.{comment.id} - {comment.name}
        </div>
    );
};

export default Comment;