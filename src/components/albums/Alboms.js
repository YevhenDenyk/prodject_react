import {useEffect, useState} from "react";

import {albumsSrtvice} from "../../services";
import {Album} from "../album/Album";

const Alboms = () => {
    const [album, setAlbum] = useState([]);
    useEffect(() => {
        albumsSrtvice.getAll().then(({data}) => setAlbum(data))
    }, [])

    return (
        <div>
            {
                album.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {Alboms};