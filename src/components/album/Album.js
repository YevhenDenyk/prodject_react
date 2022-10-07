const Album = ({album}) => {
    return (
        <div>
            <h3>{album.id}-- {album.title}</h3>
        </div>
    );
};

export {Album};