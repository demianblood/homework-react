import React from 'react';
import css from "./User.module.css"

const User = ({user,getUser}) => {
    const {id, name}= user;
    return (
        <div className={css.user}>
            <h4>{id}. {name}</h4>

            <button className={css.user__btn} onClick={()=>{getUser(user)}}> get details</button>
        </div>
    );
};

export default User;