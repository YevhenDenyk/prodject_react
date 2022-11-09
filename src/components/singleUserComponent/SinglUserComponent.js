import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {LOAD_SINGLE_USER} from "../../redux";
import {SinglUserDetail} from "../singleUserDetail/SinglUserDetail";

const SinglUserComponent = () => {

    const {user} = useSelector(state => state.usersReducer);

    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({type: LOAD_SINGLE_USER, payload: +id})
    }, [id])

    return (
        <div>
            {user && (<SinglUserDetail user={user}/>)}
        </div>
    );
};

export {SinglUserComponent};