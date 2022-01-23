import React, {useEffect, useState} from 'react';
import { useLocation, useParams} from "react-router-dom";

import {postService} from "../../service";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";
import {PostCommentsPage} from "../AllPostsPages/PostCommentsPage/PostCommentsPage";

const PostDetailsPage = () => {
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState(false);

    const {id} = useParams();
    const {state} = useLocation();

    const showComments = () => {
        setComments(!comments)
    }

    useEffect(() => {
        if (state === null) {
            postService.getPostById(id).then(value => setPost(value));
        } else {
            setPost(null)
        }

    }, [id]);
    return (
        <div>
            {state && <div><h4>{state.userId}.{state.id} - {state.title}</h4><p>{state.body}</p>
                <button onClick={() => {
                    showComments()
                }
                }>get Comments
                </button>
            </div>}

            {post && <div><h4>{post.userId}.{post.id} - {post.title}</h4><p>{post.body}</p>
                <button onClick={() => {
                    showComments()
                }}>get Comments
                </button>
            </div>}
            {(id > 100 || id < 1) && <NotFoundPage/>}
            {comments && <PostCommentsPage/>}
        </div>
    );
};

export {PostDetailsPage};