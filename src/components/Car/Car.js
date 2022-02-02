import React, {useState} from 'react';
import {useDispatch} from "react-redux";

import {deleteCarById} from "../../store/car.slice";
import {FormUpdate} from "../Forms";

const Car = ({car}) => {
    const [hover, setHover] = useState(false)
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
                <button onClick={() => setHover(!hover)}>update</button>
            </div>
            {hover && <FormUpdate car={car}/>}
            <hr/>
        </div>
    );
};

export {Car};