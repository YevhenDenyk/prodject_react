const User = ({user,postsUserId}) => {
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <p>
                Address: <br/>
                street: {user.address.street}<br/>
                suite: {user.address.suite}<br/>
                city: {user.address.city}
            </p>
<button onClick={()=>postsUserId(user.id)}>Post user</button>
        </div>
    );
};

export {User};