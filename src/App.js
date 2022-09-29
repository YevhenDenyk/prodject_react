import './App.css';
import {useState} from "react";

import {Posts, Users} from "./components";
import {postService} from "./services";

function App() {

    const [post, setPost] = useState([]);
    const getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => setPost(data) )
    }

    return (
        <div>
            <Users getUserId={getUserId}/>
            <Posts post={post}/>
        </div>
    );
}

export default App;
