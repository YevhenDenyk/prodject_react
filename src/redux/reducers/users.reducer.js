import {LOAD_SINGLE_USER, LOAD_USERS} from "../action/action";

const usersReducer = (state={users:[],user:null},action) => {
    const {type,payload}=action

    switch (type) {
        case LOAD_USERS:
            return {...state, users:payload}
        case LOAD_SINGLE_USER:
            const user = state.users.find(user=>user.id === payload)
            return {...state,user}
        default:
            return state
    }
}

export {usersReducer}