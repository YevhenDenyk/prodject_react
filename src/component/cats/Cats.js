import {useRef} from "react";

import {addCat, useCatReducer, deleteCat} from "../../redusers";
import {Cat} from "../cat/Cat";


const Cats = (delCat) => {

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
                <label> Cats name: <input type="text" ref={catInput}/> </label>
                <button onClick={createCat}>Save</button>
            </div>
            {
                state.cats.map(cat => <Cat key={cat.id} cat={cat} catID={catID}/>)
            }
        </div>
    );
};

export {Cats};