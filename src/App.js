import './App.css';
import {useState} from "react";

import {Posts, Users} from "./components";
import {postService} from "./service";

function App() {

    const [post, setPost] = useState([]);

    const postsUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPost(data))
    }

    return (
        <div>
            <Users postsUserId={postsUserId}/>
            <Posts post={post}/>
        </div>
    );
}

export default App;
