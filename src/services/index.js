import {userService} from "./userService/userService";
import {postService} from "./postService/postService";
import {photoService} from "./photoService/photoService";
import {commentService} from "./commentService/commentService";
import {albumService} from "./albumService/albumService";

const users = userService;
const posts = postService;
const comments = commentService;
const albums = albumService;
const photos = photoService;


export const service = {
    users, posts, comments, albums, photos
}