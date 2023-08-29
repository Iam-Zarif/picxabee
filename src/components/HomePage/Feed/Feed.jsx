import React from "react";
import CreatePost from "./createPost/CreatePost";
import Stories from "./story/Stories";
import Posts from "./postCard/Posts";

const Feed = () => {
  return (
   <>
    <Stories />
     <CreatePost/>
     <Posts />
   </>
  );
};

export default Feed;
