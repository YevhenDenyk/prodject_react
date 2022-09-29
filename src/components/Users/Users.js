import {useEffect, useState} from "react";

import {User} from "../User/User";
import {usersService} from "../../services";


const Users = ({getUserId}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(value => setUsers(value.data))
    }, [])

    return (
        <div>
            {users.map(user => (<User key={user.id} user={user} getUserId={getUserId}/>))}
        </div>
    );
};

export {Users};