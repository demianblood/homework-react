import React from 'react';
import {useReducer} from "react";


const reducer = (state, action) => {
    switch (action.type) {
        case 'inc':
            return {...state, count1: state.count1 + 1}
        case 'inc2':
            return {...state, count2: state.count2 + 1}
        case 'inc3':
            return {...state, count3: state.count3 + 1}
        case 'dec':
            return {...state, count1: state.count1 - 1}
        case 'dec2':
            return {...state, count2: state.count2 - 1}
        case 'dec3':
            return {...state, count3: state.count3 - 1}
        case 'reset':
            return {...state, count1: 0}
        case 'reset2':
            return {...state, count2: 0}
        case 'reset3':
            return {...state, count3: 0}
        default:
            throw new Error('Error is')
    }
    return state
}

const HomeWorkReducer = () => {
    const countState = {count1: 0, count2: 0, count3: 0}
    const [state, dispatch] = useReducer(reducer, countState)
    return (
        <div>
            <div>
                Count 1: {state.count1}
                <button onClick={() => dispatch({type: 'inc'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset'})}>reset</button>
            </div>
            <hr/>
            <div>
                Count 2: {state.count2}
                <button onClick={() => dispatch({type: 'inc2'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec2'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset2'})}>reset</button>
            </div>
            <hr/>
            <div>
                Count 3: {state.count3}
                <button onClick={() => dispatch({type: 'inc3'})}>inc</button>
                <button onClick={() => dispatch({type: 'dec3'})}>dec</button>
                <button onClick={() => dispatch({type: 'reset3'})}>reset</button>
            </div>
            <hr/>
        </div>
    );
};

export {HomeWorkReducer};