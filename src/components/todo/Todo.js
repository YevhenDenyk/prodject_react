const Todo = ({todo}) => {
    return (
        <div>
            <h3>{todo.id} --- {todo.title}</h3>
        </div>
    );
};

export {Todo};