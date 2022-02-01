import React from 'react';

const Dog = ({dog: {id, name}, dispatch}) => {
    return (
        <div>
            <div>{name}</div>
            <button onClick={() => dispatch({type: "DEL_DOG", payload: {id}})}>delete</button>
        </div>
    );
};

export {Dog};