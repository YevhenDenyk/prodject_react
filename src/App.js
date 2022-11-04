import {Routes, Route} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CommentsPage, PostsPage, SingleUserPage, UsersPage} from "./pages";

function App() {
    return (
        <Routes>
            <Route pas={'/'} element={<MainLayout/>}>
                <Route pas={'users'} element={<UsersPage/>}/>
                <Route pas={'users/:id'} element={<SingleUserPage/>}/>
                <Route pas={'posts'} element={<PostsPage/>}/>
                <Route pas={'comments'} element={<CommentsPage/>}/>
            </Route>
        </Routes>
    );
}

export default App;
