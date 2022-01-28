import {axiosService} from "./axiosService";
import {urls} from "../config/urls";

export const episodesService = {
    getAll: () => axiosService.get(`${urls.episode}`).then(value => value.data.results),
    getById: (id) => axiosService.get(`${urls.episode}/${id}`).then(value => value.data)
}