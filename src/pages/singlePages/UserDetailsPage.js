import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";

import {userService} from "../../service";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";
import {UsersPostsPage} from "../AllUsersPages/UsersPostsPage/UsersPostsPage";

const UserDetailsPage = () => {
        const [user, setUser] = useState(null);
        const [posts, setPosts] = useState(false);

        const {id} = useParams();
        const {state} = useLocation();

        const showPost = () => {
            setPosts(!posts)
        }

        useEffect(() => {
            if (state === null) {
                userService.getUserById(id).then(value => setUser(value));
            } else {
                setUser(null)
            }
        }, [id]);
        return (
            <div>
                <div>
                    {state && <div>
                        <h4>{state.id}. User name : {state.name}</h4>
                        <h5> Real user name -- {state.username}</h5>
                        <ul>
                            Contact:
                            <li>email: {state.email}</li>
                            <li>phone: {state.phone}</li>
                            <li>address: {state.address.city}.{state.address.street} {state.address.suite} </li>
                        </ul>
                        <hr/>
                        <button onClick={() => {
                            showPost()
                        }}>posts
                        </button>
                    </div>}

                    {user && <div>
                        <h4>{id}. User name : {user.name}</h4>
                        <h5> Real user name -- {user.username}</h5>
                        <ul>
                            Contact:
                            <li>email: {user.email}</li>
                            <li>phone: {user.phone}</li>
                            <li>address: {user.address.city}.{user.address.street} {user.address.suite} </li>
                        </ul>
                        <hr/>
                        <button onClick={() => {
                            showPost()
                        }}> get posts
                        </button>

                    </div>}
                    <hr/>
                    {(id > 10 || id < 1) && <NotFoundPage/>}
                </div>
                {posts && <UsersPostsPage/>}
            </div>);
    }
;

export {UserDetailsPage};