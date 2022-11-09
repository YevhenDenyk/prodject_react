import {LOAD_POSTS, LOAD_SINGLE_POST} from "../action/action";

const postsReducer = (state = {posts: [], post: null}, action) => {
    const {type, payload} = action
    switch (type) {
        case LOAD_POSTS:
            return {...state, posts: payload}
        case LOAD_SINGLE_POST:
            const post = state.posts.find(post => post.id === payload)
            return {...state, post}
        default:
            return state
    }
}

export {postsReducer}