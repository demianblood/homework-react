import React from 'react';
import {Link} from "react-router-dom";

const Album = ({album}) => {
    const {userId, id, title} = album;

    return (
        <div>
            <div>
                <span>{userId}.{id}--{title}</span>
                <Link to={`${id}/photos`}>
                    <button>get photos</button>
                </Link>
            </div>

        </div>
    );
};

export {Album};