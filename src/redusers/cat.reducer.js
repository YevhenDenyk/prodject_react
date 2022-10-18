import {useReducer} from "react";

import {addCat, deleteCat} from "./count.actions";

const reducer = (state, action) => {
    const {type, payload} = action

    switch (type) {
        case addCat :
            return { cats: [...state.cats, {name: payload, id: Date.now()}]}
        case deleteCat:
            return { cats: state.cats.filter(cat => cat.id !== payload)}
    }
}

const useCatReducer = () => useReducer(reducer, {cats: []})

export {useCatReducer}