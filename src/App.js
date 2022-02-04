import React from 'react';

import {Cars, Comments, FormCar, Posts, User, Users} from "./components";
import css from './App.module.css'

const App = () => {
    return (
        <>
            <Posts/>
            <Comments/>
        </>
    );
};

export {App};