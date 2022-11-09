import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <div>{comment.id} --- {comment.name}</div>
            <span><Link to={comment.id.toString()}>detail comment</Link></span>
        </div>
    );
};

export {Comment};