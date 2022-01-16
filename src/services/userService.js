import {axiosService} from "./axiosService";
import {urls} from "../configs/urls/baseUrls";

export const userService={
    getAll:()=>axiosService.get(urls.users).then(value => value.data)
}