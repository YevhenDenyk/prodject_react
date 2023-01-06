import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {carAction} from "../../redux";
import {Car} from "../Car/Car";

const Cars:FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);

    const dispatch = useAppDispatch();

    useEffect(()=>{
        dispatch(carAction.getAll())
    },[dispatch])


    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id} />)}
        </div>
    );
};

export {Cars};