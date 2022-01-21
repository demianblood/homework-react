import React, {useEffect, useState} from 'react';

import {userService} from "../../service";
import {User} from "../../components";

const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, [])
    return (
        <div>
            <div>{
                users.map(user => <User key={user.id} user={user}/>)
            }</div>

        </div>
    );
};

export {UsersPage};