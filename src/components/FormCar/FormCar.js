import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {addCar, createNewCar, updateCar} from "../../store";
import css from './FormCar.module.css'

const FormCar = () => {
    const {handleSubmit, register, setValue, reset, formState: {errors,isValid}} = useForm({mode:"onBlur"});
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
        <div className={css.form}>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input
                    type="text" {...register('model', {
                    required: "Пункт Model бов'язковe до заповнення",
                    minLength: {value: 5, message: 'мінімум 5 символів'}
                })}/></label>
                <label>Price:<input
                    type="text"
                    {...register('price', {required: "Пункт Price oбов'язковe до заповнення"})}/></label>
                <label>Year:<input
                    type="text" {...register('year', {required: "Пункт Year oбов'язковe до заповнення"})}/></label>
                <button>{updatedCar ? "update" : "save"}</button>
            </form>
            {(errors?.model || errors?.price || errors?.year) &&
            <p className={css.errorText}>{errors?.model?.message || errors?.price?.message || errors?.year?.message || "Error"}</p>}
        </div>

    );
};

export {FormCar};