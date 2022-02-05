import React from 'react';
import {Route, Routes} from "react-router-dom";


import {Comments, Posts, Users, Cars} from "./pages";
import {Layout} from "./components";


const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route path={'users'} element={<Users/>}/>
                    <Route path={'posts'} element={<Posts/>}/>
                    <Route path={'comments'} element={<Comments/>}/>
                    <Route path={'cars'} element={<Cars/>}/>
                </Route>
            </Routes>

        </>
    );
};

export {App};