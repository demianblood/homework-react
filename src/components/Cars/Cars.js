import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger, delTrigger}) => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))

    }, [trigger]);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car} delTrigger={delTrigger}/>)
            }
        </div>
    );
};

export default Cars;