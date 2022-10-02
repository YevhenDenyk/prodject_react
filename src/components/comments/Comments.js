import {useEffect, useState} from "react";

import {commentsService} from "../../service";
import {Comment} from "../comment/Comment";
import {CommentForm} from "../commentForm/commentForm";

const Comments = () => {

    const [comments, setComments] = useState([]);

    useEffect(()=>{
        commentsService.getAll().then(({data})=> setComments(data.slice(1,10)))
    },[])

    return (
        <div>
            <CommentForm setComments={setComments}/>
            {comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};