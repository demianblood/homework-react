import React from 'react';

import css from './Photo.module.css'

const Photo = ({photo}) => {
    const {title, thumbnailUrl} = photo
    return (
        <div className={css.block}>
            <span>{title}</span>
            <img src={thumbnailUrl} alt={title}/>
        </div>
    );
};

export {Photo};