import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {LOAD_SINGLE_COMMENTS} from "../../redux";
import {SingleCommentDetail} from "../singleCommentDetail/SingleCommentDetail";

const SingleCommentComponent = () => {

    const {comment} = useSelector(state => state.commentsReducer);

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch({type: LOAD_SINGLE_COMMENTS, payload: +id})
    },[id])

    return (
        <div>
            {
                comment && (<SingleCommentDetail comment={comment}/>)
            }
        </div>
    );
};

export {SingleCommentComponent};