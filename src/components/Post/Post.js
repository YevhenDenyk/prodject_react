const Post = ({post}) => {
    return (
        <div>
            <h3>id: {post.id}</h3>
            <p>{post.title}</p>
        </div>
    );
};

export {Post};