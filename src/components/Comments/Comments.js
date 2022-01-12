import React, {useEffect, useState} from 'react';

import "./comments.css"
import {getComments} from "../../service/jsonService";
import Comment from "../Comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        getComments().then(value => setComments(value.data))
    },[])
    return (
        <div className='comments'>
            {
                comments.map(comments =>
                    <Comment key={comments.id} comment={comments}/>
                )
            }
        </div>
    );
};

export default Comments;