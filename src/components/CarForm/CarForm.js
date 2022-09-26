import {useForm} from "react-hook-form";
import {joiResolver} from '@hookform/resolvers/joi';
import {useEffect} from "react";

import {carValidator} from "../../validators";
import {carService} from "../../services";

const CarForm = ({setCars, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        resolver: joiResolver(carValidator),
        mode: 'all'
    });

// useEffect(() => {     - для прописування стандартних праметрів у форму
    //     // setValue('model', 'VolksWagen')
    //     // setValue('price', '15000')
    //     // setValue('year', '2018')
    // }, [setValue])

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model, {shouldValidate: true})
            setValue('price', carForUpdate.price, {shouldValidate: true})
            setValue('year', carForUpdate.year, {shouldValidate: true})
        }
    }, [carForUpdate, setValue])

    const submit = async (car) => {
        if (carForUpdate) {
            const {data} = carService.updateById(carForUpdate.id, car);
            setCars((cars)=>{
                const findCar = cars.find(value=>value.id===carForUpdate.id);
                Object.assign(findCar, data)
                setCarForUpdate(null)
                return [...cars]
            })
        }else {
        const {data} = await carService.create(car);
        setCars(cars => [...cars, data]);
        }
        reset()
    }


    return (
        // <form onSubmit={handleSubmit(submit)} onChange={() => console.log(errors)}>
        //     <input type="text" placeholder={'model'}{...register('model', {
        //         required: true,
        //         minLength: {value: 4, message: 'min 4 ch'}
        //     })}/>
        //     {errors.model&&<span>{errors.model.message}</span>}
        //     <input type="text" placeholder={'price'}{...register('price', {valueAsNumber: true})}/>
        //     <input type="text" placeholder={'year'}{...register('year', {valueAsNumber: true})}/>
        //     <button disabled={!isValid}>Save</button>
        // </form>
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'model'}{...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            <input type="text" placeholder={'price'}{...register('price')}/>
            {errors.price && <span>{errors.price.message}</span>}
            <input type="text" placeholder={'year'}{...register('year')}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{carForUpdate ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};