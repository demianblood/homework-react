import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCar, createNewCar, updateCar} from "../../store";

const FormCar = () => {
    const {handleSubmit, register, setValue, reset} = useForm();
    const {updatedCar} = useSelector(state => state.cars)
    const dispatch = useDispatch();


    const submit = (data) => {
        if (updatedCar) {
            const id = updatedCar.id
            dispatch(updateCar({id, data}))
        } else {
            dispatch(createNewCar({data}));
        }
        reset()
    }
    useEffect(() => {
        if (updatedCar) {
            setValue('model', updatedCar.model)
            setValue('price', updatedCar.price)
            setValue('year', updatedCar.year)
        }
    }, [updatedCar])

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label>Model:<input type="text" {...register('model')}/></label>
            <label>Price:<input type="text" {...register('price')}/></label>
            <label>Year:<input type="text" {...register('year')}/></label>
            <button>{updatedCar ? "update" : "save"}</button>
        </form>
    );
};

export {FormCar};