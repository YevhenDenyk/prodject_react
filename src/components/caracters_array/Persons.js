import {persons} from "./data";
import Person from "./Person";


function Persons() {
    return (
        <div>
            {persons.map(person => <Person key={person.id} person={person}/>)}
        </div>
    );
}

export default Persons;
