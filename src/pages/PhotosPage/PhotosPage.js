import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {albumsService} from "../../service";
import {Photo} from "../../components";

const PhotosPage = () => {
    const [photos, setPhotos] = useState([]);
    const {albumId} = useParams();
    useEffect(() => {
        albumsService.getAlbumPhotos(albumId).then(value => setPhotos(value));
    }, [albumId])
    return (
        <div>
            {photos.map(photo => <Photo key={photo.id} photo={photo}/>)}
        </div>
    );
};

export {PhotosPage};