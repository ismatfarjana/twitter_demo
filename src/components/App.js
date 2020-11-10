import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PostCreate from "./posts.js/PostCreate";
import PostShow from "./posts.js/PostShow";
import PostEdit from "./posts.js/PostEdit";
import PostsList from "./posts.js/PostsList";
import PostDelete from "./posts.js/PostDelete";
import "../App.css";
import Header from "./Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Header />
          <Route path="/" exact component={PostsList} />
          <Route path="/tweets/new" exact component={PostCreate} />
          <Route path="/tweets/edit" exact component={PostEdit} />
          <Route path="/tweets/delete" exact component={PostDelete} />
          <Route path="/tweets/show" exact component={PostShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
