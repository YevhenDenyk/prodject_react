import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {carAction} from "../../redux/slice";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

const Cars = () => {

    const dispatch = useDispatch();

    const {cars} = useSelector(state => state.carReducer);

    useEffect(() => {
        dispatch(carAction.getCars())
    }, [])


    return (
        <div>
            <div>
                <CarForm/>
            </div>
            <div>
                {cars.map(car => <Car key={car.id} car={car}/>)}
            </div>
        </div>
    );
};

export {Cars};