import React from 'react';

import User from "../User/User";

import css from "./Users.module.css"

const Users = ({users}) => {

    return (
        <div className={css.users}>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;