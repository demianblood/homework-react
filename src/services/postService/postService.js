import axios from "axios";
import {urls} from "../../config/urls";

export const postService = {
    getAll: () => axios.get(urls.posts).then(value => value.data),
    getById:(id)=> axios.get(`${urls.posts}/${id}`).then(value => value.data),
    getAllByUserId:(id)=>axios.get(`${urls.posts}?userId=${id}`).then(value => value.data)
}


