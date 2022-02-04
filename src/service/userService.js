import {urls} from "../configs";
import {axiosServiceJSON} from "./axiosServiceJSON";

export const userService={
    getAll:()=>axiosServiceJSON.get(urls.users).then(value => value.data),
    getById:(id)=>axiosServiceJSON.get(`${urls.users}/${id}`).then(value => value.data),
}