import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {commentsService} from "../../service";
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";

const CommentsDetailsPage = () => {
    const [comment, setComment] = useState(null);
    const {id} = useParams();
    const {state} = useLocation();

    useEffect(() => {
        if (state === null) {
            commentsService.getCommentsById(id).then(value => setComment(value));
        } else {
            setComment(null)
        }
    }, [id]);

    return (
        <div>
            {state && <div>
                <h4>{state.postId}.{state.id} - {state.name}</h4>
                <span>{state.email}</span>
                <p>{state.body}</p>
            </div>}
            {comment && <div>
                <h4>{comment.postId}.{comment.id} - {comment.name}</h4>
                <span>{comment.email}</span>
                <p>{comment.body}</p>
            </div>}
            {(id > 500 || id < 1) && <NotFoundPage/>}
        </div>
    );
};

export {CommentsDetailsPage};