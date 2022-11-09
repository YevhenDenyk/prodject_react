import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {LOAD_SINGLE_POST} from "../../redux";
import {SinglePostDetail} from "../singlePostDetail/SinglePostDetail";

const SinglePostComponent = () => {
    const {post} = useSelector(state => state.postsReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch({type: LOAD_SINGLE_POST, payload: +id})
    },[id])

    return (
        <div>
            {
                post && (<SinglePostDetail post={post}/>)
            }
        </div>
    );
};

export {SinglePostComponent};