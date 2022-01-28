import React, {useEffect, useState} from 'react';
import {characterService} from "../../services/characterService";

import css from "./EpisodeCharacter.module.css";

const EpisodeCharacter = ({url}) => {
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        characterService.getByUrl(url).then(value => setCharacter(value))
    }, []);
    return (
        <div>
            {character && <div className={css.box}>
                <img className={css.image} src={character?.image} alt="/"/>
                <div className={css.infoBox}>
                    <h3>{character?.name}</h3>
                    <span><b>Status</b>: {character?.status}</span>
                    <span><b>Species</b>: {character?.species}</span>?
                    <span><b>Gender</b>: {character?.gender}</span>
                    <span><b>Origin</b>: {character?.origin?.name}</span>
                    <span><b>Location</b>: {character?.location?.name}</span>
                </div>
            </div>}

        </div>
    );
};

export {EpisodeCharacter};