const axios = require("axios");

const baseURL = require("../config/urls");

const axiosService = axios.create({baseURL});

export {axiosService}