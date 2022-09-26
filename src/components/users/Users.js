import {useEffect, useState} from "react";

import {User} from "../user/User";

const Users = () => {
    const {users, setUsers} = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {setUsers(value.results)});

    },[])

    return (
        <div>
            {users.map(user => <User kay={user.id} user={user}/>)}
        </div>
    );
};

export {Users};