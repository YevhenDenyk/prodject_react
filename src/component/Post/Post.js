import {useDispatch} from "react-redux";

import {postActions} from "../../redux";

const Post = ({post}) => {

    const dispatch = useDispatch();

    return (
        <div>
            <div>{post.id}</div>
            <div>{post.title}</div>
            <button onClick={()=> dispatch(postActions.setCurrentPost(post))}>set post</button>
            <button onClick={()=> dispatch(postActions.getById(post.id))}>get to API</button>
            <button onClick={()=>dispatch(postActions.deletePost(post.title))}>delete</button>
            <br/>
        </div>
    );
};

export {Post};