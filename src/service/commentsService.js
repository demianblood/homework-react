import {axiosServiceJSON} from "./axiosServiceJSON";
import {urls} from "../configs";

export const commentService = {
    getAll: () => axiosServiceJSON.get(urls.comments).then(value => value.data),
    getById: (id) => axiosServiceJSON.get(`${urls.comments}/${id}`).then(value => value.data),
    getAllByPostId: (id) => axiosServiceJSON().get(`${urls.comments}?postId=${id}`).then(value => value.data)
}