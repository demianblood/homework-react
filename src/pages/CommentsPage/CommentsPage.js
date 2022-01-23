import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {commentsService} from "../../service";
import {Comment} from "../../components";
import css from './CommentsPage.module.css'

const CommentsPage = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        commentsService.getAll().then(value => setComments([...value]));
    }, [])
    return (
        <div className={css.page}>
            <div>{
                    comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }</div>
            <Outlet/>
        </div>
    );
};

export {CommentsPage};