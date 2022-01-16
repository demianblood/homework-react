import React from 'react';

import css from "./UserDetails.module.css"

const UserDetails = ({user, getUserId}) => {
    return (
        <div className={css.margin}>
            <h4>{user?.id}. {user?.name} ({user?.username})</h4>
            <span>{user?.email}</span>
            <h3>address:</h3>
            <ul>
                <li>street: {user?.address?.street}</li>
                <li>suite: {user?.address?.suite}</li>
                <li>city: {user?.address?.city}</li>
                <li>zipcode: {user?.address?.zipcode}</li>
            </ul>

            <button onClick={() => {
                getUserId(user.id)
            }}>get Posts
            </button>

        </div>
    );
};

export default UserDetails;