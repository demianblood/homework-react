import React, {useState} from 'react';

import css from './Character.module.css'
import {characterService} from "../../services/characterService";

const Character = ({character}) => {
    const {name, status, species, type, gender, origin, location, image} = character;
    return (
        <div className={css.characterBox}>
            <img className={css.image} src={image} alt="/"/>
            <div className={css.infoBox}>
                <h3>{name}</h3>
                <span><b>Status</b>: {status}</span>
                <span><b>Species</b>: {species}</span>
                <span><b>Gender</b>: {gender}</span>
                <span><b>Origin</b>: {origin.name}</span>
                <span><b>Location</b>: {location.name}</span>
            </div>
        </div>
    );
};

export {Character};