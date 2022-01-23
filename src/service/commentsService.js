import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const commentsService = {
    getAll: () => axiosService.get(urls.comments).then(value => value.data),
    getCommentsById: (id) => axiosService.get(`${urls.comments}/${id}`).then(value => value.data),
}