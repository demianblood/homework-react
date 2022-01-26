import React from 'react';
import {Outlet} from "react-router-dom";
import {Header} from "../../components";

const Steam = () => {
    return (
        <>
            <Header/>
            <Outlet/>
        </>
    );
};

export {Steam};