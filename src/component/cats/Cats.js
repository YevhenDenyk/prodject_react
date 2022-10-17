import {useRef} from "react";

import {addCat, catUseReducer, deleteCat} from "../../redusers";


const Cats = () => {

    const [state, dispatch] = catUseReducer()

    const catInput = useRef()

    const createCat = () => {
        dispatch({type: addCat, payload: catInput.current.value})
        catInput.current.value = ''
    }

    return (
        <div>
            <div className={'cats'}>
                <label> Cats name: <input type="text" ref={catInput}/> </label>
                <button onClick={createCat}>Save</button>
            </div>
            {
                state.cats.map(cat => (<div key={cat.id}>
                    {cat.name}
                    <button onClick={() => dispatch({type: deleteCat, payload: cat.id})}> Delete</button>
                </div>))
            }
        </div>
    );
};

export {Cats};