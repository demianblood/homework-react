import css from "./Car.module.css"
import {carService} from "../../services/carService";

const Car = ({car}) => {
    const {id, model, price, year} = car;
    const deleteCar = id => {
        carService.deleteById(id);
    }
    return (
        <div>
            <div className={css.car}>
                <div>
                    <div>id:{id}</div>
                    <div>model:{model}</div>
                    <div>price:{price}</div>
                    <div>year:{year}</div>
                </div>
                <div className={css.btnBox}>
                    <button className={css.btn} onClick={() => deleteCar(id)}>delete this car</button>
                </div>
            </div>

            <hr/>
        </div>
    );
};

export default Car;