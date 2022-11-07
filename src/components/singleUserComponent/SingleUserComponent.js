import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {LOAD_SINGLE_USER} from "../../redux";
import {SingleUserDetail} from "../singleUserDetail/SingleUserDetail";

const SingleUserComponent = () => {

    const {user} = useSelector(state => state.usersReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch({type: LOAD_SINGLE_USER, payload: +id})
    },[id])

    return (
        <div>
            {
                user && (<SingleUserDetail user={user}/>)
            }
        </div>
    );
};

export {SingleUserComponent};