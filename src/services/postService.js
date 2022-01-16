import {axiosService} from "./axiosService";
import {urls} from "../configs/urls/baseUrls";

export const postService = {
    getByUserId: (id) => axiosService.get(`${urls.postsByUserId}${id}`).then(value => value.data)
}