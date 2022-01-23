import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const albumsService = {
    getAll: () => axiosService.get(urls.albums).then(value => value.data),
    getAlbumById: (id) => axiosService.get(`${urls.albums}/${id}`).then(value => value.data),
    getAlbumPhotos:(id)=>axiosService.get(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}