import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {cartAction} from "../../redux";
import {useEffect} from "react";

const CarForm = () => {

    const {register, handleSubmit, setValue, reset} = useForm({mode: 'all'});

    const {carForUpdate, errors} = useSelector(state => state.carReducer);

    const dispatch = useDispatch();

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate, setValue])

    const submit = async (obj) => {
        if (carForUpdate) {
            await dispatch(cartAction.updateCar({id: carForUpdate.id, car: obj}))
        } else {
            await dispatch(cartAction.createCar(obj))
        }
            reset()
    }

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