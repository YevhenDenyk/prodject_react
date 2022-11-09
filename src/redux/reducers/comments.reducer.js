import {LOAD_COMMENTS, LOAD_SINGLE_COMMENTS} from "../action/action";

const commentsReducer = (state = {comments: [], comment: null}, action) => {
    const {type, payload} = action;

    switch (type) {
        case LOAD_COMMENTS:
            return {...state, comments: payload}
        case LOAD_SINGLE_COMMENTS:
            const comment = state.comments.find(comment=>comment.id === payload)
            return {...state,comment}
        default:
            return state
    }
}

export {commentsReducer}