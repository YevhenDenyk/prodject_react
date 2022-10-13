import {DEC, INC, RESET, SET, useCount1Reduser} from "../redusers";

const Count1 = () => {
    const [state, dispatch] = useCount1Reduser();
    return (
        <div>
            <h2>Count1: {state.count1}</h2>
            <button onClick={() => dispatch({type: INC})}>INC</button>
            <button onClick={() => dispatch({type: DEC})}>DEC</button>
            <button onClick={() => dispatch({type: SET, payload: 20})}>SET</button>
            <button onClick={() => dispatch({type: RESET})}>RESET</button>

        </div>
    );
};

export {Count1};