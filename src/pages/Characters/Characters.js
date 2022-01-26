import React, {useEffect, useState} from 'react';

import {characterService} from "../../services/characterService";
import {Character} from "../Character/Character";
import css from './Characters.module.css'

const Characters = () => {
    const [character, setCharacter] = useState([]);
    const [id, setId] = useState(1)

    useEffect(() => {
        if (id < 1) {
            setId(42)
        }
        if (id > 42) {
            setId(1)
        }
        characterService.getAll(id).then(value => setCharacter(value));
    }, [id])
    return (
        <div>{
            <div>
                <div className={css.wrap}>
                    {
                        character.map(value => <Character key={value.id} value={value}/>)
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