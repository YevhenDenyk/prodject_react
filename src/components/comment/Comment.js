const Comment = ({comment}) => {
    return (
        <div>
            <h3>{comment.id} {comment.name}</h3>
            <p>{comment.email}</p>
        </div>
    );
};

export {Comment};