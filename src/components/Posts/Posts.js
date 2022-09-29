import {Post} from "../Post/Post";

const Posts = ({post}) => {
    return (
        <div>
            {post.map(post => <Post key={post.id} post={post}/> )}
        </div>
    );
};

export {Posts};