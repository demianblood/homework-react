import React, {useEffect, useState} from 'react';
import {SpaceXServer} from "../../server/spaceXServer";
import SpaceFlight from "../SpaceFlight/SpaceFlight";

const SpaceFlights = () => {
    let [flights, setFlights] = useState([]);
    useEffect(() => {
        SpaceXServer().then(flights => {
                setFlights(flights.filter(flights => flights.launch_year !== "2020"));
            }
        )
    }, [])
    console.log(flights)
    return (
        <div>
            {
                flights.map(value => <SpaceFlight key={value.flight_number} value={value}/>)
            }

        </div>
    );
};

export default SpaceFlights;