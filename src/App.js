import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {NotFoundPage, PostsPage, UsersPage} from "./pages";
import {Layout} from "./components";
import {SingleUserPage} from "./pages/singlePages";


const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to='users'/>}/>
                    <Route path={'users'} element={<UsersPage/>}/>
                    <Route path={'users/:id'} element={<SingleUserPage/>}/>
                    <Route path={'posts'} element={<PostsPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Route>
            </Routes>

        </>
    );
};

export
{
    App
}
    ;