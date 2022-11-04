import {combineReducers} from "redux";

import {postsReducer} from "../reducers/posts.reducer";
import {commentReducer} from "../reducers/comment.reducer";
import {usersReducer} from "../reducers/users.reducer";

const reducer = combineReducers({
    postsReducer,
    commentReducer,
    usersReducer
});

export {reducer}