import axiosService from "./axiosService";
import {urls} from "../config/urls/urls";

export const carService = {
    getAll: () => axiosService.get(urls.cars).then(value => value.data),
    deleteById: (id) => axiosService.delete(`${urls.cars}/${id}`),
    updateById: (id, car) => axiosService.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    create: (data) => axiosService.post(urls.cars, data).then(value => value.data)
}