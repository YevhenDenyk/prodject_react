import {useReducer} from "react";

import {addCat, deleteCat} from "./count.actions";

const reduser = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case addCat :
            return {...state, cats: [...state.cats, {name: payload, id: Date.now()}]}
        case deleteCat:
            return {...state, cats: state.cats.filter(cat => cat.id !== payload)}
    }
}

const catUseReducer = () => useReducer (reduser, {cats: []})

export {catUseReducer}