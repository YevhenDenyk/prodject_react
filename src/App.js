import {Routes,Route} from "react-router-dom";

import {MainLayout} from "./layouts";
import {CommentsPage, PostsPage, SingleCommentsPage, SinglePostPage, SingleUserPage, UsersPage} from "./pages";

function App() {
  return (
    <Routes>
      <Route path={'/'} element={<MainLayout/>}>
          <Route path={'users'} element={<UsersPage/>}/>
          <Route path={'users/:id'} element={<SingleUserPage/>}/>
          <Route path={'comments'} element={<CommentsPage/>}/>
          <Route path={'comments/:id'} element={<SingleCommentsPage/>}/>
          <Route path={'posts'} element={<PostsPage/>}/>
          <Route path={'posts/:id'} element={<SinglePostPage/>}/>
      </Route>
    </Routes>
  );
}

export default App;
