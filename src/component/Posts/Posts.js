import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {postActions} from "../../redux";
import {Post} from "../Post/Post";

const Posts = () => {

    const dispatch = useDispatch();
    const {posts,error,loading} = useSelector(state => state.postReducer);
    useEffect(() => {
        dispatch(postActions.getAll())
    }, [])

    return (
        <div>
            {error && 'ERROR'}
            {loading && 'LOADING!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!'}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};