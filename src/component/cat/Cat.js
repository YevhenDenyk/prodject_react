const Cat = ({cat,catID}) => {
    return (
        <div>
                {cat.name}
                <button onClick={catID=>{cat.id}}> Delete</button>
        </div>
    );
};

export {Cat};