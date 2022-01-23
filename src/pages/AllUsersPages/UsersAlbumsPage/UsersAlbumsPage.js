import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {userService} from "../../../service";
import {Album} from "../../../components";

const UsersAlbumsPage = () => {
    const [albums, setAlbums] = useState([]);
    const {userId} = useParams();

    useEffect(() => {
        userService.getUsersAlbums(userId).then(value => setAlbums(value));
    }, [userId])

    return (
        <div>
            <div>
                {
                    albums.map(album => <Album key={album.id} album={album}/>)
                }
            </div>
            <hr/>
            <Outlet/>
        </div>
    );
};

export {UsersAlbumsPage};