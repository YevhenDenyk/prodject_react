import {useReducer} from "react";

import {DEC, INC, RESET, SET} from "./count.actions";

const reduser = (state, action) => {
    switch (action.type) {
        case INC:
            return {count2: state.count2 + 1}
        case DEC:
            return {count2: state.count2 - 1}
        case SET:
            return {count2: action.payload}
        case RESET:
            return {count2: 0}
    }
}

const useCount2Reducer = () => useReducer(reduser, {count2: 0});

export {useCount2Reducer}