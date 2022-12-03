import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {commentAction} from "../../redux";
import {Comment} from "../Comment/Comment";

const Comments = () => {

    const dispatch = useDispatch();
    const {comments, error, loading} = useSelector(state => state.commentsReducer);
    useEffect(() => {
        dispatch(commentAction.getAll())
    }, [])


    return (
        <div>
            <div>
                {error && 'ERROR'}
                {loading && 'LOADING @#$%&'}

            </div>
            <div>
                {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        </div>
    );
};

export {Comments};