import {Link} from "react-router-dom";

const User = ({user}) => {
    return (
        <div>
            <div>{user.name} --- {user.email}</div>
            <div><Link to={user.id.toString()}>Detail user</Link></div>
        </div>
    );
};

export {User};