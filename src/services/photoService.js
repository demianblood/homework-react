import axios from "axios";
import {urls} from "../config/urls";

export const photoService = {
    getAll: () => axios.get(urls.photos).then(value => value.data),
    getById:(id)=> axios.get(`${urls.photos}/${id}`).then(value => value.data),
    getAllByAlbumId:(id)=>axios.get(`${urls.photos}?albumId=${id}`).then(value => value.data)
}