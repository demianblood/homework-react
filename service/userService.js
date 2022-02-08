import axios,{AxiosResponse} from 'axios';
import {IUserJSON} from "../interface/userJSON.interface";
export const userService={
    getAll:():Promise<AxiosResponse<IUserJSON[]>> => axios.get('https://jsonplaceholder.typicode.com/users').then(value=>value.data)
}