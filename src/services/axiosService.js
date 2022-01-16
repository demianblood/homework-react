import axios from "axios";
import baseUrls from "../configs/urls/baseUrls";

export const axiosService = axios.create({
    baseURL: baseUrls
});