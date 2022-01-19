import React, {useState} from 'react';
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";
import UpdatedForm from "./components/Form/UpdatedForm";
import css from "./App.module.css"

const App = () => {
    let [trigger, setTrigger] = useState(null);
    const createNewCar = data => {
        setTrigger(data)
    }
    return (
        <>
            <div className={css.forms}>
                <Form update={createNewCar}/>
                <UpdatedForm/>
            </div>
            <Cars trigger={trigger}/>
        </>
    );
};

export default App;