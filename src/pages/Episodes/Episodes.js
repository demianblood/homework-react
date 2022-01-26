import React, {useEffect, useState} from 'react';

import {episodesService} from "../../services/episodesService";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'
import {Outlet} from "react-router-dom";

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);
    const [id, setId] = useState(3)

    useEffect(() => {
        episodesService.getAll(id).then(value => setEpisodes(value));
    }, [id])
    return (
        <div>
            {<div className={css.wrap}>
                {
                    episodes.map(value => <Episode key={value.id} value={value}/>)
                }
            </div>}
            <div className={css.btnBox}>
                <button onClick={() => setId(id - 1)}>Prev Page</button>
                <button onClick={() => setId(id + 1)}>Next Page</button>
            </div>
        </div>

    );
};

export {Episodes};