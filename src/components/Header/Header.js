import React from 'react';
import {Link} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    return (
        <div>
            <div className={css.btnBox}>
                <Link to={'/episodes'}>
                    <button className={css.btn}>Check all episodes Rick and Morty</button>
                </Link>
                <Link to={'/character'}>
                    <button className={css.btn}> Check all character from Rick and Morty</button>
                </Link>
            </div>

        </div>
    );
};

export {Header};