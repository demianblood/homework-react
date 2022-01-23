import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post, hover}) => {
    const {userId, id, title} = post
    return (
        <div>
            <span>{userId}.{id} - {title} </span>
            {!hover &&<Link to={id.toString()} state={{...post}}>
                    <button>get details</button>
                </Link>}

        </div>
    );
};

export {Post};