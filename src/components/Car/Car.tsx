import {FC, ReactNode} from "react";

import {ICar} from "../../interfaces";
import {useNavigate} from "react-router-dom";

interface IProps {
    car: ICar;
    children?: ReactNode
}


const Car: FC<IProps> = ({car}) => {

    const {id, year, model, price} = car

    const navigate = useNavigate()

    return (
        <div>
            <div> id:{id} </div>
            <div> model:{model} </div>
            <div> year:{year} </div>
            <div> price:{price} </div>
            <button onClick={()=> navigate(`${id}`,{state:car})}>  Navigate</button>
        </div>
    );
};

export {Car};