import axios from "axios";
import {urls} from "../../config/urls";

export const albumService = {
    getAll: () => axios.get(urls.albums).then(value => value.data),
    getById:(id)=> axios.get(`${urls.albums}/${id}`).then(value => value.data),
    getAlbumByUserId:(id)=>axios.get(`${urls.albums}?userId=${id}`).then(value => value.data)
}


