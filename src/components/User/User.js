const User = ({user, getUserId}) => {
    return (
        <div>
            <h3>ID: {user.id} Name: {user.name}</h3>
            <p>email: {user.email}</p>
            <button onClick={() => getUserId(user.id)}>list posts from the user</button>
        </div>
    );
};

export {User};
