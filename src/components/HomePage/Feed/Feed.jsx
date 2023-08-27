import React from "react";
import CreatePost from "./createPost/CreatePost";
import Stories from "./story/Stories";

const Feed = () => {
  return (
   <>
    <Stories />
     <CreatePost/>
   </>
  );
};

export default Feed;
