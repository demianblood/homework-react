import React from 'react';
import {useSelector} from "react-redux";

const Counter = () => {
    const {toDos, todoComplete} = useSelector(state => state.todo)
    const changed = toDos.filter(todo => todo.status === true);
    console.log(changed)
    return (
        <div>
            Complete:{changed.length}
            <hr/>
            AllTodo: {toDos.length}

        </div>
    );
};

export {Counter};