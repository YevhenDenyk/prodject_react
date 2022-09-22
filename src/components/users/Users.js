// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js
// ви покажете детальну інфомацію про користувача(довільно обрану інформацію)

import React, {useEffect, useState} from 'react';
import User from "./User";
import UserDetail from "./UserDetail";

function Users() {
    const [users,setUsers]= useState([])
    const [user, setUser] = useState(null)
    let eded = console.log(user)

    // const lift = (obj)=>{
    //     setUser(obj)
    // } - можна позбутися оскільки функція просто запускає функцію, відповідно ми можемо передати її відразу

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {setUsers(value)});
    },[])

    return (
        <div>
            {/*{user && <div>{JSON.stringify(user)}</div>}*/}
            {/*{user? <div> qwrqwr </div> : <div> Dqwrqwr </div>}*/}
            {user?
                <div>
                    <UserDetail item={user} key={user.id}/>
                </div>
                :
                <div>Detailed information of user</div>
            }
            <hr/>
            {users.map(user => (<User item={user} key={user.id} lift={setUser}/>))}
        </div>
    );
}

export default Users;
