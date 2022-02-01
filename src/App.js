import React, {useState} from 'react';

import {Cars, Form} from "./components";
import css from './App.module.css'

const App = () => {
  return (
        <>
            <div className={css.form}>
                <Form/>
            </div>
            <Cars/>
        </>
    );
};

export {App};