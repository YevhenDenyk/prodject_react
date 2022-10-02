const User = ({user}) => {
    return (
        <div>
            <h3>ID:{user.id} Name: {user.name} Surname: {user.surname}</h3>
            <p>Email: {user.email}</p>
        </div>
    );
};

export {User};