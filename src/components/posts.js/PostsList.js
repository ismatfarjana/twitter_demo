import React from "react";
import PostCreate from "./PostCreate";

const PostList = () => {
  return (
    <div>
      <h4 className="container-body">Home</h4>
      <div className="writetweet">
        {" "}
        <PostCreate />
      </div>

      <div>Posts</div>
    </div>
  );
};
export default PostList;
