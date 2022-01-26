import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {episodesService} from "../../services/episodesService";
import {Character} from "../Character/Character";

const EpisodeDetails = () => {
    const [episode, setEpisode] = useState({})
    const [characters, setCharacters] = useState([])
    const {id} = useParams();

    useEffect(() => {
        episodesService.getById(id).then(episode => setEpisode({...episode}))
    }, [id]);
    useEffect(() => {
        setCharacters(episode.characters)
    }, [episode])
    return (
        <div>
            <h3>{episode.name}</h3>
            <div>Episode: {episode.episode}</div>
            <div>Air date: {episode.air_date}</div>
            <div>
                <h2>Character</h2>
                {characters?.map(character => <Character url={character}/>)}

            </div>
        </div>
    );
};

export {EpisodeDetails};