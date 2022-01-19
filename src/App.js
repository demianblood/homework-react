import React from 'react';
import {Routes, Route} from "react-router-dom";

import css from './App.module.css'
import {AboutPage, AlbumsPage, CommentsPage, HomePage, NotFoundPage, PhotosPage, PostsPage, UsersPage} from "./pages";
import {Layout} from "./component/Layout/Layout";

const App = () => {
    return (
        <>

            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/users'} element={<UsersPage/>}/>
                    <Route path={'/posts'} element={<PostsPage/>}/>
                    <Route path={'/comments'} element={<CommentsPage/>}/>
                    <Route path={'/albums'} element={<AlbumsPage/>}/>
                    <Route path={'/photos'} element={<PhotosPage/>}/>
                    <Route path={'/about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                </Route>
            </Routes>
        </>
    );
};

export default App;