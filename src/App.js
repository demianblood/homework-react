import React from 'react';
import {Cars} from "./components";
import {FormCreate} from "./components/Forms";

const App = () => {
    return (
        <div>
            <div><FormCreate/></div>
            <Cars/>
        </div>
    );
};

export {App};