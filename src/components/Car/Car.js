import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";

import carReducer, {deleteCarById, setCarForUpdate} from "../../store/car.slice";
import {FormUpdate} from "../Forms";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();
    return (
        <div>
            <hr/>
            <div>Model:{model}</div>
            <div>Price:{price}</div>
            <div>Year:{year}</div>
            <div>
                <button onClick={() => dispatch(deleteCarById({id}))}>delete</button>
                <button onClick={() => dispatch(setCarForUpdate({car}))}>update</button>
            </div>
            <hr/>
        </div>
    );
};

export {Car};