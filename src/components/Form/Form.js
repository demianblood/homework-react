import React, {useState} from 'react';

import {useForm} from "react-hook-form";
import {carService} from "../../services/carService";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/CarValidator";

const Form = ({createNewCar}) => {
    const [formError, setFormError] = useState([]);
    const { register, handleSubmit, watch, formState: {errors}} = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});

    // const submit = (car) => {
    //     carService.create(car).then(value => console.log(value)).catch(error => {
    //         setFormError(error.response.data)
    //     })

    const submit = async (car) => {
        try {
            const newCar = await carService.create(car);
            createNewCar(newCar)
        } catch (error) {
            setFormError(error.response)
        }
        // carService.create(car).then(value => console.log(value)).catch(error => {
        //     setFormError(error.response.data)
        // })
    }
    // watch(event => console.log(event)) get data in real time
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model:<input type="text" defaultValue={''} {...register('model')}
                                         placeholder='put your model'/></label>
                </div>
                {errors.model && <span>{errors.model.message}</span>}
                {/*{formError.model && <span>{formError.model[0]}</span>}*/}
                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}
                                         placeholder='put your price'/></label>
                </div>
                {errors.price && <span>{errors.price.message}</span>}
                {/*{formError.price && <span>{formError.price[0]}</span>}*/}
                <div><label>Year:<input type="text" defaultValue={''} {...register('year')}
                                        placeholder='put your year'/></label>
                </div>
                {errors.year && <span>{errors.year.message}</span>}
                {/*{formError.year && <span>{formError.year[0]}</span>}*/}
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;