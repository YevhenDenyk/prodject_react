const Post = ({post}) => {
    return (
        <div>
            <br/>
            <h3>Title: {post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export {Post};