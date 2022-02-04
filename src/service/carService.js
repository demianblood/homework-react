import axios from "axios";
import {urls} from "../configs";

const axiosCarService = axios.create({baseURL: 'http://91.201.233.14/api/v2'})
export const carService = {
    getAll: () => axiosCarService.get(urls.cars).then(value => value.data),
    create: (car) => axiosCarService.post(urls.cars, car).then(value => value.data),
    deleteById: (id) => axiosCarService.delete(`${urls.cars}/${id}`),
    update: (id, car) => axiosCarService.patch(`${urls.cars}/${id}`, car).then(value => value.data)
}