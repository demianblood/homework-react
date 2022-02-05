import React from 'react';
import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {deleteCar, setUpdatedCar} from "../../../store";

const Car = ({car}) => {
    const {id, model, price, year} = car
    const dispatch = useDispatch()
    return (
        <div className={css.carBox}>
            <div>
                <div>Model:{model}</div>
                <div>Price:{price}</div>
                <div>Year:{year}</div>
            </div>
            <div className={css.carBtn}>
                <button onClick={() => dispatch(deleteCar({id}))}>delete</button>
                <button onClick={() => dispatch(setUpdatedCar({car}))}>update</button>
            </div>
        </div>
    );
};

export {Car};