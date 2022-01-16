import React from 'react';
import css from "./User.module.css"

const User = ({user}) => {
    const {id, name, username, email} = user;
    return (
        <div className={css.user}>
            <h4>{id}. -- {name} -- {username} -- {email}</h4>
        </div>
    );
};

export default User;