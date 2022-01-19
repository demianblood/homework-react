import React from 'react';
import {Outlet} from "react-router-dom"

import {Header} from "../Header/Header";
import {Footer} from "../Foooter/Footer";
import css from './Layout.module.css'

const Layout = () => {
    return (
        <>
            <Header/>
            <div className={css.outlet}>
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
        ;
};

export {Layout};