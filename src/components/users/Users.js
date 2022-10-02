import {useEffect, useState} from "react";

import {userService} from "../../service";
import {User} from "../user/User";
import {UserForm} from "../userForm/UserForm";


const Users = () => {

    const [users, setUsers] = useState([]);
   useEffect(()=>{
       userService.getAll().then(({data})=>setUsers(data))
   },[])

    return (
        <div>
            <UserForm setUsers={setUsers} />
            {users.map(user=> <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};