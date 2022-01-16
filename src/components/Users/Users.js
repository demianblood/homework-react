import React, {useEffect, useState} from 'react';

import User from "../User/User";
import {userService} from "../../services/userService";

import css from "./Users.module.css"
const Users = ({getUser}) => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers(value))
    }, [])

    return (
        <div className={css.users}>
            {
                users.map(user => <User key={user.id} user={user} getUser={getUser}/>)
            }
        </div>
    );
};

export default Users;