import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";

import {

    CommentsPage,
    NotFoundPage,
    PhotosPage, PostCommentsPage,
    PostsPage,
    UsersAlbumsPage,
    UsersPage,
    UsersPostsPage
} from "./pages";
import {Layout} from "./components";
import {PostDetailsPage, UserDetailsPage, CommentsDetailsPage} from "./pages/singlePages";


const App = () => {
    return (
        <>
            <Routes>
                <Route path={'/'} element={<Layout/>}>
                    <Route index element={<Navigate to='users'/>}/>
                    <Route path={'users'} element={<UsersPage/>}>
                        <Route path={':id'} element={<UserDetailsPage/>}>
                            <Route path={'posts'} element={<UsersPostsPage/>}/>
                        </Route>
                        <Route path={':userId/albums'} element={<UsersAlbumsPage/>}>
                            <Route path={':albumId/photos'} element={<PhotosPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'posts'} element={<PostsPage/>}>
                        <Route path={':id'} element={<PostDetailsPage/>}>
                            <Route path={'comments'} element={<PostCommentsPage/>}/>
                        </Route>
                    </Route>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':id'} element={<CommentsDetailsPage/>}/>
                    </Route>
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