const Dog = ({dog, delDog}) => {
    return (
        <div>
            <p>Dog name: {dog.name}</p>
            <button onClick={() => delDog(dog.id)}>Delete</button>
        </div>
    );
};

export {Dog};