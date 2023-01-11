import {useForm} from "react-hook-form";
import {useNavigate, useSearchParams} from "react-router-dom";
import {useState} from "react";

import {authService} from "../../services";

const Login = () => {
    const {handleSubmit, register, reset} = useForm();
    const navigate = useNavigate();
    const [error, setError] = useState(null);

    const submit = async (user) => {
        try {
            const {data} = await authService.login(user);
            authService.setToken(data)
            navigate('/cars')
        } catch (e) {
            setError(e.response.data)
        }
        reset()
    }
    const [query,] = useSearchParams();

    return (
        <div>
            {query.has('expSession') && <h1>Session end!</h1>}
            <form onSubmit={handleSubmit(submit)}>
                {error && <h3>{error}</h3>}
                <input type="text" placeholder={'userName'} {...register('userName')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};

export {Login};