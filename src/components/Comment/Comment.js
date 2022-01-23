import React from 'react';
import {Link} from "react-router-dom";

const Comment = ({comment, hover}) => {
    const {postId, id, name} = comment;
    return (
        <div>
            <div>
                <h4>{postId}.{id} - {name}</h4>
            </div>
            {!hover && <Link to={id.toString()} state={{...comment}}>
                <button> get details</button>
            </Link>}

        </div>
    );
};

export {Comment};