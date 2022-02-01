import React from 'react';

const Cat = ({cat: {id, name},dispatch}) => {
    return (
        <div>
            <div>{name}</div>
            <button onClick={() => dispatch({type: 'DEL_CAT', payload: {id}})}>delete</button>
        </div>
    );
};

export {Cat};