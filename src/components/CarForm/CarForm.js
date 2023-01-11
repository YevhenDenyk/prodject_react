import {useForm} from "react-hook-form";

import {carService} from "../../services";

const CarForm = ({setCars}) => {
    const {handleSubmit, register, reset} = useForm();

    const submit = async (car) => {
        const {data} = await carService.create(car);
        setCars(cars => [...cars, data])
        reset()
    }


    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price')}/>
                <input type="text" placeholder={'year'} {...register('year')}/>
                <button>Save car</button>
            </form>

        </div>
    );
};

export {CarForm};