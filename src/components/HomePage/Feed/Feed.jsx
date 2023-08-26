import React from "react";
import CreatePost from "./createPost/CreatePost";

const Feed = () => {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <CreatePost/>
      </div>
    </div>
  );
};

export default Feed;
