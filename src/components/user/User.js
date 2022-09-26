const User = ({user}) => {

    return (
        <div>
            <h3>id:{user.id} name: {user.name}</h3>
            <img src={user.image} alt={user.name}/>
        </div>
    );
};

export {User};