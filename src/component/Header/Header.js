import {useSelector} from "react-redux";

import css from './Header.module.css'

const Header = () => {

    const {currentUser} = useSelector(state => state.userReducer);
    const {currentPost, postFromAPI} = useSelector(state => state.postReducer);
    const {currentComment, commentFromAPI} = useSelector(state => state.commentsReducer);

    return (
        <div className={css.Header}>
            {currentUser && currentUser.name}
            <hr/>
            {currentPost && currentPost.body}
            <hr/>
            {postFromAPI && postFromAPI.title}
            <hr/>
            {currentComment && currentComment.body}
            <hr/>
            {commentFromAPI && commentFromAPI.name}
        </div>
    );
};

export {Header};