import {useForm} from "react-hook-form";

import {carService} from "../../services";

const CarForm = ({setCars}) => {
    const {handleSubmit, register,reset} = useForm({
        mode: "all",
    });

    const submit = (obj) => {
        carService.create(obj).then(({data}) => setCars(cars => [...cars, data]))
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model', {required: true})}/>
            <input type="text" placeholder={'price'} {...register('price', {required: true})}/>
            <input type="text" placeholder={'year'} {...register('year', {required: true})}/>
            <button>Save</button>
        </form>
    );
};

export {CarForm}
