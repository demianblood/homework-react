import axios from "axios";

let axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {}
});

const getUsers = () => {
    return axiosInstance.get('/users')
};
const getPosts = () => {
    return axiosInstance.get("/posts")
};
const getComments = () => {
    return axiosInstance.get('/comments')
};



export {
    getPosts,getUsers,getComments
}