import {Outlet} from "react-router-dom";

import {Comments} from "../components";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/> <br/>
            <Comments/>
        </div>
    );
};

export {CommentsPage};