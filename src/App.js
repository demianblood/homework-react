import React from 'react';
import {Routes, Route} from "react-router-dom";

import css from './App.module.css'

const App = () => {
    return (
        <>
            <div className={css.header}>
                <a href="/home">Home</a>
                <a href="/users">Users</a>
                <a href="/posts">Posts</a>
                <a href="/comments">Comments</a>
                <a href="/albums">Albums</a>
                <a href="/photos">Photos</a>
                <a href="/about">About</a>

            </div>

        </>
    );
};

export default App;