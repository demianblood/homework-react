import React from 'react';
import "./SpaceFlights.css"

const SpaceFlight = ({value}) => {
    return (
        <div>
            <div className="box-space">
                <div>
                    <h4>{value.mission_name}</h4>
                    <span>{value.launch_year}</span>
                </div>
                <div>
                    <img className='image' src={value.links.mission_patch} alt={value.mission_name}/>
                </div>
            </div>
            <hr/>
        </div>
    );
};

export default SpaceFlight;