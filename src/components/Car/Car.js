import React from 'react';
import {useDispatch} from "react-redux";

import css from './Car.module.css'
import {deleteCar, deleteCarThunk} from "../../store";

const Car = ({car: {id, model, price, year}, getCarId}) => {
    const dispatch = useDispatch()
    return (
        <div className={css.carBox}>
            <div>
                <div>Model:{model}</div>
                <div>Price:{price}</div>
                <div>Year:{year}</div>
            </div>
            <button onClick={()=>dispatch(deleteCar({id}))}>delete</button>
            <button onClick={()=>dispatch(deleteCarThunk({id}))}>delete car Dispatch</button>
        </div>
    );
};

export {Car};