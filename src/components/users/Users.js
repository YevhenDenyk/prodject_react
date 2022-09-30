import {useEffect, useState} from "react";

import {userService} from "../../service";
import {User} from "../user/User";

const Users = ({postsUserId}) => {
    const [user, setUser] = useState([]);

    useEffect(()=>{
        userService.getUsers().then(({data})=>setUser(data))
    },[])

    return (
        <div>
            {user.map(user=> <User key={user.id} user={user} postsUserId={postsUserId} />)}
        </div>
    );
};

export {Users};