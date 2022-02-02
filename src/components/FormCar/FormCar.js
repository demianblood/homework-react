import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {addCar,createCar} from "../../store";

const FormCar = () => {
    let {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch()

    const submit = (data) => {
        // dispatch(addCar({data}))
        dispatch(createCar({data}))
        reset()
    }
    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model:<input type="text" {...register('model')}/></label>
            <label>Price:<input type="text" {...register('price')}/></label>
            <label>Year:<input type="text" {...register('year')}/></label>
            <button>Save</button>
        </form>
    );
};

export {FormCar};