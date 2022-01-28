import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {episodesService} from "../../services/episodesService";
import {EpisodeCharacter} from "../EpisodeCharacter/EpisodeCharacter";
import css from './EpisodeDetails.module.css'

const EpisodeDetails = () => {
    const [episode, setEpisode] = useState({})
    const {id} = useParams();

    useEffect(() => {
        episodesService.getById(id).then(episode => setEpisode({...episode}))
    }, [id]);

    return (
        <div className={css.box}>
            <div className={css.info}>
                <h3>{episode.name}</h3>
                <div>Episode: {episode.episode}</div>
                <div>Air date: {episode.air_date}</div>
                <h2>Character :</h2>
            </div>
            <div className={css.characters}>
                {
                    episode.characters && episode.characters.map(url => <EpisodeCharacter url={url}/>)
                }
            </div>
        </div>
    );
};

export {EpisodeDetails};