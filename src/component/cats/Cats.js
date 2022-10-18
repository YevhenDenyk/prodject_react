import {useRef} from "react";

import {Cat} from "../cat/Cat";
import {addCat, deleteCat, useCatReducer} from "../../redusers";

const Cats = () => {

    const [state, dispatch] = useCatReducer()

    const catInput = useRef()

    const createCat = () => {
        dispatch({type: addCat, payload: catInput.current.value})
        catInput.current.value = ''
    }
    const delCat = (catID) => dispatch({type: deleteCat, payload: catID})

    return (
        <div>
            <div className={'cats'}>
                Cats name: <input type="text" ref={catInput}/>
                <button onClick={createCat}>Save</button>
            </div>
            {
                state.cats.map(cat => <Cat key={cat.id} cat={cat} delCat={delCat}/>)
            }
        </div>
    );
};

export {Cats};