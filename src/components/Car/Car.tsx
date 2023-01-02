import {FC, ReactNode} from "react";

import {ICar} from "../../interfaces";

interface IProps {
    car: ICar,
    children?: ReactNode
}

const Car: FC<IProps> = ({car}) => {

    const {id, model, year, price} = car;

    return (
        <div>
            <div> id:{id} </div>
            <div> model:{model} </div>
            <div> year:{year} </div>
            <div> price:{price} </div>
        </div>
    );
};

export {Car};