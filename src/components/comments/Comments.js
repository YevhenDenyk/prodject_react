import {useEffect, useState} from "react";

import {commentsService} from "../../services";
import {Comment} from "../comment/Comment";

const Comments = () => {
    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsService.getAll().then(({data})=>setComments(data))
    },[])


    return (
        <div>
            {
                comments.map(comment=><Comment key={comment.id} comment={comment}/>)
            }
        </div>
    );
};

export {Comments};