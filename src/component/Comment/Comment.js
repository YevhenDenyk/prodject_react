import {useDispatch} from "react-redux";

import {commentAction} from "../../redux";

const Comment = ({comment}) => {
    const {email, name, id} = comment

    const dispatch = useDispatch();

    return (
        <div>
            <div> name: {name}</div>
            <div>email:{email}</div>
            <button onClick={() => dispatch(commentAction.setCurrentComment(comment))}>Detail body</button>
            <button onClick={() => dispatch(commentAction.getApiFromId(id))}>Get the comment from API</button>
            <button onClick={() => dispatch(commentAction.deleteComment(id))}>Delete</button>
            <hr/>
        </div>
    );
};

export {Comment};