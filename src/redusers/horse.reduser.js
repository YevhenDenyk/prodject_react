import {useReducer} from "react";

import {addHors, deleteHors} from "./count.actions";

const useHorseReducer = () => useReducer(reducer, {horse: []});

const reducer = (state, action) => {
    const {type, payload} = action
    switch (type) {
        case addHors:
            return {horse: [...state.horse, {name: payload, id: Date.now()}]};
        case deleteHors:
            return {horse: state.horse.filter(hors => hors.id !== payload)}
        default:
            throw new Error()
    }
}

export {useHorseReducer}