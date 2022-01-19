import {userService} from "./userService/userService";
import {postService} from "./postService/postService";
import {photoService} from "./photoService/photoService";
import {commentService} from "./commentService/commentService";
import {albumService} from "./albumService/albumService";
import {axiosService} from "./axiosService/axiosService";

const axios = axiosService;
const users = userService;
const posts = postService;
const comments = commentService;
const albums = albumService;
const photos = photoService;


export const service = {
    axios,users, posts, comments, albums, photos
}