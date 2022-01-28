import React, {useEffect, useState} from 'react';

import {episodesService} from "../../services/episodesService";
import {Episode} from "../Episode/Episode";
import css from './Episodes.module.css'

const Episodes = () => {
    const [episodes, setEpisodes] = useState([]);

    useEffect(() => {
        episodesService.getAll().then(value => setEpisodes(value));
    }, [])
    return (
        <div>
            {<div className={css.wrap}>
                {
                    episodes.map(value => <Episode key={value.id} value={value}/>)
                }
            </div>}
        </div>

    );
};

export {Episodes};