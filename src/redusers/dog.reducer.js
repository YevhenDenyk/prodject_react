import {useReducer} from "react";

import {addDog, deleteDog} from "./count.actions";

const useDogReducer = () => useReducer(reducer, {dogs: []})

const reducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case addDog :
            return {...state, dogs: [...state.dogs, {name: payload, id: Date.now()}]};
        case deleteDog:
            return {...state, dogs: state.dogs.filter(dog => dog.id !== payload)};
        default:
            return state;
    }
}

export {useDogReducer}