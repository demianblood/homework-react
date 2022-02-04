import React, {useEffect} from 'react';
import {Comment} from "../Comment/Comment";
import {useDispatch, useSelector} from "react-redux";
import {getAllComments} from "../../store";

const Comments = () => {
    const {comments} = useSelector(state => state.comments);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllComments())
    }, [])
    return (
        <div>
            {comments?.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};