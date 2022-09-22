function UserDetail(props) {
    let {item:user} = props
    return (
        <div>
            <h2>id: {user.id}  Name: {user.name}</h2>
            <p>
                email: {user.email} <br/>
                phone :{user.phone} <br/>
                city: {user.address.city}

            </p>

        </div>
    );
}

export default UserDetail;