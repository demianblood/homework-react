import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {createCar, updateCar} from "../../store";
import carReducer from "../../store/car.slice";

const FormCreate = () => {
    const {handleSubmit, register, reset, setValue} = useForm();
    const dispatch = useDispatch();
    const {carForUpdate} = useSelector(state => state['carReducer']);


    const submit = (data) => {
        if (carForUpdate) {
            dispatch(updateCar({id: carForUpdate.id, car: data}))
        } else {
            dispatch(createCar({data}))
        }
        reset()
    }
    useEffect(() => {
        console.log(carForUpdate);
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model:<input type="text" {...register('model')}/></label>
            <label>Price:<input type="number" {...register('price')}/></label>
            <label>Year:<input type="number" {...register('year')}/></label>
            <button>{carForUpdate?'Edit':'Save'}</button>
        </form>
    );
};

export {FormCreate};