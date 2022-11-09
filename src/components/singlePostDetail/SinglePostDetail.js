const SinglePostDetail = ({post}) => {
    return (
        <div>
            <div>{post.id}</div>
            <div>{post.userId}</div>
            <div>{post.title}</div>
            <div>{post.body}</div>
        </div>
    );
};

export {SinglePostDetail};