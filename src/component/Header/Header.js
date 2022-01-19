import React from 'react';
import css from "./Header.module.css";
import {Link, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.header}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/posts">Posts</NavLink>
            <NavLink to="/comments">Comments</NavLink>
            <NavLink to="/albums">Albums</NavLink>
            <NavLink to="/photos">Photos</NavLink>
            <NavLink to="/about">About</NavLink>
        </div>
    );
};

export {Header};