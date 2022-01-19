import React, {useEffect, useState} from 'react';

import {carService} from "../../services/carService";
import Car from "../Car/Car";

const Cars = ({trigger}) => {
    let [cars, setCars] = useState([]);

    useEffect(() => {
        carService.getAll().then(value => setCars([...value]))
    }, [trigger, cars]);

    return (
        <div>
            {
                cars.map(car => <Car key={car.id} car={car}/>)
            }
        </div>
    );
};

export default Cars;