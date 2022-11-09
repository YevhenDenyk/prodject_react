const SingleCommentDetail = ({comment}) => {
    return (
        <div>
            <div>{comment.id} --- {comment.email}</div>
            <div>{comment.name}</div>
            <div>{comment.body}</div>
        </div>
    );
};

export {SingleCommentDetail};