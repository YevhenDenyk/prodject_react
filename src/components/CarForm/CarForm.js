import {useForm} from "react-hook-form";

const CarForm = () => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'});

    const submit = (car) => {

    };

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
            <input type="text" placeholder={'price'}{...register('price')}/>
            <input type="text" placeholder={'year'}{...register('year')}/>
            <button disabled={!isValid}>Save</button>
        </form>
    );
};

export {CarForm};