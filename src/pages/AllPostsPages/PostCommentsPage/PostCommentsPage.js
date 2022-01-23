import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {postService} from "../../../service";
import {Comment} from "../../../components";

const PostCommentsPage = () => {
    const [comments, setComments] = useState([]);
    const {id} = useParams();
    const hover = true

    useEffect(() => {
        postService.getPostComments(id).then(value => setComments(value));
    }, [])
    return (
        <div>
            <div>
                {
                    comments.map(comment => <Comment key={comment.id} comment={comment} hover={hover}/>)
                }
            </div>
            <hr/>
        </div>
    );
};

export {PostCommentsPage};