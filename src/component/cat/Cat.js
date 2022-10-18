const Cat = ({cat,delCat}) => {
    return (
        <div>
                {cat.name}
                <button onClick={()=>delCat(cat.id)}> Delete</button>
        </div>
    );
};

export {Cat};