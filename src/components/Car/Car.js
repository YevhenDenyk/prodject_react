import {useDispatch} from "react-redux";

import {cartAction} from "../../redux";
import css from './Car.module.css'

const Car = ({car}) => {
    const {id, model, price, year} = car

    const dispatch = useDispatch();

    return (
        <div className={css.wrap}>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=>dispatch(cartAction.setCar(car))}>Set car</button>
            <button onClick={()=>dispatch(cartAction.deleteCar(id))}>Delete</button>
            <button onClick={()=>dispatch(cartAction.setCarForUpdate(car))}>Update</button>
        </div>
    );
};

export {Car};