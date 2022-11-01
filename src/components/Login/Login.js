import {useForm} from "react-hook-form";
import {authService} from "../../services";
import {useNavigate, useSearchParams} from "react-router-dom";

const Login = () => {
    const {handleSubmit, register} = useForm();
    const navigate = useNavigate();

    const submit = async (user) => {
        try {
            const {data} = await authService.login(user);
            authService.setTokens(data);
            navigate('/cars')
        } catch (e) {
            console.log(e);
        }
    };

    const [query,] = useSearchParams();

    return (
        <div>
            {query.has('expSession') && <h1>Session end!</h1>}
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'username'} {...register('username')}/>
                <input type="text" placeholder={'password'} {...register('password')}/>
                <button>Login</button>
            </form>
        </div>
    );
};


export {Login};