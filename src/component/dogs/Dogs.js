import {useRef} from "react";

import {addDog, deleteDog, useDogReducer} from "../../redusers";
import {Dog} from "../dog/Dog";

const Dogs = () => {

    const [state, dispatch] = useDogReducer();

    const dogInout = useRef()

    const createDog = () => {
      dispatch({type: addDog, payload: dogInout.current.value});
      dogInout.current.value = ''
    }

    const delDog = (dogID) => dispatch({type: deleteDog, payload: dogID})

    return (
        <div>
            <label> Dog mame: <input type="text" ref={dogInout}/></label>
            <button onClick={createDog}>set dog</button>
            {
                state.dogs.map(dog=> <Dog key={dog.id} dog={dog} delDog={delDog}/>)
            }
        </div>
    );
};

export {Dogs};