

function User(props) {
    let {item:user} = props
    return (
        <div>
            <h2>id: {user.id}  Name: {user.name}</h2>
            <p>
                {user.email} <br/> {user.address.city}

            </p>
        </div>
    );
}

export default User;