import axios from "axios";
import {urls} from "../config/urls";

export const commentService = {
    getAll: () => axios.get(urls.comments).then(value => value.data),
    getById: (id) => axios.get(`${urls.comments}/${id}`).then(value => value.data),
    getAllByPostId: (id) => axios.get(`${urls.comments}?postId=${id}`).then(value => value.data)
}