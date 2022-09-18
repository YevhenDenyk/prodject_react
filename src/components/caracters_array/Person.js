
function Person(props) {
    const {person} = props
    return (
        <div>
            <h3>{person.id} -- {person.name}</h3>
            <p>{person.gender}</p>
        </div>
    );
}

export default Person;