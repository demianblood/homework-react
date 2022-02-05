import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {ToDo} from "../todo/ToDo";

const TodoList = () => {
    const {toDos} = useSelector(state => state.todo);
    return (
        <div>
            What i need to do:
                {
                    toDos.map(item => <ToDo item={item}/>)
                }
        </div>
    );
};

export {TodoList};