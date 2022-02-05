import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addToDo} from "../../store";

const FormCreate = () => {
    const {handleSubmit, reset, register,} = useForm();

    const dispatch = useDispatch()

    const submit = (data) => {
        dispatch(addToDo({id: new Date().getTime(), todo: data.todo, status: false}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label><input type="text" {...register("todo",)}/></label>
            <button>Create</button>
        </form>
    );
};

export {FormCreate};