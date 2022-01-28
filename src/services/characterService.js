import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const characterService = {
    getAll: (id) => axiosService.get(`${urls.character}?page=${id}`).then(value => value.data.results),
    getById: (id) => axiosService.get(`${urls.character}/${id}`).then(value => value.data),
    getByUrl: (url) => axiosService.get(`${url}`).then(value => value.data)
}