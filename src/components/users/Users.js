// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)
import React, {useEffect, useState} from 'react';
import User from "./User";

function Users() {
    const [users,setUsers]= useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {setUsers(value)});
    },[])

    return (
        <div>
            {users.map(value => (<User item={value} key={value.id}/>))}
        </div>
    );
}

export default Users;
