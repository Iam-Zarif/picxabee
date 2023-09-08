import React from "react";
import CreatePost from "./createPost/CreatePost";
import Stories from "./story/Stories";
import PostCards from "./postCard/PostCards";


const Feed = () => {
  return (
    <>
      <Stories />
      <CreatePost />
      <PostCards />
    </>
  );
};

export default Feed;
