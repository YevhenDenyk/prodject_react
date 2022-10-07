import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return (
        <div>
            <h3>{comment.id} --- {comment.name}</h3>
            <span><Link to={comment.postId.toString()}>get Post</Link></span>
        </div>
    );
};

export {Comment};