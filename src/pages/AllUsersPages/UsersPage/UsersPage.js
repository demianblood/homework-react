import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {userService} from "../../../service";
import {User} from "../../../components";
import css from "./UsersPage.module.css"


const UsersPage = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll().then(value => setUsers([...value]));
    }, [])
    return (
        <div className={css.page}>
            <div>{
                users.map(user => <User key={user.id} user={user}/>)
            }</div>
            <Outlet/>
        </div>
    );
};

export {UsersPage};