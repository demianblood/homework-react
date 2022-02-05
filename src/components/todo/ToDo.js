import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import css from './ToDo.module.css'
import {completeTodo, dellTodo} from "../../store";

const ToDo = ({item}) => {
    const dispatch = useDispatch()
    const {todo, id, status} = item;
    const onChange = () => {
        dispatch(completeTodo({id}))
    }
    return (
        <div>
            <div>
                <input type="checkbox" onChange={onChange} checked={status}/>
                {!status ? <span className={css.dontCheck}>{todo}</span> : <span className={css.check}>{todo}</span>}
            </div>
            <button onClick={() => dispatch(dellTodo({id}))}>delete</button>
        </div>
    );
};

export {ToDo};