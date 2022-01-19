import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {CarValidator} from "../../validators/CarValidator";
import {carService} from "../../services/carService";

const UpdatedForm = ({updateCar}) => {

    const {register, handleSubmit, formState: {errors}}
        = useForm({resolver: joiResolver(CarValidator), mode: 'onTouched'});

    const update = async (car) => {
        try {
            const update = await carService.updateById(car.id, car);
            updateCar(update)
        } catch (error) {

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(update)}>
                <div><label>Id car: <input type="text" defaultValue={''} {...register('id')}
                                           placeholder='enter id'/></label></div>
                <div><label>Model:<input type="text" defaultValue={''} {...register('model')}
                                         placeholder='update your model'/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}
                                         placeholder='update your price'/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="text" defaultValue={''} {...register('year')}
                                        placeholder='update your year'/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>save change</button>
            </form>

        </div>
    );
};

export default UpdatedForm;