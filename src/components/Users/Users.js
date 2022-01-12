import React, {useEffect, useState} from 'react';

import './users.css'
import {getUsers} from "../../service/jsonService";
import User from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers().then(value => setUsers(value.data));
    }, [])
    return (
        <div className='users'>
            {
                users.map(users =>
                    <User key={users.id} user={users}/>
                )
            }
        </div>
    );
};

export default Users;