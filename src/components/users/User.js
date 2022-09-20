

function User(props) {
    let item = props
    return (
        <div>
            <h2>{item.id} --- {item.name}</h2>
        </div>
    );
}

export default User;