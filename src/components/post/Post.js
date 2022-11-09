import {Link} from "react-router-dom";

const Post = ({post}) => {
    return (
        <div>
            <div>{post.id}---{post.title}</div>
            <span><Link to={post.id.toString()}>Detail post</Link></span>
        </div>
    );
};

export {Post};