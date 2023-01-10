import {useForm} from "react-hook-form";
import {useState} from "react";
import {useNavigate} from "react-router-dom";

import {authService} from "../../services";

const Register = () => {

    const {register,handleSubmit,reset} = useForm();
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    const submit = async (user) => {
        try {
           await authService.register(user)
            navigate('/login')
        }catch (e) {
            setError(e.response.data?.username)
        }
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            {error && <h3>{error}</h3>}
            <input type="text" placeholder={'userName'} {...register('userName')}/>
            <input type="text" placeholder={'password'} {...register('password')}/>
            <button>Register</button>
        </form>
    );
};

export {Register};