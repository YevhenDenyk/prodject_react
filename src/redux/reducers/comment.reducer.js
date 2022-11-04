import {LOAD_COMMENTS} from "../actions/actions";

const commentReducer = (state={comment:[]}, action) => {
  const {type, payload} = action;

  switch (type) {
      case LOAD_COMMENTS:
          return {...state,comment: payload}
      default:
          return state
  }
}

export {commentReducer}