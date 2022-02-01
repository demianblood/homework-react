import React, {useRef} from 'react';

import css from './Form.module.css'

const Form = ({dispatch}) => {
    const catInput = useRef();
    const dogInput = useRef();
    const formSubmit = (e) => {
        e.preventDefault();
        e.target.reset()
    }
    const saveCat = () => {
        dispatch({type: 'ADD_CAT', payload: {cat: catInput.current.value}})
    }
    const saveDog = () => {
        dispatch({type: 'ADD_DOG', payload: {dog: dogInput.current.value}})
    }
    return (
        <form onSubmit={formSubmit} className={css.form}>
            <input type="text" placeholder={'cat'} ref={catInput}/>
            <button onClick={saveCat}>Save</button>

            <input type="text" placeholder={'dog'} ref={dogInput}/>
            <button onClick={saveDog}>Save</button>
        </form>
    );
};

export {Form};