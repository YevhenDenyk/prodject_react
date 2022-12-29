import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {carAction} from "../../redux/slice";

const CarForm = () => {

    const {setValue, handleSubmit, reset, register} = useForm({mode:"all"});
    const dispatch = useDispatch();
    const {carForUpdate, errors} = useSelector(state => state.carReducer);

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    const submit = async (obj) => {
        if (carForUpdate) {
            await dispatch(carAction.updateCar({id: carForUpdate.id, car: obj}))
        } else {
            await dispatch(carAction.createCar(obj))
        }
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'} {...register('model')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <input type="text" placeholder={'year'} {...register('year')}/>
            <button>{carForUpdate ? 'Update' : 'Create'}</button>
            {errors && <div>{JSON.stringify(errors)}</div>}
        </form>
    );
};

export {CarForm};