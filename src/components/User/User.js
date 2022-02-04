import React from 'react';

const User = ({user}) => {
    const {id, name, userName, email} = user;
    return (
        <div>

            <h3>{id}.{name}</h3>
            <h4>{userName}</h4>
            <h5>{email}</h5>
        </div>
    );
};

export {User};