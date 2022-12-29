import {useDispatch} from "react-redux";

import css from './car.module.css'
import {carAction} from "../../redux/slice";

const Car = ({car}) => {

    const {id,model,price,year}=car

    const dispatch = useDispatch();

    return (
        <div className={css.car}>
            <div>id:{id}</div>
            <div>model:{model}</div>
            <div>price:{price}</div>
            <div>year:{year}</div>
            <button onClick={()=>dispatch(carAction.deleteCar(id))}>Delete</button>
            <button onClick={()=>dispatch(carAction.getCarForUpdate(car))}>Update</button>
        </div>
    );
};

export {Car};