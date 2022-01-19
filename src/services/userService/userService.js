import axios from "axios";
import {urls} from "../../config/urls";

export const userService = {
    getAll: () => axios.get(urls.users).then(value => value.data),
    getById: (id) => axios.get(`${urls.users}/${id}`).then(value => value.data)
}