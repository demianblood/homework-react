import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {updateCar} from "../../store";

const FormUpdate = ({car}) => {
    const {id, model, price, year} = car;
    const {handleSubmit, register, reset} = useForm();
    const dispatch = useDispatch();
    const update = (id,car) => {
        updateCar(id,)
    }

    return (
        <form onSubmit={handleSubmit(update)}>
            <label>Model:<input type="text" {...register('model')} placeholder={model}/></label>
            <label>Price:<input type="number" {...register('price')} placeholder={price}/></label>
            <label>Year:<input type="number" {...register('year')} placeholder={year}/></label>
            <button>Save</button>
        </form>
    );
};

export {FormUpdate};