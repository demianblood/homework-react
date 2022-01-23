import React from 'react';
import {Link} from "react-router-dom";

const User = ({user}) => {
    const {id, name, username} = user;
    return (
        <div>
            <span>{id}.{name}-{username} </span>
            <Link to={id.toString()} state={{...user}}><button>get details</button></Link>
            <Link to={`${id}/albums`} ><button>get albums</button></Link>
        </div>
    );
};

export {User};