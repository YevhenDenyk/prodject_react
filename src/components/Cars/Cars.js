import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {CarForm} from "../CarForm/CarForm";
import {Car} from "../Car/Car";
import {cartAction} from "../../redux";

const Cars = () => {

const dispatch = useDispatch();
const {cars} = useSelector(state => state.carReducer);
useEffect(()=>{
    dispatch(cartAction.getAll())
},[])

    return (
        <div>
            <div>
            <CarForm/>
            </div>
            <div>
                {cars.map(car=><Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};