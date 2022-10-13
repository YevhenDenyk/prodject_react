import {DEC, INC, RESET, SET, useCount2Reducer} from "../redusers";

const Count2 = () => {
    const [state, dispatch] = useCount2Reducer();
    return (
        <div>
            <h2>Count 2: {state.count2}</h2>
            <button onClick={()=>dispatch({type:INC})}>INC</button>
            <button onClick={()=>dispatch({type:DEC})}>DEC</button>
            <button onClick={()=>dispatch({type:SET, payload:30})}>SET</button>
            <button onClick={()=>dispatch({type:RESET})}>RESET</button>
        </div>
    );
};

export {Count2};