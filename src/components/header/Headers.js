import {Link} from "react-router-dom";

import css from './Headers.module.css'

const Headers = () => {
    return (
        <div className={css.nav_menu}>
            <div><Link to={'/'}>Main</Link></div>
            <div><Link to={'users'}>Users</Link></div>
            <div><Link to={'comments'}>Comments</Link></div>
            <div><Link to={'posts'}>Posts</Link></div>
        </div>
    );
};

export {Headers};