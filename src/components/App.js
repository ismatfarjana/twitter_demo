import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PostCreate from "./posts.js/PostCreate";
import PostShow from "./posts.js/PostShow";
import PostEdit from "./posts.js/PostEdit";
import PostsList from "./posts.js/PostsList";
import PostDelete from "./posts.js/PostDelete";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Route path="/" exact component={PostsList} />
        <Route path="/tweets/new" exact component={PostCreate} />
        <Route path="/tweets/edit" exact component={PostEdit} />
        <Route path="/tweets/delete" exact component={PostDelete} />
        <Route path="/tweets/show" exact component={PostShow} />
      </div>
    </BrowserRouter>
  );
};

export default App;
