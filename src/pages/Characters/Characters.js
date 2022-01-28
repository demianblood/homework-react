import React, {useEffect, useState} from 'react';

import {characterService} from "../../services/characterService";
import {Character} from "../Character/Character";
import css from './Characters.module.css'
import {NotFoundPage} from "../NotFoundPage/NotFoundPage";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [id, setId] = useState(1)

    useEffect(() => {
        characterService.getAll(id).then(value => setCharacters(value));

    }, [id])
    return (
        <div>{
            <div>
                <div className={css.wrap}>
                    {
                        characters && characters.map(character => <Character key={character.id} character={character}/>)
                    }
                </div>
                <div className={css.btnBox}>
                    <button onClick={() => setId(id - 1)}>Prev Page</button>
                    <button onClick={() => setId(id + 1)}>Next Page</button>
                </div>
            </div>
        }
        </div>
    );
};

export {Characters};