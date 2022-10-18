import {useRef} from   "react";

import {addHors, deleteHors, useHorseReducer} from "../../redusers";
import {Hors} from "../hors/Hors";

const Horse = () => {

    const [state, dispatch] = useHorseReducer()

    const inputRef = useRef()

    const setHors = () => {
        dispatch({type: addHors, payload: inputRef.current.value})
        inputRef.current.value = ''
    }

    const delHors = (idHors) => {
        dispatch({type: deleteHors, payload: idHors})
    }


    return (
        <div>
            <div>
                Set Hors: <input type="text" ref={inputRef}/>
                <button onClick={setHors}>Set</button>
            </div>
            {
                state.horse.map(hors => <Hors kay={hors.id} hors={hors} delHors={delHors}/>)
            }

        </div>
    );
};

export {Horse};