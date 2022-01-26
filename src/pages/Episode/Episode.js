import React from 'react';

import css from './Episode.module.css'
import {Link} from "react-router-dom";

const Episode = ({value}) => {
    const {id, name, air_date, episode} = value;
    return (
        <div>
            <div className={css.box}>
                <h3>{name}</h3>
                <div>Episode: {episode}</div>
                <div>Air date: {air_date}</div>
                <Link to={`${id}`} state={'tytuyi'}>
                    <button>get Details</button>
                </Link>
            </div>

        </div>
    );
};

export {Episode};