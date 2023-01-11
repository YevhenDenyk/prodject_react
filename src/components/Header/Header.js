import {useNavigate} from "react-router-dom";

import css from './Header.module.css'

const Header = () => {
    const navigate = useNavigate();
    return (
        <div className={css.Header}>
            <div className={css.btns}>
            <button onClick={()=>navigate('/register')}> Register</button>
            <button onClick={()=>navigate('/login')}> Login </button>
            </div>
        </div>
    );
};

export {Header};