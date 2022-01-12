import React from 'react';

import './user.css'

const User = ({user}) => {
    return (
        <div>
            {user.id}.{user.name}-{user.username}
        </div>
    );
};

export default User;