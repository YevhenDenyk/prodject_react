import {FC, useEffect} from "react";

import {Car} from "../Car/Car";
import {useAppDispatch, useAppSelector} from "../../hooks";
import {carAction} from "../../redux";

const Cars: FC = () => {

    const {cars} = useAppSelector(state => state.carReducer);

    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(carAction.getAll())
    }, [dispatch])

    return (
        <div>
            {cars.map(car => <Car car={car} key={car.id}/>)}
        </div>
    );
};

export {Cars};