const SinglUserDetail = ({user}) => {
    return (
        <div>
            {user.name}
            {user.address.street}
            {user.address.suite}
            {user.address.city}
        </div>
    );
};

export {SinglUserDetail};