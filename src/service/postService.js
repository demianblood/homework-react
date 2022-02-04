
import {axiosServiceJSON} from "./axiosServiceJSON";
import {urls} from "../configs";

export const postService = {
    getAll: () => axiosServiceJSON.get(urls.posts).then(value => value.data),
    getById: (id) => axiosServiceJSON.get(`${urls.posts}/${id}`).then(value => value.data),
    getAllByUserId: (id) => axiosServiceJSON().get(`${urls.posts}?userId=${id}`).then(value => value.data)
}
