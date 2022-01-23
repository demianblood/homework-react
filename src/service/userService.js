import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const userService = {
    getAll: () => axiosService.get(urls.users).then(value => value.data),
    getUserById: (id) => axiosService.get(`${urls.users}/${id}`).then(value => value.data),
    getUserPosts: (id) => axiosService.get(`${urls.users}/${id}${urls.posts}`).then(value => value.data),
    getUsersAlbums: (id) => axiosService.get(`${urls.users}/${id}${urls.albums}`).then(value => value.data)
}