import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {createCar} from "../../store";

const FormCreate = () => {
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();

    const submit = (data) => {
        dispatch(createCar({data}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model:<input type="text" {...register('model')}/></label>
            <label>Price:<input type="number" {...register('price')}/></label>
            <label>Year:<input type="number" {...register('year')}/></label>
            <button>Save</button>
        </form>
    );
};

export {FormCreate};