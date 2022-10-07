const Post = ({post}) => {
    return (
        <div>
            <h3>{post.id} --- {post.title}</h3>
        </div>
    );
};

export {Post};