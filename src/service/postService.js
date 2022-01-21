import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const postService = {
    getAll: () => axiosService.get(urls.posts).then(value => value.data),
    getPostById: (id) => axiosService.get(`${urls.posts}/${id}`).then(value => value.data),
    getPostComments: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(value => value.data),

}