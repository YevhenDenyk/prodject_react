const Hors = ({hors, delHors}) => {
    return (
        <div>
            {hors.name}
            <button onClick={()=>delHors(hors.id)}>Delete</button>
        </div>
    );
};

export {Hors};